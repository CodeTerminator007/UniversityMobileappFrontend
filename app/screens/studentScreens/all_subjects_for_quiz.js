import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import ClassListItem from "../../components/class_list_item";
import URI from "../../context/uri";
import { useSelector } from "react-redux";
import axios from "axios";
import { ActivityIndicator } from "react-native-paper";

function AllSubjectsForQuizScreen({ navigation }) {
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const [data, setdata] = useState(null);
  const [classid, setClassId] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const ID = stateData.userReducer.id;
  const [isFetching, setIssFethin] = useState(false);

  const AuthStr = "Bearer ".concat(Token);

  // const data = [{ subject_id: 1, title: "aaaa" }];

  if (!classid) {
    axios
      .get(`${URI.uri}/SimpleStudentViewSet/${ID}`, {
        headers: { Authorization: AuthStr },
      })
      .then((response) => {
        const d = response.data;
        setClassId(d.the_class);
        console.log(d);
      })

      .catch((error) => {
        console.log("error " + error);
      });
  }

  const getallsubjects = () => {
    axios
      .get(`${URI.uri}/Subjectfilterclass/${classid}`, {
        headers: { Authorization: AuthStr },
      })
      .then((response) => {
        const d = response.data;
        const g = d.map((item) => {
          return {
            subject_id: item.id.toString(),
            class_id: item.class_id,
            title: `${item.subject_name} `,
          };
        });
        setdata(g);
        setIssFethin(true);
        setIsLoading(false);
      })

      .catch((error) => {
        console.log("error " + error);
      });
  };
  if (classid) {
    if (!isFetching) {
      getallsubjects();
    }
  }
  useEffect(() => {
    setIsLoading(true);
  }, [isFetching]);

  return (
    <SafeAreaView style={styles.container}>
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
        <View>
          {data && (
            <FlatList
              data={data}
              keyExtractor={(data) => data.subject_id.toString()}
              renderItem={({ item }) => (
                <ClassListItem
                  title={item.title}
                  onPress={() =>
                    navigation.navigate("All Quiz", {
                      id: item.subject_id,
                      class_id: item.class_id,
                    })
                  }
                />
              )}
            />
          )}
        </View>
      )}
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

export default AllSubjectsForQuizScreen;
