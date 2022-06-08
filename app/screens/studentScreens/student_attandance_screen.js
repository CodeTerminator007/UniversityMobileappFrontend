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
import URI from "../../context/uri";
import { DataTable } from "react-native-paper";
import { useSelector } from "react-redux";

import { DrawerItemList } from "@react-navigation/drawer";

function StudentAttandanceScreen() {
  const [attandance_data, set_attandance_data] = useState(null);
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const AuthStr = "Bearer ".concat(Token);
  const [isFetching, setIssFethin] = useState(false);
  const ID = stateData.userReducer.id;

  if (!isFetching) {
    useEffect(() => {
      axios
        .get(`${URI.uri}/Attendance/${ID}/student_attendance_report/`, {
          headers: { Authorization: AuthStr },
        })
        .then((response) => {
          const data1 = response.data;
          set_attandance_data(data1).catch((error) => {
            console.log("error " + error);
          });
        });
    }, [isFetching]);
  }

  return (
    <ScrollView horizontal={true} style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={styles.alpha}>CourseName</DataTable.Title>
          <DataTable.Title style={styles.alpha}>TeacherName</DataTable.Title>
          <DataTable.Title style={styles.numeric} numeric>
            Lectures
          </DataTable.Title>
          <DataTable.Title style={styles.numeric} numeric>
            Presents
          </DataTable.Title>
          <DataTable.Title style={styles.numeric} numeric>
            Absents
          </DataTable.Title>
          <DataTable.Title style={styles.numeric} numeric>
            Percent
          </DataTable.Title>
        </DataTable.Header>
        <FlatList
          data={attandance_data}
          keyExtractor={(data) => data.CourseName.toString()}
          renderItem={({ item }) => (
            <DataTable.Row>
              <DataTable.Cell style={styles.alpha}>
                {item.CourseName}
              </DataTable.Cell>
              <DataTable.Cell style={styles.alpha}>
                {item.TeacherName}
              </DataTable.Cell>
              <DataTable.Cell style={styles.numeric} numeric>
                {item.Lectures}
              </DataTable.Cell>
              <DataTable.Cell style={styles.numeric} numeric>
                {item.total_present}
              </DataTable.Cell>
              <DataTable.Cell style={styles.numeric} numeric>
                {item.total_absent}
              </DataTable.Cell>
              <DataTable.Cell style={styles.numeric} numeric>
                {item.Percentage}
              </DataTable.Cell>
            </DataTable.Row>
          )}
        />
      </DataTable>
      <FlatList
        data={attandance_data}
        keyExtractor={(data) => data.CourseName.toString()}
        renderItem={({ item }) => (
          <DataTable>
            <DataTable.Row>
              <DataTable.Cell style={styles.numeric}>
                {item.CourseName}
              </DataTable.Cell>
              <DataTable.Cell style={styles.numeric}>
                {item.TeacherName}
              </DataTable.Cell>
              <DataTable.Cell style={styles.numeric} numeric>
                {item.Lectures}
              </DataTable.Cell>
              <DataTable.Cell style={styles.numeric} numeric>
                {item.total_present}
              </DataTable.Cell>
              <DataTable.Cell style={styles.numeric} numeric>
                {item.total_absent}
              </DataTable.Cell>
              <DataTable.Cell style={styles.numeric} numeric>
                {item.Percentage}
              </DataTable.Cell>
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
  alpha: {
    width: 90,
  },
  numeric: {
    width: 40,
  },
});

export default StudentAttandanceScreen;
