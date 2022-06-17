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
import DropDownPicker from "react-native-dropdown-picker";
import { DrawerItemList } from "@react-navigation/drawer";

function StudentResultScreen() {
  const [attandance_data, set_attandance_data] = useState(null);
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const AuthStr = "Bearer ".concat(Token);
  const [isFetching, setIssFethin] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const [yearopen, setYearopen] = useState(false);
  const [year, setYear] = useState(null);

  const [yearlist, setYearlist] = useState([
    { label: "2022", value: "2022" },
    { label: "2021", value: "2021" },
  ]);

  // const ID = stateData.userReducer.id;

  // if (!isFetching) {
  //   useEffect(() => {
  //     setIsLoading(true);
  //     axios
  //       .get(`${URI.uri}/Attendance/${ID}/student_attendance_report/`, {
  //         headers: { Authorization: AuthStr },
  //       })
  //       .then((response) => {
  //         const data1 = response.data;
  //         setIsLoading(false);

  //         set_attandance_data(data1).catch((error) => {
  //           console.log("error " + error);
  //         });
  //       });
  //   }, [isFetching]);
  // }

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
        <>
          <View style={styles.header}>
            <DropDownPicker
              placeholder="Year"
              open={yearopen}
              //onOpen={onGenderOpen}
              value={year}
              items={yearlist}
              setOpen={setYearopen}
              setValue={setYear}
              setItems={setYearlist}
              containerStyle={{
                //width: "80%",
                //height: 50,
                marginBottom: yearopen ? 175 : 0,
                justifyContent: "center",
                //padding: 20,
              }}
              style={{
                backgroundColor: "lightgrey",
                borderColor: "#edece8",
                borderRadius: 25,
                width: "40%",
              }}
              textStyle={{
                fontSize: 16,
                fontWeight: "bold",
                color: "black",
                marginLeft: 19,
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.text}>CGPA:</Text>
              <Text style={styles.text}>2.9</Text>
            </View>
          </View>
          <ScrollView horizontal={true} style={styles.container}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={styles.alpha}>
                  CourseName
                </DataTable.Title>
                <DataTable.Title style={styles.alpha}>
                  TeacherName
                </DataTable.Title>
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
        </>
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
    width: 190,
  },
  numeric: {
    width: 40,
  },
  header: {
    flexDirection: "row",
    padding: 10,
    paddingHorizontal: 40,
    //height: 90,
    width: 350,
    justifyContent: "space-evenly",
    alignItems: "center",
    //backgroundColor: "white",
  },
  text: {
    //backgroundColor: "green",
    //flex: 1,
    color: "black",
    fontWeight: "bold",
    fontSize: 19,
    //alignSelf: "flex-start",
    //marginLeft: "14%",
  },
});

export default StudentResultScreen;
