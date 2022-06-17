import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import TeacherProfile from "../../components/teacher_profile";
import {
  AntDesign,
  Fontisto,
  MaterialCommunityIcons,
  Foundation,
} from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DashboardButton from "../../components/dashboard_button";

function TeacherDashboardScreen({ navigation }) {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/background.jpeg")}
    >
      <View style={{ flex: 1, padding: 10 }}>
        <TeacherProfile />
        <View style={styles.container}>
          <View>
            <DashboardButton
              buttonName={"Mark Attandance"}
              onPress={() => navigation.navigate("T Mark Attandance")}
              icon={
                <Icon name="clipboard-text-outline" color={"white"} size={35} />
              }
            />
            <DashboardButton
              buttonName={"Time Table"}
              onPress={() => navigation.navigate("T Timetable")}
              icon={<Icon name="timetable" color={"white"} size={35} />}
            />
          </View>
          <View>
            <DashboardButton
              buttonName={"Create Assignment"}
              onPress={() => navigation.navigate("T Create Assignment")}
              icon={
                <Icon name="clipboard-text-outline" color={"white"} size={35} />
              }
            />
            <DashboardButton
              buttonName={"Mark Result"}
              onPress={() => {}}
              icon={
                <Icon
                  name="clipboard-pulse-outline"
                  color={"white"}
                  size={35}
                />
              }
            />
          </View>
          <View>
            <DashboardButton
              buttonName={"Create Quiz"}
              onPress={() => navigation.navigate("T Create Quiz")}
              icon={
                <Icon
                  name="clipboard-alert-outline"
                  color={"white"}
                  size={35}
                />
              }
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
});
export default TeacherDashboardScreen;
