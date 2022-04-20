import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import ListItem from "../../components/ListItem";
import { useSelector } from "react-redux";
import axios from "axios";

function TeacherNotificationScreen({ navigation }) {
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const [data, setdata] = useState();

  const AuthStr = "Bearer ".concat(Token);
  axios
    .get(
      `https://00c8-2400-adc7-13d-5200-abf-641e-89f1-cfde.ngrok.io/announcement/`,
      {
        headers: { Authorization: AuthStr },
      }
    )
    .then((response) => {
      // If request is good...
      setdata(response.data);
    })
    .catch((error) => {
      console.log("error " + error);
    });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.detail}
            url={item.image}
            onPress={() =>
              navigation.navigate("Student Notifications Detail", {
                ...item,
              })
            }
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    //paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
});
export default TeacherNotificationScreen;