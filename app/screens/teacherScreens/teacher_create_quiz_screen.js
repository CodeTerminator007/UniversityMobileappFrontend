import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Alert } from "react-native";
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
import URI from "../../context/uri";
import DatePickerr from "../../components/date_picker";

function TeacherCreateQuizScreen({ navigation, route }) {
  const [title, setTitle] = useState(null);
  const [time, setTime] = useState(null);
  const d = new Date();
  const [date, setDate] = useState(d);
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
        `${URI.uri}/Quiz/`,
        {
          title: title,
          subject: id,
          time: time,
          quizDate: date,
        },
        option
      )
      .then((res) => {
        setIsLoading(false);
        if (res.status == 201) {
          Alert.alert("Quiz ", "The Quiz has been created.");
          navigation.replace("Add Question", { id: res.data.id });
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
          <ActivityIndicator />
        </View>
      ) : (
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

          <Text style={styles.text}>Date (YY-MM-DD)</Text>
          <DatePickerr date={date} setDate={setDate} />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
// navigation.replace("Add Question");

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
