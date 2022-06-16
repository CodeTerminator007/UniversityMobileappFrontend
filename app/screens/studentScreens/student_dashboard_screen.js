import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import StudentProfile from "../../components/student_profile";
import {
  AntDesign,
  Fontisto,
  MaterialCommunityIcons,
  Foundation,
} from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { useNavigation } from "@react-navigation/native";

import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import DashboardButton from "../../components/dashboard_button";

function StudentDashboardScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/background.jpeg")}
    >
      <View style={{ flex: 1, padding: 10 }}>
        <StudentProfile />
        <View style={styles.container}>
          <View>
            <DashboardButton
              buttonName={"Assignment"}
              onPress={() => navigation.navigate("S Assignment")}
              icon={
                <Icon name="clipboard-text-outline" color={"white"} size={35} />
              }
            />
            <DashboardButton
              buttonName={"Time Table"}
              onPress={() => navigation.navigate("S Time Table")}
              icon={<Icon name="timetable" color={"white"} size={35} />}
            />
            <DashboardButton
              buttonName={"Assignment Results"}
              onPress={() => navigation.navigate("S Assignment Result")}
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
              buttonName={"Attandance"}
              onPress={() => navigation.navigate("S Attandance")}
              icon={
                <Icon name="clipboard-list-outline" color={"white"} size={35} />
              }
            />
            <DashboardButton
              buttonName={"Result"}
              onPress={() => navigation.navigate("S Result")}
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
              buttonName={"Quiz"}
              onPress={() => navigation.navigate("S Quiz")}
              icon={
                <Icon
                  name="clipboard-alert-outline"
                  color={"white"}
                  size={35}
                />
              }
            />
            <DashboardButton
              buttonName={"Quiz Results"}
              onPress={() => navigation.navigate("S Quiz Result")}
              icon={
                <Icon
                  name="clipboard-pulse-outline"
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
export default StudentDashboardScreen;
