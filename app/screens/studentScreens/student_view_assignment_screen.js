import React, { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import axios from "axios";
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
import { Ionicons } from "@expo/vector-icons";

function StudentViewAssignmentScreen({ navigation, route }) {
  const stateData = { ...state };
  const state = useSelector((state) => state);

  const { class_id } = route.params;
  const { id } = route.params;
  const { Marks } = route.params;
  const { subject_id } = route.params;
  const { document } = route.params;
  const { submission_time } = route.params;
  const { submission_date } = route.params;
  const { details } = route.params;
  const { title } = route.params;

  const { faculty } = route.params;
  const [Title, setTitle] = useState("default");
  const [detail, setDetail] = useState("default");
  const [marks, setMarks] = useState("default");
  const [date, setDate] = useState("default");
  const [status, setStatus] = useState("default");
  const [submissionStatus, setSubmissionStatus] = useState("default");
  const [documenturi, setDocument] = useState(
    "http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf"
  );
  const [timestatus, setTimestatus] = useState(false);

  const getitle = () => {
    setTitle(title);
  };
  const getdetail = () => {
    setDetail(details);
  };
  const getMarks = () => {
    console.log(Marks);
    setMarks(Marks.toString());
  };
  const getDateandTime = () => {
    var countDownDate = new Date(submission_date).getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
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
        setTimestatus(true);
      }
    }, 1000);

    console.log(submission_date + " " + submission_time);
  };
  const getDocument = () => {
    console.log(document);
    setDocument(document);
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
          style={{ marginLeft: 9 }}
        >
          <Ionicons name="create" size={24} color="black" />
        </TouchableOpacity>
      ),
    }),
    (
      <ScrollView>
        {Title && (
          <View style={styles.container}>
            <Text style={styles.headingText}>View Assignment </Text>

            <Text style={styles.text}>Title</Text>

            {/* <View style={styles.titleinputView}> */}
            <TextInput
              style={styles.titleinputText}
              value={Title}
              editable={false}
              placeholder="Title"
              placeholderTextColor="#003f5c"
              onChangeText={setTitle}
            />
            {/* </View> */}

            <Text style={styles.text}>Detail</Text>

            {/* <View style={styles.detailinputView}> */}
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
            {/* </View> */}

            <Text style={styles.text}>Marks</Text>

            {/* <View style={styles.titleinputView}> */}
            <TextInput
              style={styles.titleinputText}
              value={marks}
              editable={false}
              placeholder="Marks"
              placeholderTextColor="#003f5c"
              onChangeText={setMarks}
            />
            {/* </View> */}

            <Text style={styles.text}>Submit Date & Time</Text>

            {/* <View style={styles.titleinputView}> */}
            <TextInput
              style={styles.titleinputText}
              value={date}
              editable={false}
              placeholder="date"
              placeholderTextColor="#003f5c"
              onChangeText={setDate}
            />
            {/* </View> */}
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
                    uri:
                      "http://d468-2400-adc7-13d-5200-aa5e-5479-6c5f-d4ed.ngrok.io" +
                      documenturi,
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
    justifyContent: "center",
  },
  fileView: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 50,
    width: "32%",
    backgroundColor: "green",
    borderRadius: 15,
  },
  fileDownload: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "32%",
    backgroundColor: "red",
    borderRadius: 15,
  },
  fileButtonsView: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  marksnswitch: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#185079",
    marginTop: 10,
    marginBottom: 40,
  },
  titleinputView: {
    width: "80%",
    backgroundColor: "#edece8",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  titleinputText: {
    fontWeight: "bold",
    height: 50,
    color: "black",
  },
  detailinputView: {
    width: "80%",
    backgroundColor: "#edece8",
    borderRadius: 25,
    height: 80,
    marginBottom: 20,
    //justifyContent: "center",
    padding: 20,
  },
  marksinputView: {
    width: "35%",
    backgroundColor: "#edece8",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  detailinputText: {
    fontWeight: "bold",
    height: 50,
    color: "black",
  },
  button: {
    width: "80%",
    backgroundColor: "#185079",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
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
    marginLeft: "14%",
  },
});

export default StudentViewAssignmentScreen;
