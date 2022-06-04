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
import FilePicker from "../../components/file_picker";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

function StudentUploadAssignmentScreen({ route }) {
  // const { student_id } = route.params;
  // const { assignemt } = route.params;
  // const [data, setdata] = useState(null);
  // const state = useSelector((state) => state);
  // const stateData = { ...state };
  // const Token = stateData.userReducer.token;
  // const AuthStr = "Bearer ".concat(Token);
  const [name, setName] = useState(null);
  const [rollno, setRollno] = useState(null);
  const [comment, setComment] = useState(null);
  const [date, setDate] = useState("12.1.22");
  const [file, setFile] = useState(null);

  const handleSubmit = () => {};

  // const [isFetching, setIssFethin] = useState(false);

  // const getassignmentdetail = () => {
  //   axios
  //     .get(
  //       `http://d468-2400-adc7-13d-5200-aa5e-5479-6c5f-d4ed.ngrok.io/AssignmentSubmissionViewSet/?student_id=${student_id}&assignment=${assignemt}`,
  //       {
  //         headers: { Authorization: AuthStr },
  //       }
  //     )
  //     .then((response) => {
  //       const d = response.data;
  //       setdata(d);
  //       console.log(data);
  //       setIssFethin(true);
  //     })

  //     .catch((error) => {
  //       console.log("error " + error);
  //     });
  // };

  // useEffect(() => {
  //   if (!isFetching) {
  //     getassignmentdetail();
  //   }
  // }, [isFetching]);
  // if (data != null) {
  //   console.log(data);
  //   setComment(data[0].comment);
  //   setDate(data[0].submission_datetime);
  //   setdata(null);
  // }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headingText}>Upload Assignment </Text>
        <Text style={styles.text}>Name</Text>
        <View style={styles.textinputView}>
          <TextInput
            style={styles.inputText}
            value={name}
            editable={true}
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
            editable={true}
            placeholder="Roll No"
            placeholderTextColor="#003f5c"
            onChangeText={setRollno}
          />
        </View>
        <Text style={styles.text}>Comment</Text>
        <View style={styles.commentinputView}>
          <TextInput
            style={styles.commentinputText}
            value={comment}
            editable={true}
            placeholder="Comment"
            placeholderTextColor="#003f5c"
            multiline={true}
            textAlignVertical="top"
            onChangeText={setComment}
          />
        </View>

        <Text style={styles.text}>Assignment File</Text>
        <FilePicker file={file} setFile={setFile} />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
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
  file: {
    alignItems: "center",
    backgroundColor: "#edece8",
    borderRadius: 15,
    borderColor: "grey",
    borderWidth: 5,
    height: 70,
    justifyContent: "center",
    marginVertical: 10,
    marginBottom: 10,
    overflow: "hidden",
    width: 70,
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
  },
  text: {
    color: "#003f5c",
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: "14%",
  },
});

export default StudentUploadAssignmentScreen;
