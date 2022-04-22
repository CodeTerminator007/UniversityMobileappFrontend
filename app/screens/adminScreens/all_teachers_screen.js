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

function AllTeachersScreen({ navigation }) {
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const [data, setdata] = useState(null);

  const AuthStr = "Bearer ".concat(Token);
  axios
    .get(
      `https://00c8-2400-adc7-13d-5200-abf-641e-89f1-cfde.ngrok.io/user/faculty/`,
      {
        headers: { Authorization: AuthStr },
      }
    )
    .then((response) => {
      // If request is good...
      const d = response.data;
      // // console.log("this is data")
      const g = d.map((item) => {
        return {
          id: item.user,
          title: `${item.first_name} ${item.last_name}`,
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
              navigation.navigate("Edit Teacher", {
                id: item.id,
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

export default AllTeachersScreen;
