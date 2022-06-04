import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Switch,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateAndTimePicker from "../../components/date_and_time_picker";
import { useSelector } from "react-redux";


function AssignmentDetailScreen({navigation , route}) {
  
  const { assignment_id } = route.params;

  const [title, setTitle] = useState("default");
  const [detail, setDetail] = useState(null);
  const [marks, setMarks] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [date, setDate] = useState("2022-01-01");

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const AuthStr = "Bearer ".concat(Token);
  const [data, setdata] = useState();
  const [isFetching, setIssFethin] = useState(false);

  const getassignmentdetail= () => {
  axios
    .get(
      `http://d468-2400-adc7-13d-5200-aa5e-5479-6c5f-d4ed.ngrok.io/SecondAssignmentViewSet/${assignment_id}`,
      {
        headers: { Authorization: AuthStr },
      }
    )
    .then((response) => {
      const d = response.data;
      setdata(d)
      console.log(data)

    })
   
    .catch((error) => {
      console.log("error " + error);
    });
  }
  useEffect(() => {
    if (!isFetching) {
      getassignmentdetail();
      if (data){
      setIsEnabled(data.status)

      setIssFethin(true)
    }
    }
  }, [isFetching]);

  return (
    
    <ScrollView>
      {data &&
      <View style={styles.container}>
        
        <Text style={styles.headingText}>Assignment Details</Text>
        
        <View style={styles.titleinputView}>
          <TextInput
            style={styles.titleinputText}
            placeholder="Title"
            value={data.Title}
            placeholderTextColor="#003f5c"
            onChangeText={setTitle}
          />
        </View>
        <View style={styles.detailinputView}>
          <TextInput
            style={styles.detailinputText}
            placeholder="Details"
            placeholderTextColor="#003f5c"
            value={data.detail}
            multiline={true}
            textAlignVertical="top"
            onChangeText={setDetail}
          />
        </View>
        <View style={styles.marksnswitch}>
          <View style={styles.marksinputView}>
            <TextInput
              style={styles.titleinputText}
              placeholder="Marks"
              value={data.marks.toString()}
              placeholderTextColor="#003f5c"
              onChangeText={setMarks}
            />
          </View>
          <View style={styles.switch}>
            {isEnabled ? (
              <Text style={styles.text}>OPEN</Text>
            ) : (
              <Text style={styles.text}>CLOSED</Text>
            )}

            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        <DateAndTimePicker />

        <View style={styles.file}>
          <Ionicons name="cloud-done-outline" size={40} color="#003f5c" />
        </View>
      </View>
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  file: {
    alignItems: "center",
    backgroundColor: "#edece8",
    borderRadius: 15,
    borderColor: "grey",
    borderWidth: 5,
    height: 70,
    justifyContent: "center",
    marginVertical: 10,
    marginBottom: 10,
    overflow: "hidden",
    width: 70,
  },
  marksnswitch: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#185079",
    marginTop: 10,
    marginBottom: 40,
  },
  titleinputView: {
    width: "80%",
    backgroundColor: "#edece8",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  titleinputText: {
    height: 50,
    color: "black",
  },
  detailinputView: {
    width: "80%",
    backgroundColor: "#edece8",
    borderRadius: 25,
    height: 80,
    marginBottom: 20,
    //justifyContent: "center",
    padding: 20,
  },
  marksinputView: {
    width: "35%",
    backgroundColor: "#edece8",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  detailinputText: {
    height: 180,
    color: "black",
  },
  button: {
    width: "80%",
    backgroundColor: "#185079",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
  },
  text: {
    color: "#003f5c",
    fontWeight: "bold",
  },
  switch: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AssignmentDetailScreen;
