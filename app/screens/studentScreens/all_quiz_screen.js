import React, { useState, useEffect } from "react";
import {
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
import { Ionicons } from "@expo/vector-icons";

function AllQuizScreen({ navigation, route }) {
  const { id } = route.params;
  const { class_id } = route.params;

  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const AuthStr = "Bearer ".concat(Token);
  const [data, setdata] = useState(null);
  const [isFetching, setIssFethin] = useState(false);

  const getallQuiz = () => {
    axios
      .get(`${URI.uri}/Quiz/?subject_id=${id}`, {
        headers: { Authorization: AuthStr },
      })
      .then((response) => {
        const s = response.data;
        const g = s.map((item) => {
          const dd = new Date()
          const result = new Date(Date.UTC(dd.getFullYear(),dd.getMonth(),dd.getDate())) 
          const date = result.toISOString().split('T')[0]
          return {
            id: item.id,
            title:item.title,
            time:item.time,
            quizDate:item.quizDate,
            subject:item.subject,
            current_date:date
          };
        });
        console.log(g);
        setdata(g);
        setIssFethin(true);
      })

      .catch((error) => {
        console.log("error " + error);
      });
  };
  
  useEffect(() => {
    if (!isFetching) {
      getallQuiz();
    }
  }, [isFetching]);


  return (
    <SafeAreaView style={styles.container}>
      {data &&   
            <FlatList
            data={data}
            keyExtractor={(data) => data.id.toString()}
            renderItem={({ item }) => (
              <ClassListItem
                title={item.title}
                onPress={() => navigation.navigate("Start Quiz" , {
                  id: item.id,
                  quizDate:item.quizDate,
                  time:item.time,
                  title:item.title,
                  subject:item.subject,
                  current_date:item.current_date
                })}
              />
            )}
          />
          }

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

export default AllQuizScreen;
