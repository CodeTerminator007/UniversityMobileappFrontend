import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useSelector } from "react-redux";
import { Alert } from "react-native";
import URI from "../../context/uri";

function AddQuestion({ navigation, route }) {
  const [ques, setQues] = useState(null);
  const [ans, setAns] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const { id } = route.params;
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;

  const AuthStr = "Bearer ".concat(Token);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const option = {
      headers: { Authorization: AuthStr },
    };
    setIsLoading(true);
    axios
      .post(
        `${URI.uri}/Question/`,
        {
          question: ques,
          quiz: id,
          correct_answer: ans,
        },
        option
      )
      .then((res) => {
        setIsLoading(false);
        if (res.status == 201) {
          Alert.alert("Question ", "The Question has been created.");
          navigation.replace("Add Option", {
            question_id: res.data.id,
            quiz_id: id,
          });
        }
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
          <Text style={styles.headingText}>Add Question</Text>

          <Text style={styles.text}>Question</Text>
          <View style={styles.titleinputView}>
            <TextInput
              style={styles.titleinputText}
              placeholder="Add Question"
              placeholderTextColor="#003f5c"
              onChangeText={setQues}
            />
          </View>

          <Text style={styles.text}>Answer</Text>
          <View style={styles.titleinputView}>
            <TextInput
              style={styles.titleinputText}
              placeholder="Answer"
              placeholderTextColor="#003f5c"
              onChangeText={setAns}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Add Options</Text>
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
    justifyContent: "center",
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
    height: 50,
    color: "black",
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#185079",
    marginTop: 10,
    marginBottom: 40,
  },
  text: {
    color: "#003f5c",
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: "14%",
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
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "64%",
    backgroundColor: "#185079",
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default AddQuestion;
