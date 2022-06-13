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

function AddQuestion({ navigation, route }) {
  const [ques, setQues] = useState(null);
  const [ans, setAns] = useState(null);

  return (
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

      {/* <View style={styles.fileButtonsView}>
        <TouchableOpacity style={styles.fileView}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.fileDownload}>
          <Text style={styles.buttonText}>Download</Text>
        </TouchableOpacity>
      </View> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.replace("Add Option");
        }}
      >
        <Text style={styles.buttonText}>Add Options</Text>
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
