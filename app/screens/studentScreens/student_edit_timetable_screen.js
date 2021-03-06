import React, { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import URI from "../../context/uri";
import { ActivityIndicator } from "react-native-paper";

// import { useSelector, useDispatch } from "react-redux";
// import { setToken, setName, setUserData } from "../redux/actions";
// import { useNavigation } from "@react-navigation/native";

function StudentEditTimetableScreen() {
  const state = useSelector((state) => state);
  const [subject, setSubject] = useState(null);
  const [subjectHourStart, setSubjectHourStart] = useState(null);
  const [subjectHourEnd, setSubjectHourEnd] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const [day, setDay] = useState(null);
  const [room, setRoom] = useState(null);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const ID = stateData.userReducer.id;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const AuthStr = "Bearer ".concat(Token);
    const option = {
      headers: { Authorization: AuthStr },
    };
    setIsLoading(true);
    axios
      .post(
        `${URI.uri}/Timetable/`,
        {
          sub: subject,
          subhoursstart: subjectHourStart,
          subhoursend: subjectHourEnd,
          day: day,
          room: room,
          person: ID,
        },
        option
      )
      .then((res) => {
        setIsLoading(false);

        if (res.status == 201) {
          Alert.alert(
            "Timetable",
            "New Schedual Has been added in your Timetable."
          );
        }
      })
      .catch((err) => {
        setIsLoading(false);

        if ((err = 400)) {
          Alert.alert("Error", "Empty Fields fill all the fields");
        }
        console.log("error", err);
      });
  };
  return (
    <View style={{ flex: 1 }}>
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
          <Text style={styles.logoText}>Add/Edit Timetable</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Subject"
              placeholderTextColor="#003f5c"
              onChangeText={setSubject}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Starting Time Format 12:00:00"
              placeholderTextColor="#003f5c"
              onChangeText={setSubjectHourStart}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Ending Time Time Format 12:00:00"
              placeholderTextColor="#003f5c"
              onChangeText={setSubjectHourEnd}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Day"
              placeholderTextColor="#003f5c"
              onChangeText={setDay}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Room No"
              placeholderTextColor="#003f5c"
              onChangeText={setRoom}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.loginText}>Add</Text>
          </TouchableOpacity>
        </View>
      )}
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
  logoText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#185079",
    marginTop: 10,
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#edece8",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  forgot: {
    color: "black",
    fontSize: 11,
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
  loginText: {
    color: "white",
  },
});

export default StudentEditTimetableScreen;
