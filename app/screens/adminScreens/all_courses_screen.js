import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import URI from "../../context/uri";
import { ActivityIndicator } from "react-native-paper";
import ClassListItem from "../../components/class_list_item";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

function AllCoursesScreen({ navigation }) {
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const [data, setdata] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const AuthStr = "Bearer ".concat(Token);

  const getCourses = async () => {
    setIsLoading(true);
    axios
      .get(`${URI.uri}/course/`, {
        headers: { Authorization: AuthStr },
      })
      .then((response) => {
        // If request is good...
        const d = response.data;
        const g = d.map((item) => {
          return {
            id: item.id,
            title: item.course_name,
          };
        });
        setdata(g);
        setIsLoading(false);
      })

      .catch((error) => {
        setIsLoading(false);
        console.log("error " + error);
      });
  };

  useEffect(() => {
    getCourses();
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
                  navigation.navigate("Edit Course", {
                    id: item.id,
                    course_name: item.title,
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

export default AllCoursesScreen;
