import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
import { useSelector } from "react-redux";
import { Alert } from "react-native";
import URI from "../../context/uri";

const QuizResultScreen = ({ navigation, route }) => {
  const { score } = route.params;
  const { quiz_id } = route.params;
  const { quizDate } = route.params;
  const { time } = route.params;
  const { title } = route.params;
  const { subject } = route.params;
  const { current_date } = route.params;
  const state = useSelector((state) => state);

  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const ID = stateData.userReducer.id;


  // const option = {
  //   headers: { Authorization: AuthStr },
  // };
  // axios
  //   .post(
  //     `${URI.uri}/Question/`,
  //     {
  //       question: ques,
  //       quiz: id,
  //       correct_answer: ans,
  //     },
  //     option
  //   )
  //   .then((res) => {
  //     if (res.status == 201) {
  //       Alert.alert("Question ", "The Question has been created.");
  //       navigation.replace("Add Option" ,{question_id:res.data.id,quiz_id:id});
  //     }
  //   })
  //   .catch((err) => {
  //     if ((err = 400)) {
  //       Alert.alert("Error", "Empty Fields fill all the fields");
  //     }
  //     console.log("error", err);
  //   });

  return (
    <View style={styles.container}>
      <Text style={styles.result}>RESULTS</Text>
      <Text style={styles.text}>Title:</Text>
      <Text style={styles.detail}>{title}</Text>

      <Text style={styles.text}>Date:</Text>
      <Text style={styles.detail}>{quizDate}</Text>

      <Text style={styles.text}>Time:</Text>
      <Text style={styles.detail}>{time}</Text>

      <Text style={styles.text}>Score:</Text>
      <Text style={styles.detail}>{score}</Text>

      <TouchableOpacity
        onPress={() => navigation.replace("Student")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>GO Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizResultScreen;

const styles = StyleSheet.create({
  result: {
    fontSize: 30,
  },
  detail: {
    //height: 50,
    padding: 20,
    fontSize: 18,
    color: "black",
    //backgroundColor: "red",
    alignSelf: "center",
  },
  text: {
    color: "#003f5c",
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "flex-start",
    marginLeft: "10%",
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
    justifyContent: "space-between",
  },
  button: {
    width: "100%",
    backgroundColor: "#1A759F",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  scoreValue: {
    fontSize: 26,
    fontWeight: "bold",
    alignSelf: "center",
    color: "white",
  },
  scoreValueContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "green",
    width: 140,
    height: 140,
    borderRadius: 70,
  },
});
