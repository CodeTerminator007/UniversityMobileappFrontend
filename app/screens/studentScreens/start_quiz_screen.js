import React from "react";
import {
  Image,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const StartQuizScreen = ({ navigation, route }) => {
  const { id } = route.params;
  const { quizDate } = route.params;
  const { time } = route.params;
  const { title } = route.params;
  const { subject } = route.params;

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>Title:</Text>
        <Text style={styles.detail}>{title}</Text>

        <Text style={styles.text}>Date:</Text>
        <Text style={styles.detail}>{quizDate}</Text>

        <Text style={styles.text}>Time:</Text>
        <Text style={styles.detail}>{time}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.replace("Quiz")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  button: {
    width: "100%",
    backgroundColor: "#1A759F",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
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
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
});
export default StartQuizScreen;
