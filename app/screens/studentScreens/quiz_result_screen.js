import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const QuizResultScreen = ({ navigation, route }) => {
  const { score } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.result}>RESULTS</Text>
      <View style={styles.scoreValueContainer}>
        <Text style={styles.scoreValue}>{score}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.replace("All Quiz")}
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
