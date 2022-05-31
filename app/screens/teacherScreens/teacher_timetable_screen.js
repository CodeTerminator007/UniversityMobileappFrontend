import React, {  useState } from "react";
import {  StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TimeTable from "@mikezzb/react-native-timetable";
import { useSelector } from "react-redux";
import axios from "axios";


function TeacherTimetableScreen() {
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const [data, setdata] = useState(null);
  const ID = stateData.userReducer.id;

  const AuthStr = "Bearer ".concat(Token);
  axios
    .get(`http://d468-2400-adc7-13d-5200-aa5e-5479-6c5f-d4ed.ngrok.io/Timetable/${ID}`, {
      headers: { Authorization: AuthStr },
    })
    .then((response) => {
      // If request is good...
      const d = response.data;
      // // console.log("this is data")
      const g = d.map((item)=>{
        return ({
          day:item.day,
          location:`Room: ${item.room.toString()}`,
          endTime: item.subhoursend.toString(),
          startTime: item.subhoursstart.toString(),
          // section: item.id.toString(),
          courseId:item.sub

          })
      })
      setdata(g)
    })
  
    .catch((error) => {
      console.log("error " + error);
    });
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaContainer}>
        <StatusBar backgroundColor="rgba(21,101,192,1)" />
          {data && 
        <View style={styles.container}>
          <TimeTable events={data}/>
        </View>
          }
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
