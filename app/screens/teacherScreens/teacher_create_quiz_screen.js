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

function TeacherCreateQuizScreen({ navigation, route }) {
  const [title, setTitle] = useState(null);
  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);

  const handleSubmit = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Create Quiz</Text>
      <Text style={styles.text}>Title</Text>
      <View style={styles.titleinputView}>
        <TextInput
          style={styles.titleinputText}
          placeholder="Title"
          placeholderTextColor="#003f5c"
          onChangeText={setTitle}
        />
      </View>

      <Text style={styles.text}>Time (In Seconds)</Text>
      <View style={styles.titleinputView}>
        <TextInput
          style={styles.titleinputText}
          placeholder="Time"
          placeholderTextColor="#003f5c"
          onChangeText={setTime}
        />
      </View>

      <Text style={styles.text}>Date (YY/MM/DD)</Text>
      <View style={styles.titleinputView}>
        <TextInput
          style={styles.titleinputText}
          placeholder="Date"
          placeholderTextColor="#003f5c"
          onChangeText={setDate}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.replace("Add Question");
        }}
      >
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>
    </View>
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
});

export default TeacherCreateQuizScreen;
