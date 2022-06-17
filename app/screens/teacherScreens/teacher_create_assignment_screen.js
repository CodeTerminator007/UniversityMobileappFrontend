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
import { ActivityIndicator } from "react-native-paper";
import URI from "../../context/uri";
import FilePicker from "../../components/file_picker";
import DatePickerr from "../../components/date_picker";
import { useSelector } from "react-redux";
import { Alert } from "react-native";

function TeacherCreateAssignmentScreen({ route }) {
  const { subject_id } = route.params;
  const { class_id } = route.params;
  const [title, setTitle] = useState(null);
  const [detail, setDetail] = useState(null);
  const [marks, setMarks] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [timePicker, setTimePicker] = useState(false);
  const [time, setTime] = useState(new Date(Date.now()));
  const [file, setFile] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const AuthStr = "Bearer ".concat(Token);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handleSubmit = () => {
    setIsLoading(true);
    const option = {
      headers: {
        Authorization: AuthStr,
        "Content-Type": "multipart/form-data",
      },
    };
    let formdata = new FormData();
    formdata.append("faculty", stateData.userReducer.id);
    formdata.append("Title", title);
    formdata.append("detail", detail);
    formdata.append("submission_date", date);
    formdata.append("submission_time", "12:00:00");
    formdata.append("document", {
      uri: file.uri,
      type: "application/pdf",
      name: `${title}document.${file.uri.split(".").pop()}`,
    });
    formdata.append("subject ", subject_id);
    formdata.append("status", isEnabled);
    formdata.append("marks ", marks);
    formdata.append("class_id ", class_id);
    console.log(formdata);
    axios
      .post(`${URI.uri}/AssignmentViewSet/`, formdata, option)
      .then((res) => {
        setIsLoading(false);
        if (res.status == 201) {
          Alert.alert("User", "The Assignment is created.");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        if ((err = 400)) {
          Alert.alert("Error", "Empty Fields fill all the fields");
        }
        console.log("error", err);
      });
  };
  console.log("the date is " + date);
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
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, backgroundColor: "white" }}
        >
          <View style={styles.container}>
            <Text style={styles.headingText}>Create Assignment</Text>

            <Text style={styles.text}>Title:</Text>

            <View style={styles.titleinputView}>
              <TextInput
                style={styles.titleinputText}
                placeholder="Title"
                placeholderTextColor="#003f5c"
                onChangeText={setTitle}
              />
            </View>

            <Text style={styles.text}>Details:</Text>

            <View style={styles.detailinputView}>
              <TextInput
                style={styles.detailinputText}
                placeholder="Details"
                placeholderTextColor="#003f5c"
                multiline={true}
                textAlignVertical="top"
                onChangeText={setDetail}
              />
            </View>
            <View style={styles.marksnswitch}>
              <View style={styles.marksContainer}>
                <Text style={styles.text2}>Marks:</Text>

                <View style={styles.marksinputView}>
                  <TextInput
                    style={styles.titleinputText}
                    placeholder="Marks"
                    placeholderTextColor="#003f5c"
                    onChangeText={setMarks}
                  />
                </View>
              </View>
              <View style={styles.switch}>
                {isEnabled ? (
                  <Text style={styles.text2}>OPEN</Text>
                ) : (
                  <Text style={styles.text2}>CLOSED</Text>
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

            <Text style={styles.text}>Date:</Text>

            <DatePickerr date={date} setDate={setDate} />
            {/* 
        <DateAndTimePicker
          datePicker={datePicker}
          setDatePicker={setDatePicker}
          date={date}
          setDate={setDate}
          setTimePicker={setTimePicker}
          timePicker={timePicker}
          time={time}
          setTime={setTime}
        /> */}
            <Text style={styles.text}>Assignment File: (Only PDF)</Text>

            <FilePicker file={file} setFile={setFile} />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </>
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
    //justifyContent: "space-between",
    width: "60%",
  },
  marksContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    height: 100,
    marginBottom: 20,
    //justifyContent: "center",
    padding: 15,
  },
  marksinputView: {
    width: "70%",
    backgroundColor: "#edece8",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  detailinputText: {
    height: 70,
    color: "black",
  },
  text: {
    color: "#003f5c",
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: "14%",
  },
  text2: {
    color: "#003f5c",
    fontWeight: "bold",
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
  switch: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
  },
});

export default TeacherCreateAssignmentScreen;
