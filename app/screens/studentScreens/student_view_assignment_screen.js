import React, { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Alert } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Switch,
  Image,
  ScrollView,
} from "react-native";
import URI from "../../context/uri";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";

function StudentViewAssignmentScreen({ navigation, route }) {
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const AuthStr = "Bearer ".concat(Token);
  const { class_id } = route.params;
  const { id } = route.params;
  const { Status } = route.params;
  const ID = stateData.userReducer.id;

  const { Marks } = route.params;
  const { subject_id } = route.params;
  const { document } = route.params;
  const { submission_time } = route.params;
  const { submission_date } = route.params;
  const { details } = route.params;
  const { title } = route.params;
  const [isFetching, setIssFethin] = useState(false);

  const { faculty } = route.params;
  const [Title, setTitle] = useState("default");
  const [detail, setDetail] = useState("default");
  const [marks, setMarks] = useState("default");
  const [allow, setAllow] = useState(true);

  const [date, setDate] = useState("default");
  const [status, setStatus] = useState("default");
  const [submissionStatus, setSubmissionStatus] = useState("default");
  const [documenturi, setDocument] = useState(
    "http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf"
  );
  const [timestatus, setTimestatus] = useState(false);
  const getassignmentdetail = () => {
    axios
      .get(
        `${URI.uri}/AssignmentSubmissionViewSet/?student_id=${ID}&assignment=${id}`,
        {
          headers: { Authorization: AuthStr },
        }
      )
      .then((response) => {
        const d = response.data;
        var g = d.length;
        if (g == 1) {
          var s = d[0].submission_datetime;
          const dateTime = moment(`${s}`, "YYYY-MM-DD HH:mm:ss").format();
          setAllow(false);
          setSubmissionStatus("Submitted on " + dateTime);
          setIssFethin(true);
        }
        if (g == 0) {
          setSubmissionStatus("Not Submitted ");
          setAllow(true);
          setIssFethin(true);
        }
      })

      .catch((error) => {
        console.log("error " + error);
      });
  };
  if (!isFetching) {
    getassignmentdetail();
  }
  const getitle = () => {
    setTitle(title);
  };
  const getdetail = () => {
    setDetail(details);
  };
  const getMarks = () => {
    setMarks(Marks.toString());
  };
  const getDateandTime = () => {
    var countDownDate = new Date(submission_date).getTime();
    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setDate(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
      if (distance < 0) {
        clearInterval(x);
        setDate("Submission Time Over");
      }
    }, 1000);
  };
  const getDocument = () => {
    setDocument(document);
  };
  const geStatus = () => {
    if (Status == false) {
      setStatus("Assignemt is Closed");
    }
    if (Status == true) {
      setStatus("Can be Submitted");
    }
  };
  if (Title == "default") {
    getitle();
  }
  if (detail == "default") {
    getdetail();
  }
  if (marks == "default") {
    getMarks();
  }

  if (date == "default") {
    getDateandTime();
  }
  if (status == "default") {
    geStatus();
  }
  if (
    documenturi ==
    "http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf"
  ) {
    getDocument();
  }

  return (
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Upload Assignment", {
              assignment_id: id,
            })
          }
          style={{ marginRight: 10 }}
        >
          <Ionicons name="cloud-upload-outline" size={24} color="black" />
        </TouchableOpacity>
      ),
    }),
    (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, backgroundColor: "white" }}
      >
        {Title && (
          <View style={styles.container}>
            <Text style={styles.headingText}>View Assignment </Text>

            <Text style={styles.text}>Title</Text>

            <TextInput
              style={styles.titleinputText}
              value={Title}
              editable={false}
              placeholder="Title"
              placeholderTextColor="#003f5c"
              onChangeText={setTitle}
            />

            <Text style={styles.text}>Detail</Text>

            <TextInput
              style={styles.detailinputText}
              value={detail}
              editable={false}
              placeholder="Details"
              placeholderTextColor="#003f5c"
              multiline={true}
              textAlignVertical="top"
              onChangeText={setDetail}
            />

            <Text style={styles.text}>Marks</Text>

            <TextInput
              style={styles.titleinputText}
              value={marks}
              editable={false}
              placeholder="Marks"
              placeholderTextColor="#003f5c"
              onChangeText={setMarks}
            />

            <Text style={styles.text}>Submit Date & Time</Text>

            <TextInput
              style={styles.titleinputText}
              value={date}
              editable={false}
              placeholder="date"
              placeholderTextColor="#003f5c"
              onChangeText={setDate}
            />
            <Text style={styles.text}>Status</Text>

            <TextInput
              style={styles.titleinputText}
              value={status}
              editable={false}
              placeholder="Status"
              placeholderTextColor="#003f5c"
              onChangeText={setStatus}
            />
            <Text style={styles.text}>Submission Status</Text>

            <TextInput
              style={styles.titleinputText}
              value={submissionStatus}
              editable={false}
              //placeholder="Submission Status"
              placeholderTextColor="#003f5c"
              onChangeText={setSubmissionStatus}
            />

            <Text style={styles.text}>Assignment File</Text>
            <View style={styles.fileButtonsView}>
              <TouchableOpacity
                style={styles.fileView}
                onPress={() =>
                  
                  navigation.navigate("File Reader", {
                    uri: `${URI.uri}${documenturi}`,
                  })
                }
              >
                <Text style={styles.buttonText}>View</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.fileDownload}>
                <Text style={styles.buttonText}>Download</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    //justifyContent: "center",
    padding: "10%",
  },
  fileView: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 50,
    width: "35%",
    backgroundColor: "green",
    borderRadius: 15,
  },
  fileDownload: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "35%",
    backgroundColor: "#C41E3A",
    borderRadius: 15,
  },
  fileButtonsView: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#185079",
    marginTop: 10,
    marginBottom: 40,
  },
  titleinputText: {
    fontWeight: "bold",
    //height: 50,
    color: "black",
    marginVertical: 10,
  },
  detailinputText: {
    width: "80%",
    //height: 80,
    marginVertical: 20,
    //marginLeft: "14%",
    fontWeight: "bold",
    height: 50,
    color: "black",
    //backgroundColor: "red",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
  text: {
    color: "#003f5c",
    fontWeight: "bold",
    alignSelf: "flex-start",
    //marginLeft: "14%",
  },
});

export default StudentViewAssignmentScreen;
