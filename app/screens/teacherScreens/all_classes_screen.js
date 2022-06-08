import React, { useState, useEffect } from "react";
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

function AllClassesScreen({ navigation }) {
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const [data, setdata] = useState(null);
  const ID = stateData.userReducer.id;
  const [isFetching, setIssFethin] = useState(false);

  const AuthStr = "Bearer ".concat(Token);
  const getallClasses = () => {
    axios
      .get(`${URI.uri}/Subject/${ID}`, {
        headers: { Authorization: AuthStr },
      })
      .then((response) => {
        const d = response.data;
        const g = d.map((item) => {
          return {
            id: item.class_id.toString(),
            subject_id: item.id,
            title: `${item.course_name} ${item.class_name} ${item.class_semaster} Section ${item.class_sec} ${item.subject_name} `,
          };
        });
        setdata(g);
        setIssFethin(true);
      })

      .catch((error) => {
        console.log("error " + error);
      });
  };
  useEffect(() => {
    if (!isFetching) {
      getallClasses();
    }
  }, [isFetching]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <ClassListItem
            title={item.title}
            onPress={() =>
              navigation.navigate("Mark Attandance", {
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

export default AllClassesScreen;
