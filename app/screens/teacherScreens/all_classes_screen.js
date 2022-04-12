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

function AllClassesScreen() {
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const [data, setdata] = useState(null);
  const ID = stateData.userReducer.id;

  const AuthStr = "Bearer ".concat(Token);
  axios
    .get(`https://00c8-2400-adc7-13d-5200-abf-641e-89f1-cfde.ngrok.io/Subject/${ID}`, {
      headers: { Authorization: AuthStr },
    })
    .then((response) => {
      const d = response.data;
      const g = d.map((item)=>{
        return ({
          id:item.class_id.toString(),
          title:`${item.course_name} ${item.class_name} ${item.subject_name} `,
          })
      })
      setdata(g)
    })
  
    .catch((error) => {
      console.log("error " + error);
    })

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => <ClassListItem title={item.title} />}
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

export default AllClassesScreen;
