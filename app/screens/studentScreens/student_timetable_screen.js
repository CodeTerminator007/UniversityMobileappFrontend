import React, { useState, useEffect } from "react";

import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TimeTable from "@mikezzb/react-native-timetable";
import { useSelector } from "react-redux";
import URI from "../../context/uri";
import axios from "axios";
import { Alert } from "react-native";

function StudentTimetableScreen() {
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const [data, setdata] = useState(null);
  const ID = stateData.userReducer.id;
  const AuthStr = "Bearer ".concat(Token);
  const [isFetching, setIssFethin] = useState(false);

  const deletetimetable= (id) =>{
    console.log(id)
  axios
    .delete(`${URI.uri}/Timetable/${id}/`, {
      headers: { Authorization: AuthStr },
    })
    .then((response) => {
      console.log(response)
    
    })

    .catch((error) => {
      console.log("error " + error);
    }); 
   }
  axios
    .get(`${URI.uri}/Timetable/${ID}`, {
      headers: { Authorization: AuthStr },
    })
    .then((response) => {
      const d = response.data;
      const g = d.map((item) => {
        return {
          id:item.id,
          day: item.day,
          location: `Room: ${item.room.toString()}`,
          endTime: item.subhoursend.toString(),
          startTime: item.subhoursstart.toString(),
          courseId: item.sub,
        };
      });
      console.log(g)
      setdata(g);
    })

    .catch((error) => {
      console.log("error " + error);
    });


    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeAreaContainer}>
          <StatusBar backgroundColor="rgba(21,101,192,1)" />
          {data && (
            <View style={styles.container}>
               <TimeTable events={data}  
                eventOnPress={(event) => Alert.alert(
                  "Delete",
                  "Are you sure you want to Delete the schedule ?",
                  [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    { text: "OK", onPress: () =>deletetimetable(event.id) }
                  ]
                )
              }
               
               />
               
            </View>
          )}
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

export default StudentTimetableScreen;
