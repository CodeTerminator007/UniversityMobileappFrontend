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
import { DataTable } from "react-native-paper";
import { DrawerItemList } from "@react-navigation/drawer";
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
    CourseName: "Englsihkkkk",
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
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>CourseName</DataTable.Title>
          <DataTable.Title>TeacherName</DataTable.Title>
          <DataTable.Title numeric>Lectures</DataTable.Title>
          <DataTable.Title numeric>Presents</DataTable.Title>
          <DataTable.Title numeric>Absents</DataTable.Title>
          <DataTable.Title numeric>Percent</DataTable.Title>
        </DataTable.Header>
        <FlatList
          data={data}
          keyExtractor={(data) => data.CourseName.toString()}
          renderItem={({ item }) => (
            <DataTable.Row>
              <DataTable.Cell>{item.CourseName}</DataTable.Cell>
              <DataTable.Cell>{item.TeacherName}</DataTable.Cell>
              <DataTable.Cell numeric>{item.Lectures}</DataTable.Cell>
              <DataTable.Cell numeric>{item.Present}</DataTable.Cell>
              <DataTable.Cell numeric>{item.Absents}</DataTable.Cell>
              <DataTable.Cell numeric>{item.Percent}</DataTable.Cell>
            </DataTable.Row>
          )}
        />
      </DataTable>
      <FlatList
        data={data}
        keyExtractor={(data) => data.CourseName.toString()}
        renderItem={({ item }) => (
          <DataTable>
            <DataTable.Row>
              <DataTable.Cell>{item.CourseName}</DataTable.Cell>
              <DataTable.Cell>{item.TeacherName}</DataTable.Cell>
              <DataTable.Cell numeric>{item.Lectures}</DataTable.Cell>
              <DataTable.Cell numeric>{item.Present}</DataTable.Cell>
              <DataTable.Cell numeric>{item.Absents}</DataTable.Cell>
              <DataTable.Cell numeric>{item.Percent}</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 10,
    //padding: 5,
    //alignItems: "center",
    //justifyContent: "center",
    alignSelf: "center",
  },
});

export default StudentAttandanceScreen;
