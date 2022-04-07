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

function AddTeacherScreen() {
  const [name, setName] = useState(null);
  const [department, setDepartment] = useState(null);
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Add Teacher</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Teacher Name"
          placeholderTextColor="#003f5c"
          onChangeText={setName}
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
          placeholder="Subject"
          placeholderTextColor="#003f5c"
          onChangeText={setSubject}
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

export default AddTeacherScreen;
