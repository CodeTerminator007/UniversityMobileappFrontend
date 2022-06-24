import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import URI from "../../context/uri";
import { ActivityIndicator } from "react-native-paper";
import ClassListItem from "../../components/class_list_item";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

// const data = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     title: "Subject 1",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     title: "Subject 2",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Subject 3",
//   },
// ];

function AllSubjectsScreen({ navigation }) {
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const [data, setdata] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const AuthStr = "Bearer ".concat(Token);
  const getSubjects = async () => {
    setIsLoading(true);
    axios
      .get(`${URI.uri}/Subject/`, {
        headers: { Authorization: AuthStr },
      })
      .then((response) => {
        // If request is good...
        const d = response.data;
        const g = d.map((item) => {
          return {
            id: item.id,
            title: item.subject_name,
            course_name: item.course_name,
            course_id: item.course_id,
            staff_name: item.staff_name,
            staff_id: item.staff_id,
            class_name: item.class_name,
            class_id: item.class_id,
            class_sec: item.class_sec,
            class_semaster: item.class_semaster,
          };
        });
        setdata(g);
        setIsLoading(false);
      })

      .catch((error) => {
        setIsLoading(false);
        Alert.alert("Error", "Network Error");
        console.log("error " + error);
      });
  };
  useEffect(() => {
    getSubjects();
  }, []);

  return (
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
            keyExtractor={(data) => data.id.toString()}
            renderItem={({ item }) => (
              <ClassListItem
                title={item.title}
                onPress={() =>
                  navigation.navigate("Edit Subject", {
                    id: item.id,
                    subject_name: item.title,
                    course_name: item.course_name,
                    course_id: item.course_id,
                    staff_name: item.staff_name,
                    staff_id: item.staff_id,
                    class_name: item.class_name,
                    class_id: item.class_id,
                    class_sec: item.class_sec,
                    class_semaster: item.class_semaster,
                  })
                }
              />
            )}
          />
        </SafeAreaView>
      )}
    </>
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

export default AllSubjectsScreen;
