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
import AssignmentListItem from "../../components/assignment_list_item";
import { useSelector } from "react-redux";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

function SubmittedAssignmentsScreen({ navigation, route }) {
  const { id } = route.params;
  const { class_id } = route.params;
  const { subject_id } = route.params;

  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const AuthStr = "Bearer ".concat(Token);
  const [data, setdata] = useState(null);
  const [isFetching, setIssFethin] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  console.log("the assignment id = " + id);
  const getsubmittedassignmentdetail = () => {
    setIsLoading(true);
    axios
      .get(`${URI.uri}/SecondAssignmentSubmissionViewSet/${id}`, {
        headers: { Authorization: AuthStr },
      })
      .then((response) => {
        const d = response.data;
        console.log(d);
        const g = d.map((item) => {
          return {
            id: item.student,
            title: `${item.first_name} ${item.last_name}`,
            class_id: class_id,
            assignemt_id: id,
          };
        });
        setdata(g);
        setIssFethin(true);
        setIsLoading(false);
      })

      .catch((error) => {
        setIsLoading(false);
        console.log("error " + error);
      });
  };
  useEffect(() => {
    if (!isFetching) {
      getsubmittedassignmentdetail();
    }
  }, [isFetching]);

  return (
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Assignment Detail", {
              assignment_id: id,
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
              keyExtractor={(data) => data.id}
              renderItem={({ item }) => (
                <AssignmentListItem
                  title={item.title}
                  statuss={true}
                  onPress={() =>
                    navigation.navigate("Student Assignment Detail", {
                      student_id: item.id,
                      assignemt: item.assignemt_id,
                      subject_id: subject_id,
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

export default SubmittedAssignmentsScreen;
