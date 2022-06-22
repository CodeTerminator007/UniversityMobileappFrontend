import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import URI from "../../app/context/uri";
import { ActivityIndicator } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import {
  setToken,
  setName,
  setUserData,
  setId,
  setProfile_image,
} from "../redux/actions";
import { useNavigation } from "@react-navigation/native";

export default loginScreen = () => {
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);
  const [usernamecheck, setusernamecheck] = useState(null);
  const [passwordcheck, setpasswordcheck] = useState(null);
  const [errorcheck, seterrorcheck] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const navigation = useNavigation();

  useEffect(() => {
    console.log("state : ", state);
  }, [state]);

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    // if (!username) {
    //   setusernamecheck("Username is missing");
    // } else {
    //   setusernamecheck(null);
    // }
    // if (!passwordcheck) {
    //   setpasswordcheck("Password is missing");
    // } else {
    //   setpasswordcheck(null);
    // }
    if (username && password) {
      axios
        .post(`${URI.uri}/auth/login`, {
          username: username,
          password: password,
        })
        .then((res) => {
          dispatch(setUserData(res.data.user));
          dispatch(setId(res.data.user.id));
          dispatch(setToken(res.data.jwt.access));
          dispatch(setProfile_image(res.data.user.profile_image));
          const userData = res.data.user;
          const { is_admin, is_faculty, is_student } = userData;

          if (is_admin) {
            navigation.replace("Admin");
          } else if (is_student) {
            navigation.replace("Student");
          } else if (is_faculty) {
            navigation.replace("Teacher");
          }
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          if ((err = 401)) {
            seterrorcheck("The username password are not correct");
          }
        });
    } else {
      Alert.alert("Login", "Please provide required credential.");
    }
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
          <Image
            style={styles.logo}
            source={require("../assets/RipLogo.png")}
          />
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
          <Text style={styles.error}>{usernamecheck}</Text>
          <View style={styles.inputView}>
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Password..."
              placeholderTextColor="#003f5c"
              onChangeText={setPassword}
            />
          </View>
          <Text style={styles.error}>{passwordcheck}</Text>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>

          <Text style={styles.usernamepassword_wrong}>{errorcheck}</Text>

          <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
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
    //marginBottom: 20,
    marginTop: 15,
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
  error: {
    color: "red",
    fontSize: 14,
    //fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: "11%",
  },
  usernamepassword_wrong: {
    color: "red",
    fontSize: 14,
    //fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: "19%",
  },
});
