import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setToken, setName, setUserData, setId } from "../redux/actions";
import { useNavigation } from "@react-navigation/native";

export default loginScreen = () => {
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const navigation = useNavigation();

  useEffect(() => {
    console.log("state : ", state);
  }, [state]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios
      .post(`https://c673-121-52-152-106.ngrok.io/auth/login`, {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log("response ", res.data);
        dispatch(setUserData(res.data.user));
        dispatch(setId(res.data.user.id));
        dispatch(setToken(res.data.jwt.access));
        const userData = res.data.user;
        const { is_admin, is_faculty, is_student } = userData;

        if (is_admin) {
          // navigate to admin dashboard

          navigation.replace("Admin");

          console.log(
            "admin is logged it....................................."
          );
          // navigation.navigate("Student");
        } else if (is_student) {
          navigation.replace("Student");
          //navigate to student dashboard
        } else if (is_faculty) {
          navigation.replace("Teacher");
          //navigate to teacher
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/RipLogo.png")} />
      <Text style={styles.logoText}>Welcome</Text>
      <Text style={styles.logoText2}>Login to Continue</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="User Name..."
          placeholderTextColor="#003f5c"
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    //marginBottom:40,
  },
  logoText2: {
    color: "#185079",
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
  loginBtn: {
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
