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
  Alert,
} from "react-native";
import URI from "../../context/uri";
import { DataTable } from "react-native-paper";
import { useSelector } from "react-redux";
import { ActivityIndicator } from "react-native-paper";

import { DrawerItemList } from "@react-navigation/drawer";

function AssignmentResultsScreen({ route }) {
  const [data, setData] = useState(null);
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const AuthStr = "Bearer ".concat(Token);
  const [isFetching, setIssFethin] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const { id } = route.params;

  const ID = stateData.userReducer.id;

  const getData = () => {
    setIsLoading(true);
    axios
      .get(
        `${URI.uri}/Assignmentmarksresult/?student_id=${ID}&subject_id=${id}`,
        {
          headers: { Authorization: AuthStr },
        }
      )
      .then((response) => {
        const s = response.data;
        console.log(s);
        setData(s);
        setIsLoading(false);
      })
      .catch((error) => {
        Alert.alert("Error", "Network Error");
        console.log("error " + error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

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
          <ActivityIndicator animating={true} size={40} />
        </View>
      ) : (
        <ScrollView horizontal={true} style={styles.container}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title style={styles.alpha}>
                Assignment Name
              </DataTable.Title>
              <DataTable.Title style={styles.numeric} numeric>
                Total Marks
              </DataTable.Title>
              <DataTable.Title style={styles.numeric} numeric>
                Obtained
              </DataTable.Title>
              <DataTable.Title style={styles.numeric} numeric>
                Percentage
              </DataTable.Title>
            </DataTable.Header>
            <FlatList
              data={data}
              keyExtractor={(data) => data.id.toString()}
              renderItem={({ item }) => (
                <DataTable.Row>
                  <DataTable.Cell style={styles.alpha}>
                    {item.assignment_name}
                  </DataTable.Cell>
                  <DataTable.Cell style={styles.numeric} numeric>
                    {item.totalmarks}
                  </DataTable.Cell>
                  <DataTable.Cell style={styles.numeric} numeric>
                    {item.marks}
                  </DataTable.Cell>
                  <DataTable.Cell style={styles.numeric} numeric>
                    {(item.marks / item.totalmarks) * 100} %
                  </DataTable.Cell>
                </DataTable.Row>
              )}
            />
          </DataTable>
          <FlatList
            data={data}
            keyExtractor={(data) => data.id.toString()}
            renderItem={({ item }) => (
              <DataTable>
                <DataTable.Row>
                  <DataTable.Cell style={styles.numeric}>
                    {item.quiz}
                  </DataTable.Cell>
                  <DataTable.Cell style={styles.numeric}>
                    {item.outofmarks}
                  </DataTable.Cell>
                  <DataTable.Cell style={styles.numeric} numeric>
                    {item.marks}
                  </DataTable.Cell>
                  <DataTable.Cell style={styles.numeric} numeric>
                    {item.marks}
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
    borderRightWidth: 0.5,
    borderRightColor: "lightgrey",
  },
  numeric: {
    justifyContent: "center",
    width: 100,
    borderRightWidth: 0.5,
    borderRightColor: "lightgrey",
  },
});

export default AssignmentResultsScreen;
