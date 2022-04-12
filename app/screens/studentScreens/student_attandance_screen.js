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
  FlatList,
} from "react-native";
import ViewAttandanceListItem from "../../components/view_attandance_list_item";
import { DrawerItemList } from "@react-navigation/drawer";
import Header from "../../components/header";
const Headerdata = [
  {
    CourseName: "CourseName",
    TeacherName: "TeacherName",
    CrHrs: "CrHrs",
    Lectures: "Lectures",
    Present: "Present",
    Absents: "Absents",
    Percent: "Percent",
  },
];
const data = [
  {
    CourseName: "Englsihkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
    TeacherName: "Ali",
    CrHrs: 4,
    Lectures: 5,
    Present: 4,
    Absents: 1,
    Percent: 23,
  },
  {
    CourseName: "Urde",
    TeacherName: "Ahmed",
    CrHrs: 3,
    Lectures: 25,
    Present: 45,
    Absents: 13,
    Percent: 223,
  },
  {
    CourseName: "Englsih3",
    TeacherName: "Ali",
    CrHrs: 4,
    Lectures: 5,
    Present: 4,
    Absents: 1,
    Percent: 23,
  },
  {
    CourseName: "Urde3",
    TeacherName: "Ahmed",
    CrHrs: 3,
    Lectures: 25,
    Present: 45,
    Absents: 13,
    Percent: 223,
  },
  {
    CourseName: "Englsih2",
    TeacherName: "Ali",
    CrHrs: 4,
    Lectures: 5,
    Present: 4,
    Absents: 1,
    Percent: 23,
  },
  {
    CourseName: "Urde2",
    TeacherName: "Ahmed",
    CrHrs: 3,
    Lectures: 25,
    Present: 45,
    Absents: 13,
    Percent: 223,
  },
  {
    CourseName: "Englsih1",
    TeacherName: "Ali",
    CrHrs: 4,
    Lectures: 5,
    Present: 4,
    Absents: 1,
    Percent: 23,
  },
  {
    CourseName: "Urde1",
    TeacherName: "Ahmed",
    CrHrs: 3,
    Lectures: 25,
    Present: 45,
    Absents: 13,
    Percent: 223,
  },
  {
    CourseName: "Englsih4",
    TeacherName: "Ali",
    CrHrs: 4,
    Lectures: 5,
    Present: 4,
    Absents: 1,
    Percent: 23,
  },
  {
    CourseName: "Urde4",
    TeacherName: "Ahmed",
    CrHrs: 3,
    Lectures: 25,
    Present: 45,
    Absents: 13,
    Percent: 223,
  },
  {
    CourseName: "Englsih5",
    TeacherName: "Ali",
    CrHrs: 4,
    Lectures: 5,
    Present: 4,
    Absents: 1,
    Percent: 23,
  },
  {
    CourseName: "Urde5",
    TeacherName: "Ahmed",
    CrHrs: 3,
    Lectures: 25,
    Present: 45,
    Absents: 13,
    Percent: 223,
  },
];

function StudentAttandanceScreen() {
  return (
    <ScrollView horizontal={true} style={styles.container}>
      <View>
        <FlatList
          data={Headerdata}
          keyExtractor={(data) => data.CourseName.toString()}
          renderItem={({ item }) => (
            <Header
              CourseName={item.CourseName}
              TeacherName={item.TeacherName}
              CrHrs={item.CrHrs}
              Lectures={item.Lectures}
              Present={item.Present}
              Absents={item.Absents}
              Percent={item.Percent}
            />
          )}
        />
        <FlatList
          data={data}
          keyExtractor={(data) => data.CourseName.toString()}
          renderItem={({ item }) => (
            <ViewAttandanceListItem
              CourseName={item.CourseName}
              TeacherName={item.TeacherName}
              CrHrs={item.CrHrs}
              Lectures={item.Lectures}
              Present={item.Present}
              Absents={item.Absents}
              Percent={item.Percent}
            />
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 70,
    padding: 5,
    //alignItems: "center",
    //justifyContent: "center",
  },
});

export default StudentAttandanceScreen;
