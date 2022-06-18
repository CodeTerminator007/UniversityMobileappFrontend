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
import AdminProfile from "../../components/admin_profile";
import {
  AntDesign,
  Fontisto,
  MaterialCommunityIcons,
  Foundation,
} from "@expo/vector-icons";
import DashboardButton from "../../components/dashboard_button";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function AdminDashboardScreen({ navigation }) {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/background.jpeg")}
    >
      <View style={{ flex: 1, padding: 10 }}>
        <AdminProfile />
        <View style={styles.container}>
          <View>
            <DashboardButton
              buttonName={"Admin"}
              onPress={() => navigation.navigate("A Add Admin")}
              icon={
                <Icon name="account-plus-outline" color={"white"} size={35} />
              }
            />
            <DashboardButton
              buttonName={"Course"}
              onPress={() => navigation.navigate("A Add Course")}
              icon={
                <Icon name="account-plus-outline" color={"white"} size={35} />
              }
            />
            <DashboardButton
              buttonName={"Post Notification"}
              onPress={() => navigation.navigate("A Post Notification")}
              icon={
                <Icon name="clipboard-text-outline" color={"white"} size={35} />
              }
            />
          </View>
          <View>
            <DashboardButton
              buttonName={"Teacher"}
              onPress={() => navigation.navigate("A Add Teacher")}
              icon={
                <Icon name="account-plus-outline" color={"white"} size={35} />
              }
            />
            <DashboardButton
              buttonName={"Class"}
              onPress={() => navigation.navigate("A Add Class")}
              icon={
                <Icon name="account-plus-outline" color={"white"} size={35} />
              }
            />
          </View>
          <View>
            <DashboardButton
              buttonName={"Student"}
              onPress={() => navigation.navigate("A Add Student")}
              icon={
                <Icon name="account-plus-outline" color={"white"} size={35} />
              }
            />
            <DashboardButton
              buttonName={"Subject"}
              onPress={() => navigation.navigate("A Add Subject")}
              icon={
                <Icon name="account-plus-outline" color={"white"} size={35} />
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
export default AdminDashboardScreen;
