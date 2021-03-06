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

  const ID = stateData.userReducer.id;

  if (!isFetching) {
    useEffect(() => {
      setIsLoading(true);
      axios
        .get(`${URI.uri}/Result/`, {
          headers: { Authorization: AuthStr },
        })
        .then((response) => {
          const data1 = response.data;
          setIsLoading(false);
          const g = data1.map((item) => {
            return {
              value: item.id,
              label: item.name,
            };
          });
          setYearlist(g);
        })
        .catch((error) => {
          Alert.alert("Error", "Network Error");
          console.log("error " + error);
        });
    }, [isFetching]);
  }
  if (year) {
    axios
      .get(`${URI.uri}/SubjectResult/?student_id=${ID}&result_id=${year}`, {
        headers: { Authorization: AuthStr },
      })
      .then((response) => {
        const data2 = response.data;
        set_attandance_data(data2);
      })
      .catch((error) => {
        Alert.alert("Error", "Network Error");
        console.log("error " + error);
      });
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
          <ActivityIndicator animating={true} size={40} />
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
                width: "150%",
                height: 50,
                marginLeft: 80,
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
          </View>
          <ScrollView horizontal={true} style={styles.container}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={styles.alpha}>Subject</DataTable.Title>
                <DataTable.Title style={styles.alpha}>Teacher</DataTable.Title>
                <DataTable.Title style={styles.numeric} numeric>
                  Mid
                </DataTable.Title>
                <DataTable.Title style={styles.numeric} numeric>
                  Final
                </DataTable.Title>
                <DataTable.Title style={styles.numeric} numeric>
                  Sessional
                </DataTable.Title>
                <DataTable.Title style={styles.numeric} numeric>
                  Total
                </DataTable.Title>
              </DataTable.Header>
              <FlatList
                data={attandance_data}
                keyExtractor={(data) => data.id.toString()}
                renderItem={({ item }) => (
                  <DataTable.Row>
                    <DataTable.Cell style={styles.alpha}>
                      {item.subjectname}
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.alpha}>
                      {item.teacherfirstname + item.teacherlastname}
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.numeric} numeric>
                      {item.midobtainedMarks}
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.numeric} numeric>
                      {item.finalobtainedMarks}
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.numeric} numeric>
                      {item.sessionalmarks}
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.numeric} numeric>
                      {item.midobtainedMarks +
                        item.finalobtainedMarks +
                        item.sessionalmarks}
                    </DataTable.Cell>
                  </DataTable.Row>
                )}
              />
            </DataTable>
            <FlatList
              data={attandance_data}
              keyExtractor={(data) => data.id.toString()}
              renderItem={({ item }) => (
                <DataTable>
                  <DataTable.Row>
                    <DataTable.Cell style={styles.numeric}>
                      {item.subjectname}
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.numeric}>
                      {item.teacherfirstname + item.teacherlastname}
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.numeric} numeric>
                      {item.midobtainedMarks}
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.numeric} numeric>
                      {item.finalobtainedMarks}
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.numeric} numeric>
                      {item.sessionalmarks}
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.numeric} numeric>
                      {item.midobtainedMarks +
                        item.finalobtainedMarks +
                        item.sessionalmarks}
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
    marginLeft: 7,
    width: 190,
    borderRightWidth: 0.5,
    borderRightColor: "lightgrey",
  },
  numeric: {
    justifyContent: "center",
    width: 100,
    borderRightWidth: 0.5,
    borderRightColor: "lightgrey",
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
