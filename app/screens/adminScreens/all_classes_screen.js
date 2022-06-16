import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import URI from "../../context/uri";
import ClassListItem from "../../components/class_list_item";
import { useSelector } from "react-redux";
import axios from "axios";

function AdminAllClassesScreen({ navigation }) {
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const [data, setdata] = useState(null);

  const AuthStr = "Bearer ".concat(Token);
  axios
    .get(`${URI.uri}/Class/`, {
      headers: { Authorization: AuthStr },
    })
    .then((response) => {
      // If request is good...
      const d = response.data;
      const g = d.map((item) => {
        return {
          id: item.id,
          title: `${item.course_name} ${item.class_name} ${item.semaster} ${item.sec}`,
          class_name:item.class_name,
          section:item.sec,
          semaster:item.semaster,
          course:item.course_id,
          course_name:item.course_name
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
              navigation.navigate("Edit Class", {
                id: item.id,
                course_id:item.course,
                semaster_name:item.semaster,
                section_name:item.section,
                class_name:item.class_name,
                course_name:item.course_name,

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

export default AdminAllClassesScreen;
