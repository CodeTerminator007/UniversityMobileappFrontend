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
import ListItem from "../components/ListItem";
import { useSelector } from "react-redux";
import axios from "axios";

const notifications = [
  {
    id: 1,
    title: "T1",
    detail: "D1",
    image: "https://bootdey.com/img/Content/avatar/avatar6.png",
  },
  {
    id: 2,
    title: "T2",
    detail: "D2",
    image: "https://bootdey.com/img/Content/avatar/avatar1.png",
  },
  {
    id: 3,
    title: "T3",
    detail: "D3",
    image: "https://bootdey.com/img/Content/avatar/avatar7.png",
  },
];

function NotificationScreen() {
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const [data, setdata] = useState();

  // const USER_TOKEN =
  //   const AuthStr = "Bearer " + token;
  console.log("stateData", Token);

  const AuthStr = "Bearer ".concat(Token);
  axios
    .get(
      "https://2e90-2400-adc7-13d-5200-3183-2225-af23-d71d.ngrok.io/announcement",
      { headers: { Authorization: AuthStr } }
    )
    .then((response) => {
      // If request is good...
      console.log(response.data);
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
export default NotificationScreen;
