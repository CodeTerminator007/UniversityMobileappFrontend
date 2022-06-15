import React, { useState, useEffect, useCallback, useSelector } from "react";
import axios from "axios";
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
import DropDownPicker from "react-native-dropdown-picker";
import ImagePickerr from "../../components/image_picker";

function AddStudentScreen2() {
  const [address, setAddress] = useState(null);

  const [courseopen, setCourseopen] = useState(false);
  const [course, setCourse] = useState(null);
  const [courseslist, setCourselist] = useState([
    { label: "Course 1", value: "a" },
    { label: "Course 2", value: "b" },
    { label: "Course 3", value: "c" },
    { label: "Course 4", value: "d" },
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
    setClassopen(false);
  }, []);

  const onClassOpen = useCallback(() => {
    setCourseopen(false);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: "white" }}
    >
      <View style={styles.container}>
        <Text style={styles.logoText}>Student Details</Text>

        <View style={styles.inputView}>
          <TextInput
            //secureTextEntry
            style={styles.inputText}
            multiline={true}
            placeholder="Address"
            placeholderTextColor="#003f5c"
            onChangeText={setAddress}
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.loginText}>Add</Text>
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
  },
});

export default AddStudentScreen2;
