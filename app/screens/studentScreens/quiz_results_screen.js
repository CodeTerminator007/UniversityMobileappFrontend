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
import { ActivityIndicator } from "react-native-paper";

import { DrawerItemList } from "@react-navigation/drawer";

function QuizresultsScreen() {
  const [attandance_data, set_attandance_data] = useState(null);
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const AuthStr = "Bearer ".concat(Token);
  const [isFetching, setIssFethin] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const ID = stateData.userReducer.id;

  if (!isFetching) {
    useEffect(() => {
      setIsLoading(true);
      axios
        .get(`${URI.uri}/Attendance/${ID}/student_attendance_report/`, {
          headers: { Authorization: AuthStr },
        })
        .then((response) => {
          const data1 = response.data;
          setIsLoading(false);

          set_attandance_data(data1).catch((error) => {
            console.log("error " + error);
          });
        });
    }, [isFetching]);
  }

  return (
    <>
      {isloading ? (
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <ActivityIndicator />
        </View>
      ) : (
        <ScrollView horizontal={true} style={styles.container}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title style={styles.alpha}>Quiz Name</DataTable.Title>
              <DataTable.Title style={styles.numeric} numeric>
                Total Marks
              </DataTable.Title>
              <DataTable.Title style={styles.numeric} numeric>
                Obtained
              </DataTable.Title>
              <DataTable.Title style={styles.numeric} numeric>
                Attempted
              </DataTable.Title>
              <DataTable.Title style={styles.numeric} numeric>
                exxtra
              </DataTable.Title>
              <DataTable.Title style={styles.numeric} numeric>
                extra
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
                  <DataTable.Cell style={styles.numeric} numeric>
                    {item.Lectures}
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
                    {item.Lectures}
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
      )}
    </>
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
    width: 200,
  },
  numeric: {
    width: 40,
  },
});

export default QuizresultsScreen;
