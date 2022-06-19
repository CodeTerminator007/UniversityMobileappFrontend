import React, { useContext, useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import DropDownPicker from "react-native-dropdown-picker";
import { Alert } from "react-native";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import URI from "../../context/uri";
import { ActivityIndicator } from "react-native-paper";

function AddSubjectScreen() {
  const [subjectname, setSubjectname] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const [courseopen, setCourseopen] = useState(false);
  const [course, setCourse] = useState(null);
  const [courseslist, setCourselist] = useState([
    { label: "Course 1", value: "a" },
  ]);

  const [staffopen, setStaffopen] = useState(false);
  const [staff, setStaff] = useState(null);
  const [stafflist, setStafflist] = useState([
    { label: "Staff 1", value: "a" },
  ]);

  const [classopen, setClassopen] = useState(false);
  const [classs, setClasss] = useState(null);
  const [classlist, setClasslist] = useState([
    { label: "Class 1", value: "a" },
  ]);

  const onCourseOpen = useCallback(() => {
    setStaffopen(false);
    setClassopen(false);
  }, []);

  const onStaffOpen = useCallback(() => {
    setCourseopen(false);
    setClassopen(false);
  }, []);

  const onClassOpen = useCallback(() => {
    setCourseopen(false);
    setStaffopen(false);
  }, []);

  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const [data, setdata] = useState(null);
  const [isFetchingcourse, setIssFethincourse] = useState(false);
  const [isFetchingstaff, setIssFethinstaff] = useState(false);
  const [isFetchingclasses, setisFetchingclasses] = useState(false);

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
  const getstaff = () => {
    axios
      .get(`${URI.uri}/user/faculty/`, {
        headers: { Authorization: AuthStr },
      })
      .then((response) => {
        setIssFethinstaff(false);
        const e = response.data;
        const f = e.map((item) => {
          return {
            label: item.username,
            value: item.user.toString(),
          };
        });
        setStafflist(f);
      })

      .catch((error) => {
        console.log("error " + error);
      });
  };
  const getclasses = () => {
    axios
      .get(`${URI.uri}/Class/`, {
        headers: { Authorization: AuthStr },
      })
      .then((response) => {
        setisFetchingclasses(false);
        const l = response.data;
        const s = l.map((item) => {
          return {
            label: `${item.class_name} ${item.semaster} sec ${item.sec}`,
            value: item.id.toString(),
          };
        });
        setClasslist(s);
      })

      .catch((error) => {
        console.log("error " + error);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    if (!isFetchingcourse) {
      getCourses();
      setIsLoading(false);
    }
    setIsLoading(true);
    if (!isFetchingstaff) {
      getstaff();
      setIsLoading(false);
    }
    setIsLoading(true);
    if (!isFetchingclasses) {
      getclasses();
      setIsLoading(false);
    }
  }, [isFetchingcourse, isFetchingstaff, isFetchingclasses]);

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const option = {
      headers: { Authorization: AuthStr },
    };
    axios
      .post(
        `${URI.uri}/Subject/`,
        {
          subject_name: subjectname,
          course_id: course,
          staff_id: staff,
          class_id: classs,
        },
        option
      )
      .then((res) => {
        setIsLoading(false);
        if (res.status == 201) {
          Alert.alert("Subject", "The Subject has been created.");
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
          <Text style={styles.logoText}>Add Subject</Text>

          <Text style={styles.text}>Subject Name</Text>

          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Subject Name"
              placeholderTextColor="#003f5c"
              onChangeText={setSubjectname}
            />
          </View>

          <Text style={styles.text}>Course</Text>

          <DropDownPicker
            placeholder="Select Course"
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

          <Text style={styles.text}>Staff</Text>

          <DropDownPicker
            placeholder="Select Staff"
            open={staffopen}
            onOpen={onStaffOpen}
            value={staff}
            items={stafflist}
            setOpen={setStaffopen}
            setValue={setStaff}
            setItems={setStafflist}
            containerStyle={{
              width: "80%",
              height: 50,
              marginBottom: staffopen ? 175 : 20,
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
            placeholder="Select Class"
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

export default AddSubjectScreen;
