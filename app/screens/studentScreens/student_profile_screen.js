import React, { Component } from "react";
import { useSelector } from "react-redux";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import Constants from "expo-constants";
//import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Separator from "../../components/separator";

function StudentProfileScreen() {

  const state = useSelector((state) => state);
  const stateData = { ...state };
  const profile_image = `http://127.0.0.1:8000${stateData.userReducer.profile_image}`;
  const name = stateData.userReducer.userData.username;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileStyle}>
        <Image
          style={styles.image}
          source={{ uri: "https://bootdey.com/img/Content/avatar/avatar7.png" }}
        ></Image>
        <Text style={styles.namestyle}>{stateData.userReducer.userData.first_name} {stateData.userReducer.userData.last_name}</Text>
      </View>

      <Separator />
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>DETAILS</Text>
      </View>
      <Separator />
      <View style={styles.LocationEmailContainer}>
        <View style={styles.icon}>
          <Ionicons name="location-outline" size={24} color="grey" />
        </View>
        <View style={styles.LocationEmailTextContainer}>
          <Text style={styles.LocationEmailHeading}>CNIC:</Text>
          <Text style={styles.detailText}>{stateData.userReducer.userData.cnic}</Text>
        </View>
      </View>
      <Separator />
      <View style={styles.LocationEmailContainer}>
        <View style={styles.icon}>
          <Fontisto name="email" size={24} color="grey" />
        </View>
        <View style={styles.LocationEmailTextContainer}>
          <Text style={styles.LocationEmailHeading}>Email</Text>
          <Text style={styles.detailText}>{stateData.userReducer.userData.email}</Text>
        </View>
      </View>
      <Separator />
      <View style={styles.LocationEmailContainer}>
        <View style={styles.icon}>
          <Fontisto name="email" size={24} color="grey" />
        </View>
        <View style={styles.LocationEmailTextContainer}>
          <Text style={styles.LocationEmailHeading}>Gender</Text>
          <Text style={styles.detailText}>{stateData.userReducer.userData.gender}</Text>
        </View>
      </View>
      <Separator />
      <View style={styles.LocationEmailContainer}>
        <View style={styles.icon}>
          <Fontisto name="email" size={24} color="grey" />
        </View>
        <View style={styles.LocationEmailTextContainer}>
          <Text style={styles.LocationEmailHeading}>Username</Text>
          <Text style={styles.detailText}>{stateData.userReducer.userData.username}</Text>
        </View>
      </View>
      <Separator />     
      <View style={styles.LocationEmailContainer}>
        <View style={styles.icon}>
          <Fontisto name="email" size={24} color="grey" />
        </View>
        <View style={styles.LocationEmailTextContainer}>
          <Text style={styles.LocationEmailHeading}>Contact Number</Text>
          <Text style={styles.detailText}>{stateData.userReducer.userData.phone_number1}</Text>
        </View>
      </View>
      <Separator /> 
      <View style={styles.LocationEmailContainer}>
        <View style={styles.icon}>
          <Fontisto name="email" size={24} color="grey" />
        </View>
        <View style={styles.LocationEmailTextContainer}>
          <Text style={styles.LocationEmailHeading}>Date of Birth</Text>
          <Text style={styles.detailText}>{stateData.userReducer.userData.Dob}</Text>
        </View>
      </View>
      <Separator />      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight,
  },
  profileStyle: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 40,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: "#ffffff",
    borderWidth: 1,
    marginTop: 25,
  },
  namestyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 15,
  },
  headingContainer: {
    //height: 70,
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  detailText: {
    color: "grey",
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
  },
  LocationEmailContainer: {
    //height: 70,
    width: "100%",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  LocationEmailHeading: {
    fontSize: 16,
    fontWeight: "bold",
  },
  LocationEmailTextContainer: {
    marginLeft: 10,
  },
});
export default StudentProfileScreen;
