import React from "react";
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
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import { AuthContext } from "../context/Context";

export function AdminDrawerContent(props) {
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
                  uri: "https://bootdey.com/img/Content/avatar/avatar7.png",
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>Ali</Title>
                <Caption style={styles.caption}>abc@gmail.com</Caption>
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
                props.navigation.navigate("Admin Dashboard");
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
                <Icon name="account-plus-outline" color={color} size={size} />
              )}
              label="Add Teacher"
              onPress={() => {
                props.navigation.navigate("Add Teacher");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-plus-outline" color={color} size={size} />
              )}
              label="Add Student"
              onPress={() => {
                props.navigation.navigate("Add Student");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-plus-outline" color={color} size={size} />
              )}
              label="All Courses"
              onPress={() => {
                props.navigation.navigate("All Courses");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-plus-outline" color={color} size={size} />
              )}
              label="All Classes"
              onPress={() => {
                props.navigation.navigate("All Classes");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-plus-outline" color={color} size={size} />
              )}
              label="All Subjects"
              onPress={() => {
                props.navigation.navigate("All Subjects");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-plus-outline" color={color} size={size} />
              )}
              label="Edit Attandance"
              onPress={() => {
                props.navigation.navigate("Admin Edit Attandance");
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
              label="Mark Result"
              onPress={() => {
                props.navigation.navigate("Admin Mark Result");
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
              label="Post Notification"
              onPress={() => {
                props.navigation.navigate("Admin Post Notification");
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
    fontSize: 14,
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
