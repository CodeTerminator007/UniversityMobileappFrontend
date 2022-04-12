import React, { useContext, useState, useEffect } from "react";
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

function ViewAttandanceListItem({
  CourseName,
  TeacherName,
  CrHrs,
  Lectures,
  Present,
  Absents,
  Percent,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.courseName}>
        <Text style={styles.text}>{CourseName}</Text>
      </View>
      <View style={styles.teacherName}>
        <Text style={styles.text}>{TeacherName}</Text>
      </View>
      <View style={styles.crHrs}>
        <Text style={styles.text}>{CrHrs}</Text>
      </View>
      <View style={styles.lectures}>
        <Text style={styles.text}>{Lectures}</Text>
      </View>
      <View style={styles.present}>
        <Text style={styles.text}>{Present}</Text>
      </View>
      <View style={styles.absents}>
        <Text style={styles.text}>{Absents}</Text>
      </View>
      <View style={styles.percent}>
        <Text style={styles.text}>{Percent}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    //alignItems: "center",
    //justifyContent: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
    //fontWeight: "bold",
  },
  courseName: {
    width: 300,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 5,
    marginRight: 5,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
  },
  teacherName: {
    width: 300,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 5,
    marginRight: 5,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
  },
  crHrs: {
    width: 100,
    paddingVertical: 10,
    marginBottom: 5,
    marginRight: 5,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  lectures: {
    width: 100,
    paddingVertical: 10,
    marginBottom: 5,
    marginRight: 5,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  present: {
    width: 100,
    paddingVertical: 10,
    marginBottom: 5,
    marginRight: 5,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  absents: {
    width: 100,
    paddingVertical: 10,
    marginBottom: 5,
    marginRight: 5,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  percent: {
    width: 100,
    paddingVertical: 10,
    marginBottom: 5,
    marginRight: 5,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ViewAttandanceListItem;
