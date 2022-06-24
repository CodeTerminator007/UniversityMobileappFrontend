import React, { useState, useEffect } from "react";
import { StatusBar, StyleSheet, View, Alert } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import URI from "../../context/uri";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TimeTable from "@mikezzb/react-native-timetable";
import { useSelector } from "react-redux";
import axios from "axios";

function TeacherTimetableScreen() {
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const [data, setdata] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const ID = stateData.userReducer.id;

  const getTimetable = async () => {
    const AuthStr = "Bearer ".concat(Token);
    setIsLoading(true);
    axios
      .get(`${URI.uri}/Timetable/${ID}`, {
        headers: { Authorization: AuthStr },
      })
      .then((response) => {
        // If request is good...
        const d = response.data;
        // // console.log("this is data")
        const g = d.map((item) => {
          return {
            day: item.day,
            location: `Room: ${item.room.toString()}`,
            endTime: item.subhoursend.toString(),
            startTime: item.subhoursstart.toString(),
            // section: item.id.toString(),
            courseId: item.sub,
          };
        });
        setdata(g);
        setIsLoading(false);
      })

      .catch((error) => {
        setIsLoading(false);
        Alert.alert("Error", "Network Error");
        console.log("error " + error);
      });
  };

  useEffect(() => {
    getTimetable();
  }, []);

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
          <ActivityIndicator animating={true} size={40} />
        </View>
      ) : (
        <SafeAreaProvider>
          <SafeAreaView style={styles.safeAreaContainer}>
            <StatusBar backgroundColor="rgba(21,101,192,1)" />
            {data && (
              <View style={styles.container}>
                <TimeTable events={data} />
              </View>
            )}
          </SafeAreaView>
        </SafeAreaProvider>
      )}
    </>
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
