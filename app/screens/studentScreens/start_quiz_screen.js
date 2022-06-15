import {
  View,
  Image,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import URI from "../../context/uri";
import { useSelector } from "react-redux";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { set } from "react-native-reanimated";
import { ActivityIndicator } from "react-native-paper";

const StartQuizScreen = ({ navigation, route }) => {
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const { id } = route.params;
  const { quizDate } = route.params;
  const { time } = route.params;
  const { title } = route.params;
  const { subject } = route.params;
  const ID = stateData.userReducer.id;
  const { current_date } = route.params;
  const AuthStr = "Bearer ".concat(Token);
  const [exisit, setExsist] = useState(false);
  const [data, setdata] = useState(null);
  const [showBackButton, setShowBackButton] = useState(false);
  const [showStartButton, setShowStartButton] = useState(true);
  const [isloading, setIsLoading] = useState(false);
  const getData = () => {
    setIsLoading(true);
    axios
      .get(`${URI.uri}/quizresult/${id}/?student_id=${ID}`, {
        headers: { Authorization: AuthStr },
      })
      .then((response) => {
        const s = response.data;
        setdata(s);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error " + error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const isButoon = () => {
    if (data) {
      if (quizDate === current_date && data.length === 0) {
        return true;
      }

      if (quizDate !== current_date && data.length !== 0) {
        return false;
      }
    }
  };
  const BUTTON = isButoon();

  return (
    <View style={styles.container}>
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
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.text}>Title:</Text>
            <Text style={styles.detail}>{title}</Text>

            <Text style={styles.text}>Date:</Text>
            <Text style={styles.detail}>{quizDate}</Text>

            <Text style={styles.text}>Time:</Text>
            <Text style={styles.detail}>{time}</Text>
          </View>

          <View style={styles.bannerContainer}></View>
          {BUTTON && (
            <TouchableOpacity
              onPress={() =>
                navigation.replace("Quiz", {
                  quiz_id: id,
                  quizDate: quizDate,
                  time: time,
                  title: title,
                  subject: subject,
                  current_date: current_date,
                })
              }
              style={styles.button}
            >
              <Text style={styles.buttonText}>Start Quiz</Text>
            </TouchableOpacity>
          )}

          {!BUTTON && (
            <TouchableOpacity
              onPress={() => navigation.replace("Student")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
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
