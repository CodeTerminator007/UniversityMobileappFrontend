import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import ClassListItem from "../../components/class_list_item";
import URI from "../../context/uri";
import { useSelector } from "react-redux";
import axios from "axios";

function AllSubjectsForQuizScreen({ navigation }) {
  const data = [{ subject_id: 1, title: "aaaa" }];
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(data) => data.subject_id.toString()}
        renderItem={({ item }) => (
          <ClassListItem
            title={item.title}
            onPress={() => navigation.navigate("All Quiz")}
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

export default AllSubjectsForQuizScreen;
