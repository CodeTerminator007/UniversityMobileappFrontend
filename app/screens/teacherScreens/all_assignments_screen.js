import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import URI from "../../context/uri";
import ClassListItem from "../../components/class_list_item";
import { useSelector } from "react-redux";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

function AllAssignmentsScreen({ navigation, route }) {
  const { id } = route.params;
  const { class_id } = route.params;

  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const AuthStr = "Bearer ".concat(Token);
  const [data, setdata] = useState(null);
  const [isFetching, setIssFethin] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const getallAssignment = () => {
    setIsLoading(true);
    axios
      .get(`${URI.uri}/AssignmentViewSet/${id}`, {
        headers: { Authorization: AuthStr },
      })
      .then((response) => {
        const d = response.data;
        const g = d.map((item) => {
          return {
            id: item.id,
            title: item.Title,
            class_id: class_id,
          };
        });
        setdata(g);
        setIssFethin(true);
        setIsLoading(false);
      })

      .catch((error) => {
        console.log("error " + error);
      });
  };
  useEffect(() => {
    if (!isFetching) {
      getallAssignment();
    }
  }, [isFetching]);
  return (
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Create Assignments", {
              subject_id: id,
              class_id: class_id,
            })
          }
          style={{ marginLeft: 9 }}
        >
          <Ionicons name="create" size={24} color="black" />
        </TouchableOpacity>
      ),
    }),
    (
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
          <SafeAreaView style={styles.container}>
            <FlatList
              data={data}
              keyExtractor={(data) => data.id.toString()}
              renderItem={({ item }) => (
                <ClassListItem
                  title={item.title}
                  onPress={() =>
                    navigation.navigate("Submitted Assignments", {
                      id: item.id,
                      class_id: item.class_id,
                    })
                  }
                />
              )}
            />
          </SafeAreaView>
        )}
      </>
    )
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

export default AllAssignmentsScreen;
