import React, { useState, useEffect } from "react";
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
import { ActivityIndicator } from "react-native-paper";
import URI from "../../context/uri";
import AssignmentListItem from "../../components/assignment_list_item";
import { useSelector } from "react-redux";
import axios from "axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Students from "../../components/students";

function AllStudentsResult({ navigation, route }) {
  const { id } = route.params;
  const { class_id } = route.params;
  const { subject_id } = route.params;

  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const AuthStr = "Bearer ".concat(Token);
  const [data, setdata] = useState(null);
  const [isFetching, setIssFethin] = useState(false);
  const ID = stateData.userReducer.id;

  const [isloading, setIsLoading] = useState(false);

  const getstudentslist = () => {
    setIsLoading(true);
    axios
      .get(`${URI.uri}/user/student/${class_id}`, {
        headers: { Authorization: AuthStr },
      })
      .then((response) => {
        setIssFethin(true);
        const d = response.data;
        const g = d.map((item) => {
          return {
            title: item.username,
            rollNo: item.roll_num.toString(),
            id: item.user.toString(),
            class_id: class_id,
            subject_id: subject_id,
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
    if (!isFetching) {
      getstudentslist();
    }
  }, [isFetching]);
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
            keyExtractor={(data) => data.id}
            renderItem={({ item }) => (
              <Students
                title={item.title}
                rollNo={item.rollNo}
                onPress={() =>
                  navigation.navigate("Mark Result", {
                    studentid: item.id,
                    class_id: class_id,
                    subject_id: subject_id,
                  })
                }
              />
            )}
          />
        </SafeAreaView>
      )}
    </>
  );
  //  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    //paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
});

export default AllStudentsResult;
