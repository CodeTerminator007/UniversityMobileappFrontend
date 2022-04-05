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
// import { useSelector, useDispatch } from "react-redux";
// import { setToken, setName, setUserData } from "../redux/actions";
// import { useNavigation } from "@react-navigation/native";

function AddStudentScreen() {
  const [name, setName] = useState(null);
  const [rollno, setRollno] = useState(null);
  const [age, setAge] = useState(null);
  const [department, setDepartment] = useState(null);
  const [clas, setClas] = useState(null);
  const [section, setSection] = useState(null);

  //   const dispatch = useDispatch();
  //   const state = useSelector((state) => state);
  //   const navigation = useNavigation();

  //   useEffect(() => {
  //     console.log("state : ", state);
  //   }, [state]);

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();

  //     axios
  //       .post(`https://547c-119-156-31-204.ngrok.io/auth/login`, {
  //         username: username,
  //         password: password,
  //       })
  //       .then((res) => {
  //         console.log("response ", res.data);
  //         dispatch(setUserData(res.data.user));
  //         dispatch(setToken(res.data.jwt.access));
  //         const userData = res.data.user;
  //         const { is_admin, is_faculty, is_student } = userData;

  //         if (is_admin) {
  //           // navigate to admin dashboard

  //           navigation.replace("Student");

  //           console.log(
  //             "admin is logged it....................................."
  //           );
  //           // navigation.navigate("Student");
  //         } else if (is_student) {
  //           //navigate to student dashboard
  //         } else if (is_faculty) {
  //           //navigate to teacher
  //         }
  //       })
  //       .catch((err) => {
  //         console.log("error", err);
  //       });
  //   };
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
