import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import TeacherProfile from "../../components/teacher_profile";
import {
  AntDesign,
  Fontisto,
  MaterialCommunityIcons,
  Foundation,
} from "@expo/vector-icons";

function TeacherDashboardScreen() {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TeacherProfile />
      <View style={styles.container}>
        <View style={styles.box}>
          <MaterialCommunityIcons
            name="cash-register"
            size={35}
            color="white"
          />
          <Text style={styles.text}>Registered Courses</Text>
        </View>
        <View style={styles.box}>
          <AntDesign name="clockcircleo" size={35} color="white" />
          <Text style={styles.text}>Lecture Schedule</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons
            name="source-branch"
            size={35}
            color="white"
          />
          <Text style={styles.text}>Scheme of Study</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.box}>
          <MaterialCommunityIcons
            name="notebook-outline"
            size={35}
            color="white"
          />
          <Text style={styles.text}>Account Book</Text>
        </View>
        <View style={styles.box}>
          <AntDesign name="calendar" size={35} color="white" />
          <Text style={styles.text}>Academic Calender</Text>
        </View>
        <View style={styles.box}>
          <AntDesign name="book" size={35} color="white" />
          <Text style={styles.text}>Grade Book</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.box}>
          <Foundation name="page-copy" size={35} color="white" />
          <Text style={styles.text}>Student DateSheet</Text>
        </View>
        <View style={styles.box}>
          <AntDesign name="setting" size={35} color="white" />
          <Text style={styles.text}>Student Servicesr</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons
            name="lightbulb-on-outline"
            size={35}
            color="white"
          />
          <Text style={styles.text}>Event News</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  box: {
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 10,
    height: 115,
    width: 115,
    backgroundColor: "#4981AA",
    borderRadius: 20,
  },
  text: {
    color: "white",
    //fontSize: 17,
    fontWeight: "bold",
  },
});
export default TeacherDashboardScreen;
