import React, { useContext, useState, useEffect } from "react";
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

function AddStudentScreen() {
  const [name, setName] = useState(null);
  const [rollno, setRollno] = useState(null);
  const [age, setAge] = useState(null);
  const [department, setDepartment] = useState(null);
  const [clas, setClas] = useState(null);
  const [section, setSection] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Add Student</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Student Name"
          placeholderTextColor="#003f5c"
          onChangeText={setName}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Student Roll No."
          placeholderTextColor="#003f5c"
          onChangeText={setRollno}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Age"
          placeholderTextColor="#003f5c"
          onChangeText={setAge}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Department"
          placeholderTextColor="#003f5c"
          onChangeText={setDepartment}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Class"
          placeholderTextColor="#003f5c"
          onChangeText={setClas}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Section"
          placeholderTextColor="#003f5c"
          onChangeText={setSection}
        />
      </View>

      <TouchableOpacity style={styles.button}>
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

export default AddStudentScreen;
