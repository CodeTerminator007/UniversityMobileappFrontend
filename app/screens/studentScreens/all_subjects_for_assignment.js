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

function AllSubjectsForAssignmentScreen({ navigation }) {
  // const state = useSelector((state) => state);
  // const stateData = { ...state };
  // const Token = stateData.userReducer.token;
  // const [data, setdata] = useState(null);
  // const ID = stateData.userReducer.id;

  // const AuthStr = "Bearer ".concat(Token);
  // axios
  //   .get(
  //     ``,
  //     {
  //       headers: { Authorization: AuthStr },
  //     }
  //   )
  //   .then((response) => {
  //     const d = response.data;
  //     const g = d.map((item) => {
  //       return {
  //         class_id: item.class_id,
  //         subject_id: item.id,
  //         title: `${item.course_name} ${item.class_name} ${item.class_semaster} Section ${item.class_sec} ${item.subject_name} `,
  //       };
  //     });
  //     setdata(g);
  //   })

  //   .catch((error) => {
  //     console.log("error " + error);
  //   });
  const data = [
    { title: "math", subject_id: 1, class_id: 2 },
    { title: "english", subject_id: 4, class_id: 3 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(data) => data.subject_id.toString()}
        renderItem={({ item }) => (
          <ClassListItem
            title={item.title}
            onPress={() =>
              navigation.navigate("Student All Assignment", {
                id: item.subject_id,
                class_id: item.class_id,
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

export default AllSubjectsForAssignmentScreen;
