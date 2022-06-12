import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
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
import {
  setToken,
  setName,
  setUserData,
  setId,
  setProfile_image,
} from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import { AuthContext } from "../context/Context";

export function StudentDrawerContent(props) {
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const profile_image = `https://00c8-2400-adc7-13d-5200-abf-641e-89f1-cfde.ngrok.io${stateData.userReducer.profile_image}`;
  const name = stateData.userReducer.userData.username;
  const paperTheme = useTheme();
  const dispatch = useDispatch();

  // const { signOut } = React.useContext(AuthContext);
  const signOut = () => {
    dispatch(setName(""));
    dispatch(setUserData(""));
    dispatch(setId(""));
    dispatch(setToken(""));
    dispatch(setProfile_image(""));
    props.navigation.navigate("LoginScreen");
  };

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
                <Title
                  style={styles.title}
                >{`${stateData.userReducer.userData.first_name} ${stateData.userReducer.userData.last_name}`}</Title>
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
              label="Home"
              onPress={() => {
                props.navigation.navigate("Student Dashboard");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate("Student Profile");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="timetable" color={color} size={size} />
              )}
              label="Timetable"
              onPress={() => {
                props.navigation.navigate("Student Timetable");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="clipboard-text-outline" color={color} size={size} />
              )}
              label="Assignment"
              onPress={() => {
                props.navigation.navigate("Assignment");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="clipboard-alert-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Quiz"
              onPress={() => {
                props.navigation.navigate("Quiz");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="clipboard-list-outline" color={color} size={size} />
              )}
              label="Attandance"
              onPress={() => {
                props.navigation.navigate("Attandance");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="clipboard-pulse-outline"
                  color={color}
                  size={size}
                />
              )}
              label="View Result"
              onPress={() => {
                props.navigation.navigate("View Result");
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
          onPress={signOut}
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
