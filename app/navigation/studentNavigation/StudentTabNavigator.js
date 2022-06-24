import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign, Ionicons } from "@expo/vector-icons";

import {
  StudentHomeStackNavigator,
  StudentNotificationStackNavigator,
  StudentProfileStackNavigator,
} from "./StudentStackNavigator";

// import FloatingButton from '../components/FloatingButton'

const Tab = createBottomTabNavigator();

const StudentBottomTabNavigator = () => {
  return (
    <View
      style={{ justifyContent: "flex-end", flex: 1, backgroundColor: "red" }}
    >
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "black",
          inactiveTintColor: "black",
          activeBackgroundColor: "white",
          inactiveBackgroundColor: "white",
          style: {
            backgroundColor: "#CE4418",
            paddingBottom: 3,
          },
        }}
        ScreenOptions={{
          showLabel: true,
          style: {
            //position: "absolute",
            //bottom: 25,
            //left: 20,
            //right: 20,
            elevation: 0,
            //borderRadius: 15,
            //height: 200,
            //backgroundColor: "gray"
          },
        }}
      >
        <Tab.Screen
          name="Student Dashboard"
          component={StudentHomeStackNavigator}
          options={{
            tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
            headerShown: false,
            title: "Dashboard",
          }}
        />
        {/* <Tab.Screen 
       name="Calender" 
       component={CalenderStackNavigator}
       options={{
         tabBarIcon: () => <AntDesign name="calendar" size={24} color="black" />
       }} 
      />
      <Tab.Screen 
       name="New Submission Foam"
       component={CreateProjectStackNavigator}
       options={{
         tabBarIcon: () => <FloatingButton/>
       }} 
      /> */}
        <Tab.Screen
          name="Student Notifications"
          component={StudentNotificationStackNavigator}
          options={{
            tabBarIcon: () => (
              <Ionicons name="newspaper-outline" size={24} color="black" />
            ),
            headerShown: false,
            title: "Notification",
          }}
        />
        <Tab.Screen
          name="Student Profile"
          component={StudentProfileStackNavigator}
          options={{
            tabBarIcon: () => (
              <Ionicons name="person-outline" size={24} color="black" />
            ),
            headerShown: false,
            title: "Profile",
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default StudentBottomTabNavigator;
