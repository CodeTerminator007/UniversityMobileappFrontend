import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Text,
} from "react-native";
//import { MaterialCommunityIcons } from "@expo/vector-icons";
//import Swipeable from "react-native-gesture-handler/Swipeable";
import React, { useState } from "react";
import { useSelector } from "react-redux";
function TeacherProfile() {
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const profile_image = `https://00c8-2400-adc7-13d-5200-abf-641e-89f1-cfde.ngrok.io${stateData.userReducer.profile_image}`;
  const name = stateData.userReducer.userData.username;

  return (
    <View style={styles.container}>
      <View style={{ flex: 4 }}>
        <Image style={styles.image} source={{ uri: profile_image }} />
        <Text style={styles.text}>
          {stateData.userReducer.userData.first_name}{" "}
          {stateData.userReducer.userData.last_name}
        </Text>
        <Text style={styles.text}>{stateData.userReducer.userData.email}</Text>
        <Text style={styles.text}>
          {stateData.userReducer.userData.last_education_degree}
        </Text>
      </View>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/RipLogo.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //alignItems: "center",
    flexDirection: "row",
    padding: "5%",
    backgroundColor: "white",
    //borderColor: "black",
    //borderWidth: 1,
    borderRadius: 20,
    //height: "10%",
    //shadowColor: "grey",
    //shadowOffset: { width: 10, height: 10},
    //shadowOpacity: 1,
    //shadowRadius: 10,
    //elevation: 15,
    //marginBottom: 30
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 7,
    //backgroundColor: '#7367af',
  },
  text: {
    color: "black",
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default TeacherProfile;
