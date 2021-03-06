import React, { useState, useEffect } from "react";
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
import FilePicker from "../../components/file_picker";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { Alert } from "react-native";
import axios from "axios";
import { ActivityIndicator } from "react-native-paper";

function StudentUploadAssignmentScreen({ navigation, route }) {
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  console.log(stateData);
  const AuthStr = "Bearer ".concat(Token);
  const [comment, setComment] = useState(null);
  const { assignment_id } = route.params;
  const [marks, setMarks] = useState(0);
  const [name, setName] = useState("Default");
  const [rollno, setRollno] = useState("Default");
  const [isloading, setIsLoading] = useState(false);

  const [isEnabled, setIsEnabled] = useState(false);
  const [file, setFile] = useState(null);

  const handleSubmit = () => {
    setIsLoading(true);
    const option = {
      headers: {
        Authorization: AuthStr,
        "Content-Type": "multipart/form-data",
      },
    };
    let formdata = new FormData();
    formdata.append("student", stateData.userReducer.id);
    formdata.append("assignment", assignment_id);
    formdata.append("document", {
      uri: file.uri,
      type: "application/pdf",
      name: `${stateData.userReducer.id}document.${file.uri.split(".").pop()}`,
    });
    formdata.append("comment", comment);
    formdata.append("marks ", marks);

    axios
      .post(`${URI.uri}/AssignmentSubmissionViewSet/`, formdata, option)
      .then((res) => {
        if (res.status == 201) {
          Alert.alert("User", "The Assignment was Submitted.");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        if ((err = 400)) {
          Alert.alert("Error", "Empty Fields fill all the fields");
        }
        console.log("error", err);
      });
  };

  return (
    <>
      {isloading ? (
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <ActivityIndicator animating={true} size={40} />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.headingText}>Upload Assignment </Text>

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
            <Text style={styles.buttonText}>Upload</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    //justifyContent: "center",
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
    height: 60,
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
