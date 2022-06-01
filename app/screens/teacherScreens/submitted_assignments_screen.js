import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import AssignmentListItem from "../../components/assignment_list_item";
import { useSelector } from "react-redux";
import axios from "axios";

function SubmittedAssignmentsScreen() {
  data = [
    {
      id: 1,
      title: "Student 1",
      statuss: true,
    },
    {
      id: 2,
      title: "Student 2",
      statuss: false,
    },
    {
      id: 3,
      title: "Student 3",
      statuss: false,
    },
    {
      id: 4,
      title: "Student 4",
      statuss: true,
    },
    {
      id: 5,
      title: "Student 5",
      statuss: false,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <AssignmentListItem title={item.title} statuss={item.statuss} />
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

export default SubmittedAssignmentsScreen;
