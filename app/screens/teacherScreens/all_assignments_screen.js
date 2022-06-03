import React, { useState } from "react";
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

function AllAssignmentsScreen({ navigation, route }) {
  const { id } = route.params;
  const { class_id } = route.params;

  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const AuthStr = "Bearer ".concat(Token);
  const [data, setdata] = useState(null);
  console.log(id)
  axios
    .get(
      `http://d468-2400-adc7-13d-5200-aa5e-5479-6c5f-d4ed.ngrok.io/AssignmentViewSet/${id}`,
      {
        headers: { Authorization: AuthStr },
      }
    )
    .then((response) => {
      const d = response.data;
      const g = d.map((item) => {
        return {
          id: item.id,
          title: item.Title,
          class_id:class_id,
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
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <ClassListItem
            title={item.title}
            onPress={() =>
              navigation.navigate("Submitted Assignments", {
                id: item.id,
                class_id:item.class_id,
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

export default AllAssignmentsScreen;
