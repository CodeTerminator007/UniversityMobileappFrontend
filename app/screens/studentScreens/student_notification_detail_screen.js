import React, { Component } from "react";
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
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

function StudentNotificationDetailScreen({ navigation, route }) {
  const listings = route.params;  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image}>{listings.image}</View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{listings.title}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{listings.created_at}</Text>
        </View>
        <Text style={styles.detailText}>
          {listings.detail}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    //paddingTop: Constants.statusBarHeight,
    //padding: 8,
  },
  textContainer: {
    padding: 10,
  },
  dateContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#185079",
    height: 25,
    width: 75,
    borderRadius: 20,
    marginBottom: 10,
  },
  image: {
    height: 150,
    width: "100%",
    backgroundColor: "black",
    marginBottom: 10,
    //padding: 20,
  },
  detailText: {
    //color: "white",
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    //color: "white",
  },
  date: {
    //marginBottom: 10,
  },
});
export default StudentNotificationDetailScreen;
