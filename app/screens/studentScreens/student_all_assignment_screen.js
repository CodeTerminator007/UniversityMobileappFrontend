import React, { useState, useEffect } from "react";
import {
  View,
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
import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native-paper";

function StudentAllAssignmentsScreen({ navigation, route }) {
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
        console.log(d);
        const g = d.map((item) => {
          return {
            id: item.id,
            class_id: item.class_id,
            Marks: item.marks,
            Status: item.status,
            subject_id: item.subject,
            document: item.document,
            submission_time: item.submission_time,
            submission_date: item.submission_date,
            details: item.detail,
            title: item.Title,
            faculty: item.faculty,
          };
        });
        console.log(g);
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
  const data1 = [
    { id: 7, title: "math1", subject_id: 1, class_id: 2 },
    { id: 9, title: "english2", subject_id: 4, class_id: 3 },
  ];
  return (
    <SafeAreaView style={styles.container}>
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
        <View>
          <FlatList
            data={data}
            keyExtractor={(data) => data.id.toString()}
            renderItem={({ item }) => (
              <ClassListItem
                title={item.title}
                onPress={() =>
                  navigation.navigate("View Assignment Screen", {
                    id: item.id,
                    class_id: item.class_id,
                    Marks: item.Marks,
                    Status: item.Status,
                    subject_id: item.subject,
                    document: item.document,
                    submission_time: item.submission_time,
                    submission_date: item.submission_date,
                    details: item.details,
                    title: item.title,
                    faculty: item.faculty,
                  })
                }
              />
            )}
          />
        </View>
      )}
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

export default StudentAllAssignmentsScreen;
