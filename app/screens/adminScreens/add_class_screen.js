import React, { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Alert } from "react-native";

import DropDownPicker from "react-native-dropdown-picker";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import URI from "../../context/uri";

function AddClassScreen() {
  const [classname, setClassname] = useState(null);
  const [classsection, setClasssection] = useState(null);
  const [semester, setSemester] = useState(null);
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState(null);
  const [courseslist, setCourselist] = useState([{ label: "A", value: "a" }]);
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const [data, setdata] = useState(null);
  const [isFetchingcourse, setIssFethincourse] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const AuthStr = "Bearer ".concat(Token);
  const getCourses = () => {
    setIsLoading(true);
    axios
      .get(`${URI.uri}/course`, {
        headers: { Authorization: AuthStr },
      })
      .then((response) => {
        setIssFethincourse(false);
        const d = response.data;
        const g = d.map((item) => {
          return {
            label: item.course_name,
            value: item.id.toString(),
          };
        });
        setdata(g);
        setCourselist(g);
        setIsLoading(false);
      })

      .catch((error) => {
        setIsLoading(false);
        Alert.alert("Error", "Network Error");
        console.log("error " + error);
      });
  };
  useEffect(() => {
    if (!isFetchingcourse) {
      getCourses();
    }
  }, [isFetchingcourse]);

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const option = {
      headers: { Authorization: AuthStr },
    };
    axios
      .post(
        `${URI.uri}/Class/`,
        {
          class_name: classname,
          sec: classsection,
          semaster: semester,
          course_id: course,
        },
        option
      )
      .then((res) => {
        setIsLoading(false);
        if (res.status == 201) {
          Alert.alert("Class", "The Class has been created.");
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
          <Text style={styles.logoText}>Add Class</Text>

          <Text style={styles.text}>Class Name</Text>

          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Class Name"
              placeholderTextColor="#003f5c"
              onChangeText={setClassname}
            />
          </View>

          <Text style={styles.text}>Class Section</Text>

          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Class Section"
              placeholderTextColor="#003f5c"
              onChangeText={setClasssection}
            />
          </View>

          <Text style={styles.text}>Semester</Text>

          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Semester"
              placeholderTextColor="#003f5c"
              onChangeText={setSemester}
            />
          </View>

          <Text style={styles.text}>Course</Text>

          <DropDownPicker
            placeholder="Select Course"
            open={open}
            value={course}
            items={courseslist}
            setOpen={setOpen}
            setValue={setCourse}
            setItems={setCourselist}
            containerStyle={{
              width: "80%",
              height: 50,
              marginBottom: 20,
              justifyContent: "center",
              //padding: 20,
            }}
            style={{
              backgroundColor: "#edece8",
              borderColor: "#edece8",
              borderRadius: 25,
            }}
            textStyle={{
              color: "#003f5c",
              marginLeft: 10,
            }}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.loginText}>Add</Text>
          </TouchableOpacity>
        </View>
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
  logoText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#185079",
    marginTop: 10,
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#edece8",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  forgot: {
    color: "black",
    fontSize: 11,
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
  loginText: {
    color: "white",
  },
  text: {
    color: "#003f5c",
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: "14%",
  },
});
export default AddClassScreen;
