import React, { useState , useEffect } from "react";
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
  
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const [data, setdata] = useState(null);
  const [classid, setClassId] = useState(null);

  const ID = stateData.userReducer.id;
  const [isFetching, setIssFethin] = useState(false);

  const AuthStr = "Bearer ".concat(Token);
  if (!classid){
  axios
    .get(
      `http://d468-2400-adc7-13d-5200-aa5e-5479-6c5f-d4ed.ngrok.io/SimpleStudentViewSet/${ID}`,
      {
        headers: { Authorization: AuthStr },
      }
    )
    .then((response) => {
      const d = response.data;
      setClassId(d.class_id)
      // const g = d.map((item) => {
      //   return {
      //     class_id: item.class_id,
      //     subject_id: item.id,
      //     title: `${item.course_name} ${item.class_name} ${item.class_semaster} Section ${item.class_sec} ${item.subject_name} `,
      //   };
      // });
      // setdata(g);
    })

    .catch((error) => {
      console.log("error " + error);
    });
  }

  const getallsubjects= () => {
  axios
    .get(
      `http://d468-2400-adc7-13d-5200-aa5e-5479-6c5f-d4ed.ngrok.io/Subjectfilterclass/${classid}`,
      {
        headers: { Authorization: AuthStr },
      }
    )
    .then((response) => {
      const d = response.data;
      const g = d.map((item) => {
        return {
          subject_id: item.id.toString(),
          class_id : item.class_id,
          title: `${item.course_name} ${item.class_name} ${item.class_semaster} Section ${item.class_sec} ${item.subject_name} `,
        };
      });
      setdata(g);
      setIssFethin(true)
    })

    .catch((error) => {
      console.log("error " + error);
    });
  }
  useEffect(() => {
    if (classid){
    if (!isFetching) {   
      getallsubjects();
    }
  }
  }, [isFetching]);

  const data1 = [
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
