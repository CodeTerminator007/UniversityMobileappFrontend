import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import { AuthContext } from "../context/Context";

export function TeacherDrawerContent(props) {
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const profile_image = `https://00c8-2400-adc7-13d-5200-abf-641e-89f1-cfde.ngrok.io${stateData.userReducer.profile_image}`;
  const name = stateData.userReducer.userData.username;
  const paperTheme = useTheme();

  // const { signOut } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: profile_image,
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>
                  {stateData.userReducer.userData.first_name}{" "}
                  {stateData.userReducer.userData.last_name}
                </Title>
                <Caption style={styles.caption}>
                  {stateData.userReducer.userData.email}
                </Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Dashboard"
              onPress={() => {
                props.navigation.navigate("Teacher Dashboard");
              }}
            />
            {/* <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate("Profile");
              }}
            /> */}
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Mark Attandance"
              onPress={() => {
                props.navigation.navigate("Attandance");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="cellphone" color={color} size={size} />
              )}
              label="Create Assignment"
              onPress={() => {
                props.navigation.navigate("Create Assignment");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-plus-outline" color={color} size={size} />
              )}
              label="Create Quiz"
              onPress={() => {
                props.navigation.navigate("Create Quiz");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="account-supervisor-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Teacher Timetable"
              onPress={() => {
                props.navigation.navigate("Teacher Timetable");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          // onPress={() => {signOut()}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 12,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
});
