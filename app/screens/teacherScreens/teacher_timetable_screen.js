import React, { Component, useState } from "react";

import { Alert, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TimeTable from "@mikezzb/react-native-timetable";

import { useSelector } from "react-redux";
import axios from "axios";

const events = [
  {
    courseId: "",
    title: "Intro to Computer Systems",
    section: "- - LEC",
    day: 2,
    startTime: "11:30",
    endTime: "12:15",
    location: "Online Teaching",
    color: "rgba(253,149,141,1)",
  },
];
function TeacherTimetableScreen() {
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const ID = stateData.userReducer.id;
  const [data, setdata] = useState();

  // const USER_TOKEN =
  //   const AuthStr = "Bearer " + token;

  const AuthStr = "Bearer ".concat(Token);
  axios
    .get(`https://c673-121-52-152-106.ngrok.io/Timetable/${ID}`, {
      headers: { Authorization: AuthStr },
    })
    .then((response) => {
      // If request is good...
      setdata(response.data);
    })
    .catch((error) => {
      console.log("error " + error);
    });
  console.log(data);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaContainer}>
        <StatusBar backgroundColor="rgba(21,101,192,1)" />
        <View style={styles.container}>
          <TimeTable
            events={events}
            // eventOnPress={(event) => Alert.alert(`${JSON.stringify(event)}`)}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default TeacherTimetableScreen;
