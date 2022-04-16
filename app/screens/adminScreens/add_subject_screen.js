import React, { useContext, useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import DropDownPicker from "react-native-dropdown-picker";
import { Alert } from 'react-native';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

function AddSubjectScreen() {

  const [subjectname, setSubjectname] = useState(null);

  const [courseopen, setCourseopen] = useState(false);
  const [course, setCourse] = useState(null);
  const [courseslist, setCourselist] = useState([
    { label: "Course 1", value: "a" },
    { label: "Course 2", value: "b" },
    { label: "Course 3", value: "c" },
    { label: "Course 4", value: "d" },
  ]);

  const [staffopen, setStaffopen] = useState(false);
  const [staff, setStaff] = useState(null);
  const [stafflist, setStafflist] = useState([
    { label: "Staff 1", value: "a" },
    { label: "Staff 2", value: "b" },
    { label: "Staff 3", value: "c" },
    { label: "Staff 4", value: "d" },
  ]);

  const [classopen, setClassopen] = useState(false);
  const [classs, setClasss] = useState(null);
  const [classlist, setClasslist] = useState([
    { label: "Class 1", value: "a" },
    { label: "Class 2", value: "b" },
    { label: "Class 3", value: "c" },
    { label: "Class 4", value: "d" },
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
  const [isFetchingcourse,setIssFethincourse]=useState(false)
  const [isFetchingstaff,setIssFethinstaff]=useState(false)
  const [isFetchingclasses,setisFetchingclasses]=useState(false)

  const AuthStr = "Bearer ".concat(Token);
  const getCourses =()=>{
    axios
    .get(
      `https://00c8-2400-adc7-13d-5200-abf-641e-89f1-cfde.ngrok.io/course`,
      {
        headers: { Authorization: AuthStr },
      }
    )
    .then((response) => {
      setIssFethincourse(false)
      const d = response.data;
      const g = d.map((item) => {
        return {
          label: item.course_name,
          value: item.id.toString(),
        };
      });
      setdata(g);
      setCourselist(g)
    })

    .catch((error) => {
      console.log("error " + error);
    });  
  }
  const getstaff =()=>{
    axios
    .get(
      `https://00c8-2400-adc7-13d-5200-abf-641e-89f1-cfde.ngrok.io/user/faculty/`,
      {
        headers: { Authorization: AuthStr },
      }
    )
    .then((response) => {
      setIssFethinstaff(false)
      const e = response.data;
      const f = e.map((item) => {
        return {
          label: item.username,
          value: item.user.toString(),
        };
      });
      setStafflist(f)
    })

    .catch((error) => {
      console.log("error " + error);
    });  
  }
  const getclasses =()=>{
    axios
    .get(
      `https://00c8-2400-adc7-13d-5200-abf-641e-89f1-cfde.ngrok.io/Class/`,
      {
        headers: { Authorization: AuthStr },
      }
    )
    .then((response) => {
      setisFetchingclasses(false)
      const l = response.data;
      const s = l.map((item) => {
        return {
          label: `${item.class_name} ${item.semaster} sec ${item.sec}`,
          value: item.id.toString(),
        };
      });
      setClasslist(s)
    })

    .catch((error) => {
      console.log("error " + error);
    });  
  }


  useEffect(()=>{
    if(!isFetchingcourse){
      getCourses()
    }
    if(!isFetchingstaff){
      getstaff()
    }
    if(!isFetchingclasses){
      getclasses()
    }
  
  },[isFetchingcourse,isFetchingstaff,isFetchingclasses])


  const handleSubmit = async(event) => {
    event.preventDefault();
    const option = {
      headers: { Authorization: AuthStr },
    };
    axios
      .post(
        `https://00c8-2400-adc7-13d-5200-abf-641e-89f1-cfde.ngrok.io/Subject/`,
        {
          subject_name: subjectname,
          course_id:course ,
          staff_id: staff,
          class_id:classs ,
        },
        option
      )
      .then((res) => {
        if(res.status==201){
          Alert.alert("Subject","The Subject has been created.")
        }
      })
      .catch((err) => {
        if(err=400){
          Alert.alert("Error","Empty Fields fill all the fields")
        }
        console.log("error", err);
      });

  };
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Add Subject</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Subject Name"
          placeholderTextColor="#003f5c"
          onChangeText={setSubjectname}
        />
      </View>
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
});

export default AddSubjectScreen;
