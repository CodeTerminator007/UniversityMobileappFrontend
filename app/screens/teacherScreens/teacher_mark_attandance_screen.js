import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableOpacity,
} from "react-native";
import DatePickerr from "../../components/date_picker";
import { useSelector } from "react-redux";
import axios from "axios";
import _ from "lodash";

function TeacherMarkAttandanceScreen({ route }) {
  const paasedData = route.params;
  const [date, setDate] = useState("2022-01-01");

  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const [data, setdata] = useState(null);
  const [isFetching, setIssFethin] = useState(false);

  // const AttandanceReport = (event) => {
  //   event.preventDefault();
  //   const option = {
  //     headers: { Authorization: AuthStr },
  //   }
  //   console.log(AuthStr)
  //   axios
  //     .post(`https://00c8-2400-adc7-13d-5200-abf-641e-89f1-cfde.ngrok.io/Attendance/`, {
  //       attendance_date: subject,
  //       subject_id: subjectHourStart,
  //       class_id: subjectHourEnd,
  //       },
  //       option
  //       )
  //     .then((res) => {
  //       console.log("attandance created")
  //       console.log(res.data)
  //     })
  //     .catch((err) => {
  //       console.log("error", err);
  //     });
  // };
  
  const handleSubmit = () => {
    console.log(date)
    // AttandanceReport()
  };

  const AuthStr = "Bearer ".concat(Token);
  const getStudents = () => {
    axios
      .get(
        `https://00c8-2400-adc7-13d-5200-abf-641e-89f1-cfde.ngrok.io/user/student/${paasedData.id}`,
        {
          headers: { Authorization: AuthStr },
        }
      )
      .then((response) => {
        setIssFethin(true);
        const d = response.data;
        const g = d.map((item) => {
          return {
            name: item.username,
            rollno: item.roll_num.toString(),
            switch: false,
          };
        });
        setdata(g);
      })

      .catch((error) => {
        console.log("error " + error);
      });
  };

  const setSwitchValue = (val, ind) => {
    const tempData = _.cloneDeep(data);
    tempData[ind].switch = val;
    setdata(tempData);
  };
  useEffect(() => {
    if (!isFetching) {
      getStudents();
    }
  }, [isFetching]);
  const listItem = ({ item, index }) => (
    <View
      style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}
    >
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.rollno}</Text>
      <Switch
        onValueChange={(value) => setSwitchValue(value, index)}
        value={item.switch}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <DatePickerr date={date} setDate = {setDate} />
      <View
        style={{
          //flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.itemHeader}>NAME</Text>
        <Text style={styles.itemHeader}>ROLL NO</Text>
        <Text style={styles.itemHeader}></Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(data) => data.rollno.toString()}
        renderItem={listItem}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.loginText}>Mark Attandance</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 40,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  itemHeader: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    height: 44,
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
    alignSelf: "center",
  },
  loginText: {
    color: "white",
  },
});

export default TeacherMarkAttandanceScreen;
