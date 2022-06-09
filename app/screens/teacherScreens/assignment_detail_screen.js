import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
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
import URI from "../../context/uri";
import { Ionicons } from "@expo/vector-icons";
import DateAndTimePicker from "../../components/date_and_time_picker";
import { useSelector } from "react-redux";
import { Alert } from "react-native";

function AssignmentDetailScreen({ navigation, route }) {
  const { assignment_id } = route.params;
  const [datePicker, setDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());

  const [timePicker, setTimePicker] = useState(false);

  const [time, setTime] = useState(new Date(Date.now()));
  const [title, setTitle] = useState("default");
  const [detail, setDetail] = useState("default");
  const [document, setDocument] = useState("default");
  const [file, setFile] = useState(null);
  const [id, setID] = useState(4);
  const [faculty, setFaculty] = useState(3);
  const [subject, setSubject] = useState(2);
  const [class_id, setClassID] = useState(1);
  const [marks, setMarks] = useState(12);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const AuthStr = "Bearer ".concat(Token);
  const [data, setdata] = useState();
  const [isFetching, setIssFethin] = useState(false);
  const ID = stateData.userReducer.id;

  const getassignmentdetail = () => {
    axios
      .get(`${URI.uri}/SecondAssignmentViewSet/${assignment_id}`, {
        headers: { Authorization: AuthStr },
      })
      .then((response) => {
        const d = response.data;
        setdata(d);

        if (data) {
          setIsEnabled(data.status);
          setTitle(data.Title);
          setDetail(data.detail);
          setMarks(data.marks);
          // var datetimeobj = data.submission_datetime;
          // setDate(new Date(datetimeobj));
          // setTime(new Date(datetimeobj));
          // setDate(new Date(data.submission_date))
          // console.log(new Date(data.submission_date))
          // setTime(data.submission_time)
          // console.log(data.submission_time)

          const dateTime = moment(
            `${data.submission_date} ${data.submission_time}`,
            "YYYY-MM-DD HH:mm:ss"
          ).format();
          setDate(new Date(dateTime));
          setTime(new Date(dateTime));

          setDocument(data.document);
          setID(data.id);
          setClassID(data.class_id);
          setFaculty(data.faculty);
          setSubject(data.subject);
          setIssFethin(true);
        }
      })

      .catch((error) => {
        console.log("error " + error);
      });
  };
  if (!isFetching) {
    getassignmentdetail();
  }
  useEffect(() => {}, [isFetching]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const option = {
      headers: {
        Authorization: AuthStr,
        "Content-Type": "multipart/form-data",
      },
    };
    // console.log(option)
    let formdata = new FormData();
    formdata.append("faculty", ID);
    formdata.append("Title", title);
    formdata.append("detail", detail);
    var d = date.toISOString();
    var da = d.split("T")[0];
    // console.log(da)
    formdata.append("submission_date", da);

    // const year = date.getFullYear()
    // const month = date.getMonth()
    // const day = date.getDay()
    // const d = new Date(year , month ,day )
    // console.log(d)
    // console.log(time.getTime())
    var f = time.toTimeString();
    var ti = d.split("T")[1];
    var si = ti.split(".")[0];
    console.log(si);
    formdata.append("submission_time", si);
    formdata.append("subject", subject);
    formdata.append("status", isEnabled);
    formdata.append("marks", marks);
    formdata.append("class_id", class_id);
    // console.log(formdata)
    axios
      .put(`${URI.uri}/AssignmentViewSet/${assignment_id}/`, formdata, option)
      .then((res) => {
        if (res.status == 200) {
          Alert.alert("Assignment", "The Assignment has been updated.");
        }
      })
      .catch((err) => {
        if ((err = 400)) {
          Alert.alert("Error", "Empty Fields fill all the fields");
        }
        console.log("error", err);
      });
  };

  return (
    <ScrollView>
      {data && (
        <View style={styles.container}>
          <Text style={styles.headingText}>Assignment Details</Text>
          <Text style={styles.text}>Title</Text>
          <View style={styles.titleinputView}>
            <TextInput
              style={styles.titleinputText}
              placeholder="Title"
              value={title}
              placeholderTextColor="#003f5c"
              onChangeText={setTitle}
            />
          </View>
          <Text style={styles.text}>Detail</Text>
          <View style={styles.detailinputView}>
            <TextInput
              style={styles.detailinputText}
              placeholder="Details"
              placeholderTextColor="#003f5c"
              value={detail}
              multiline={true}
              textAlignVertical="top"
              onChangeText={setDetail}
            />
          </View>
          <Text style={styles.text}>Marks & Status</Text>

          <View style={styles.marksnswitch}>
            <View style={styles.marksinputView}>
              <TextInput
                style={styles.titleinputText}
                placeholder="Marks"
                value={marks.toString()}
                placeholderTextColor="#003f5c"
                onChangeText={setMarks}
              />
            </View>
            <View style={styles.switch}>
              {isEnabled ? (
                <Text style={styles.switchtext}>OPEN</Text>
              ) : (
                <Text style={styles.switchtext}>CLOSED</Text>
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
          <Text style={styles.text}>Submit Date & Time</Text>

          <DateAndTimePicker
            datePicker={datePicker}
            setDatePicker={setDatePicker}
            date={date}
            setDate={setDate}
            setTimePicker={setTimePicker}
            timePicker={timePicker}
            time={time}
            setTime={setTime}
          />

          <Text style={styles.text}>Assignment File</Text>

          <TouchableOpacity
            style={styles.fileView}
            onPress={() =>
              navigation.navigate("File Reader", {
                uri: document,
              })
            }
          >
            <Text style={styles.buttonText}>View PDF</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.fileUpload} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Upload Changes</Text>
          </TouchableOpacity>
        </View>
      )}
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
  marksnswitch: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginTop: 10,
  },
  fileView: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "64%",
    backgroundColor: "green",
    borderRadius: 15,
    marginTop: 10,
  },
  fileUpload: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "64%",
    backgroundColor: "#185079",
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 10,
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
    height: 130,
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
    height: 130,
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
    fontWeight: "bold",
    fontSize: 17,
  },
  switchtext: {
    color: "#003f5c",
    fontWeight: "bold",
  },
  text: {
    color: "#003f5c",
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: "14%",
  },
  switch: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AssignmentDetailScreen;
