import React, { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
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

function AddClassScreen() {
  const [classname, setClassname] = useState(null);
  const [classsection, setClasssection] = useState(null);
  const [semester, setSemester] = useState(null);
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState(null);
  const [courseslist, setCourselist] = useState([
    { label: "A", value: "a" },
    { label: "B", value: "b" },
    { label: "C", value: "c" },
    { label: "D", value: "d" },
  ]);

  const handleSubmit = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Add Class</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Class Name"
          placeholderTextColor="#003f5c"
          onChangeText={setClassname}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Class Section"
          placeholderTextColor="#003f5c"
          onChangeText={setClasssection}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Semester"
          placeholderTextColor="#003f5c"
          onChangeText={setSemester}
        />
      </View>
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
export default AddClassScreen;
