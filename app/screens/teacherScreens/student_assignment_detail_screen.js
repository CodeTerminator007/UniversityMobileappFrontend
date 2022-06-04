import React, { useContext, useState, useEffect } from "react";
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
import FileReader from "../../components/file_reader";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

function StudentAssignmentDetailScreen({ navigation, route }) {
  const { student_id } = route.params;
  const { assignemt } = route.params;
  const [data, setdata] = useState(null);
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const AuthStr = "Bearer ".concat(Token);
  const [name, setName] = useState("Default");
  const [rollno, setRollno] = useState();
  const [marks, setMarks] = useState("0");
  const [comment, setComment] = useState("Default");
  const [date, setDate] = useState("12");
  const [isFetching, setIssFethin] = useState(false);
  const [document, setDocument] = useState("Default");

  const getassignmentdetail = () => {
    axios
      .get(
        `http://d468-2400-adc7-13d-5200-aa5e-5479-6c5f-d4ed.ngrok.io/AssignmentSubmissionViewSet/?student_id=${student_id}&assignment=${assignemt}`,
        {
          headers: { Authorization: AuthStr },
        }
      )
      .then((response) => {
        const d = response.data;
        setdata(d);
        setIssFethin(true);
      })

      .catch((error) => {
        console.log("error " + error);
      });
  };

  useEffect(() => {
    if (!isFetching) {
      getassignmentdetail();
    }
  }, [isFetching]);
  if (data != null) {
    if (data.length != 0) {
      setComment(data[0].comment);
      const d = data[0].submission_datetime;
      const z = d.toString().replace("T", "  ");
      const g = z.replace("Z", " ").toString();
      setDate(g);
      setDocument(data[0].document);
      setMarks(data[0].marks.toString());
      setName(`${data[0].first_name} ${data[0].last_name}`);
      setRollno(data[0].roll_no.toString());

      setdata(null);
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headingText}>Student Assignment Details</Text>
        <Text style={styles.text}>Name</Text>
        <View style={styles.textinputView}>
          <TextInput
            style={styles.inputText}
            value={name}
            editable={false}
            placeholder="Name"
            placeholderTextColor="#003f5c"
            onChangeText={setName}
          />
        </View>
        <Text style={styles.text}>Roll No</Text>
        <View style={styles.textinputView}>
          <TextInput
            style={styles.inputText}
            value={rollno}
            editable={false}
            placeholder="Roll No"
            placeholderTextColor="#003f5c"
            onChange={setRollno}
          />
        </View>
        <Text style={styles.text}>Comment</Text>
        <View style={styles.commentinputView}>
          <TextInput
            style={styles.commentinputText}
            value={comment}
            editable={false}
            placeholder="Comment"
            placeholderTextColor="#003f5c"
            multiline={true}
            textAlignVertical="top"
            onChangeText={setComment}
          />
        </View>
        <Text style={styles.text}>Marks</Text>
        <View style={styles.textinputView}>
          <TextInput
            style={styles.inputText}
            value={marks}
            placeholder="Marks"
            placeholderTextColor="#003f5c"
            onChangeText={setMarks}
          />
        </View>

        <Text style={styles.text}>Submit Date & Time</Text>
        {/* <View style={styles.textinputView}> */}
        <TextInput
          style={styles.inputText}
          value={date}
          editable={false}
          placeholder="Date & Time"
          placeholderTextColor="#003f5c"
          onChangeText={setDate}
        />
        {/* </View> */}

        <Text style={styles.text}>Assignment File</Text>

        <View style={styles.fileButtonsView}>
          <TouchableOpacity
            style={styles.fileView}
            onPress={() =>
              navigation.navigate("File Reader", {
                uri: document,
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
    </ScrollView>
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

  headingText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#185079",
    marginTop: 10,
    marginBottom: 40,
  },
  textinputView: {
    width: "80%",
    backgroundColor: "#edece8",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  commentinputView: {
    width: "80%",
    backgroundColor: "#edece8",
    borderRadius: 25,
    height: 90,
    marginBottom: 20,
    //justifyContent: "center",
    padding: 20,
  },
  commentinputText: {
    height: 90,
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

export default StudentAssignmentDetailScreen;
