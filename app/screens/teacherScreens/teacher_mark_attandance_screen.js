import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableOpacity,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import URI from "../../context/uri";
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
  const [attandanceID, setattandanceID] = useState(null);

  const [attandance_data, set_attandance_data] = useState(null);

  const [isFetching, setIssFethin] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const AttandanceReport = () => {
    const option = {
      headers: { Authorization: AuthStr },
    };
    setIsLoading(true);
    axios
      .post(
        `${URI.uri}/Attendance/`,
        {
          attendance_date: date,
          subject_id: paasedData.subject_id,
          class_id: paasedData.id,
        },
        option
      )
      .then((res) => {
        setattandanceID(res.data.id);

        const s = data.map((item) => {
          return {
            status: item.switch,
            student_id: item.id,
            attendance_id: res.data.id,
            subject_id: paasedData.subject_id,
          };
        });
        set_attandance_data(s);

        axios
          .post(`${URI.uri}/BulkAttendance/`, s, option)
          .then((res2) => {})
          .catch((err2) => {
            console.log("error", err2);
          });
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("error", err);
      });
  };

  const handleSubmit = async () => {
    AttandanceReport();
  };

  const AuthStr = "Bearer ".concat(Token);
  const getStudents = () => {
    setIsLoading(true);
    axios
      .get(`${URI.uri}/user/student/${paasedData.id}`, {
        headers: { Authorization: AuthStr },
      })
      .then((response) => {
        setIssFethin(true);
        const d = response.data;
        const g = d.map((item) => {
          return {
            name: item.username,
            rollno: item.roll_num.toString(),
            switch: false,
            id: item.user.toString(),
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
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemRollno}>{item.rollno}</Text>
      <Switch
        onValueChange={(value) => setSwitchValue(value, index)}
        value={item.switch}
      />
    </View>
  );

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
        <View style={styles.container}>
          <DatePickerr date={date} setDate={setDate} />
          <View
            style={{
              //flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.itemHeaderName}>NAME</Text>
            <Text style={styles.itemHeaderRollNo}>ROLL NO</Text>
            <Text style={styles.itemHeaderRollNo}></Text>
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
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 40,
  },
  itemName: {
    padding: 10,
    fontSize: 18,
    height: 44,
    width: "60%",
  },
  itemRollno: {
    padding: 10,
    fontSize: 18,
    height: 44,
    width: "20%",
  },
  itemHeaderName: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    height: 44,
    width: "60%",
  },
  itemHeaderRollNo: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    height: 44,
    width: "20%",
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
