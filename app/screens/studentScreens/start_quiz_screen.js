import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const StartQuizScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>QUIZ</Text>
      <View style={styles.bannerContainer}></View>
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
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
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
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
});
export default StartQuizScreen;
