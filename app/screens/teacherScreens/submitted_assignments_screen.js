import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import AssignmentListItem from "../../components/assignment_list_item";
import { useSelector } from "react-redux";
import axios from "axios";

function SubmittedAssignmentsScreen({ navigation, route }) {
  const { id } = route.params;
  const { class_id } = route.params;
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const AuthStr = "Bearer ".concat(Token);
  const [data, setdata] = useState(null);

  axios
    .get(
      `http://d468-2400-adc7-13d-5200-aa5e-5479-6c5f-d4ed.ngrok.io/user/student/${class_id}`,
      {
        headers: { Authorization: AuthStr },
      }
    )
    .then((response) => {
      const d = response.data;
      const g = d.map((item) => {
        return {
          id: item.id,
          title: `${item.first_name} ${item.last_name}`,
          class_id: class_id,
          assignemt_id: id,
        };
      });
      setdata(g);
    })

    .catch((error) => {
      console.log("error " + error);
    });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(data) => data.id}
        renderItem={({ item }) => (
          <AssignmentListItem
            title={item.title}
            statuss={item.statuss}
            onPress={() =>
              navigation.navigate("Student Assignment Detail", {
                ...item,
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

export default SubmittedAssignmentsScreen;
