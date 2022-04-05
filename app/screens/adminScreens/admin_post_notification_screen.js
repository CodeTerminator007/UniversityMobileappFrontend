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
// import { useSelector, useDispatch } from "react-redux";
// import { setToken, setName, setUserData } from "../redux/actions";
// import { useNavigation } from "@react-navigation/native";

function AdminPostNotificationScreen() {
  const [title, setTitle] = useState(null);
  const [detail, setDetail] = useState(null);
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
      <Text style={styles.headingText}>Post Notification</Text>
      <View style={styles.titleinputView}>
        <TextInput
          style={styles.titleinputText}
          placeholder="Title"
          placeholderTextColor="#003f5c"
          onChangeText={setTitle}
        />
      </View>
      <View style={styles.titleinputView}>
        <TextInput
          style={styles.titleinputText}
          placeholder="Picture"
          placeholderTextColor="#003f5c"
          onChangeText={setTitle}
        />
      </View>
      <View style={styles.detailinputView}>
        <TextInput
          style={styles.detailinputText}
          placeholder="Details"
          placeholderTextColor="#003f5c"
          multiline={true}
          textAlignVertical="top"
          onChangeText={setDetail}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>POST</Text>
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
  headingText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#185079",
    marginTop: 10,
    marginBottom: 40,
  },
  titleinputView: {
    width: "80%",
    backgroundColor: "#edece8",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  titleinputText: {
    height: 50,
    color: "black",
  },
  detailinputView: {
    width: "80%",
    backgroundColor: "#edece8",
    borderRadius: 25,
    height: 200,
    marginBottom: 20,
    //justifyContent: "center",
    padding: 20,
  },
  detailinputText: {
    height: 180,
    color: "black",
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
  buttonText: {
    color: "white",
  },
});
export default AdminPostNotificationScreen;
