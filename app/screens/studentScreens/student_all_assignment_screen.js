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
import { useSelector } from "react-redux";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

function StudentAllAssignmentsScreen({ navigation, route }) {
  const { id } = route.params;
  const { class_id } = route.params;

  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const AuthStr = "Bearer ".concat(Token);
  const [data, setdata] = useState(null);
  const [isFetching, setIssFethin] = useState(false);

  const getallAssignment = () => {
    axios
      .get(
        `http://d468-2400-adc7-13d-5200-aa5e-5479-6c5f-d4ed.ngrok.io/AssignmentViewSet/${id}`,
        {
          headers: { Authorization: AuthStr },
        }
      )
      .then((response) => {
        const d = response.data;
        console.log(d)
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
        console.log(g)
        setdata(g);
        setIssFethin(true);
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
