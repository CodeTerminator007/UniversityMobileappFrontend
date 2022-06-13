import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Alert } from "react-native";
import URI from "../../context/uri";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

function AddOptions({ navigation, route }) {
  const [options, setOption] = useState(null);
  const { question_id } = route.params;
  const { quiz_id } = route.params;

  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;

  const AuthStr = "Bearer ".concat(Token);

  const handleSubmit = async(event) => {
    event.preventDefault();
    const option = {
      headers: { Authorization: AuthStr },
    };
    console.log("question_id "+question_id)
    axios
      .post(
        `${URI.uri}/Incorrect_answers/`,
        {
          content: options,
          Question: question_id,
        },
        option
      )
      .then((res) => {
        if (res.status == 201) {
          Alert.alert("Option ", "The Option has been created.");
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
    <View style={styles.container}>
      <Text style={styles.headingText}>Add Options</Text>

      <Text style={styles.text}>Option</Text>
      <View style={styles.titleinputView}>
        <TextInput
          style={styles.titleinputText}
          placeholder="Add Option"
          placeholderTextColor="#003f5c"
          onChangeText={setOption}
        />
      </View>

      <View style={styles.fileButtonsView}>
        <TouchableOpacity
          style={styles.fileView}
          onPress={() => {
            navigation.replace("Add Question",{id:quiz_id});
          }}
        >
          <Text style={styles.buttonText}>Add Question</Text>
        </TouchableOpacity>
        {/* {question_id:res.data.id,quiz_id:id} */}
        <TouchableOpacity style={styles.fileDownload}
        onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Add Option</Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add Options</Text>
      </TouchableOpacity> */}
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
    backgroundColor: "#185079",
    borderRadius: 15,
  },
  fileDownload: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "32%",
    backgroundColor: "#185079",
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

export default AddOptions;
