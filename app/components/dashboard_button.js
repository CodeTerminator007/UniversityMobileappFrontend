import React, { useContext, useState, useEffect, Children } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

function DashboardButton({ buttonName, onPress, icon }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.box}>
        {icon}
        <Text style={styles.text}>{buttonName}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 10,
    height: 100,
    width: 100,
    backgroundColor: "#4981AA",
    borderRadius: 20,
    marginBottom: 10,
  },
  text: {
    color: "white",
    //fontSize: 17,
    fontWeight: "bold",
  },
});

export default DashboardButton;
