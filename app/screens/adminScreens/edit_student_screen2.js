import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Alert } from "react-native";

import { useSelector } from "react-redux";
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
import DropDownPicker from "react-native-dropdown-picker";
import ImagePickerr from "../../components/image_picker";

function EditStudentScreen2({ navigation, route }) {
  const { id } = route.params;
  const { address1 } = route.params;
  const { the_class1 } = route.params;
  const { course_id1 } = route.params;
  const { coursename } = route.params;
  const { classname } = route.params;

  const [address, setAddress] = useState(address1);
  const [isloading, setIsLoading] = useState(false);

  const [courseopen, setCourseopen] = useState(false);
  const [course, setCourse] = useState(course_id1);
  const [courseslist, setCourselist] = useState([
    { label: "Course 1", value: "a" },
    { label: "Course 2", value: "b" },
    { label: "Course 3", value: "c" },
    { label: "Course 4", value: "d" },
  ]);

  const [classopen, setClassopen] = useState(false);
  const [classs, setClasss] = useState(the_class1);
  const [classlist, setClasslist] = useState([
    { label: "Class 1", value: "a" },
    { label: "Class 2", value: "b" },
    { label: "Class 3", value: "c" },
    { label: "Class 4", value: "d" },
    { label: "Class 5", value: "e" },
    { label: "Class 6", value: "f" },
    { label: "Class 7", value: "g" },
    { label: "Class 8", value: "h" },
    { label: "Class 9", value: "j" },
    { label: "Class 10", value: "k" },
  ]);

  const onCourseOpen = useCallback(() => {
    setClassopen(false);
  }, []);

  const onClassOpen = useCallback(() => {
    setCourseopen(false);
  }, []);
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const [data, setdata] = useState(null);
  const [classdata, setclassdata] = useState(null);

  const [isFetchingcourse, setIssFethincourse] = useState(false);
  const [isFetchingclasss, setIssFethinclass] = useState(false);

  const AuthStr = "Bearer ".concat(Token);
  const getCourses = () => {
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
      })

      .catch((error) => {
        console.log("error " + error);
      });
  };
  const getClasses = () => {
    axios
      .get(`${URI.uri}/Class`, {
        headers: { Authorization: AuthStr },
      })
      .then((response) => {
        setIssFethinclass(false);
        const h = response.data;
        const a = h.map((item) => {
          return {
            label: `${item.course_name} ${item.class_name} ${item.semaster} ${item.sec}`,
            value: item.id.toString(),
          };
        });
        setclassdata(a);
        setClasslist(a);
      })

      .catch((error) => {
        console.log("error " + error);
      });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("id", id);
    console.log("address", address);
    console.log("course", course);
    console.log("classs", classs);
    console.log("url " + `${URI.uri}/user/student/${id}/`);

    const option = {
      headers: { Authorization: AuthStr },
    };
    axios
      .put(
        `${URI.uri}/user/student/${id}/`,
        {
          user: id,
          address: address,
          course_id: course,
          the_class: classs,
        },
        option
      )
      .then((res) => {
        Alert.alert("Student", "The Student has been Updated.");
        navigation.navigate("All Students");
      })
      .catch((err) => {
        if ((err = 400)) {
          Alert.alert("Error", "Empty Fields fill all the fields");
        }
        console.log("error", err);
      });
  };
  useEffect(() => {
    if (!isFetchingcourse) {
      getCourses();
    }
    if (!isFetchingclasss) {
      getClasses();
    }
  }, [isFetchingcourse, isFetchingclasss]);
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: "white" }}
    >
      <View style={styles.container}>
        <Text style={styles.logoText}>Student Details</Text>

        <Text style={styles.text}>Address</Text>
        <View style={styles.inputView}>
          <TextInput
            //secureTextEntry
            style={styles.inputText}
            multiline={true}
            placeholder={address1}
            placeholderTextColor="#003f5c"
            onChangeText={setAddress}
          />
        </View>

        <Text style={styles.text}>Course</Text>
        <DropDownPicker
          placeholder={coursename}
          open={courseopen}
          onOpen={onCourseOpen}
          value={course}
          items={courseslist}
          setOpen={setCourseopen}
          setValue={setCourse}
          setItems={setCourselist}
          containerStyle={{
            width: "80%",
            height: 50,
            marginBottom: courseopen ? 175 : 20,
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

        <Text style={styles.text}>Class</Text>
        <DropDownPicker
          placeholder={classname}
          open={classopen}
          onOpen={onClassOpen}
          value={classs}
          items={classlist}
          setOpen={setClassopen}
          setValue={setClasss}
          setItems={setClasslist}
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
          <Text style={styles.loginText}>Update</Text>
        </TouchableOpacity>
      </View>
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

export default EditStudentScreen2;
