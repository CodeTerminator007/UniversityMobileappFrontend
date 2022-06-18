import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign, Ionicons } from "@expo/vector-icons";

import {
  AdminHomeStackNavigator,
  AdminPostNotificationStackNavigator,
  AdminProfileStackNavigator,
} from "./AdminStackNavigator";
import AdminPostEventScreen from "../../screens/adminScreens/admin_post_event_screen";

// import FloatingButton from '../components/FloatingButton'

const Tab = createBottomTabNavigator();

const AdminBottomTabNavigator = () => {
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
          name="Admin Dashboard"
          component={AdminHomeStackNavigator}
          options={{
            tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
            headerShown: false,
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
          name="Admin Post Event"
          component={AdminPostEventScreen}
          options={{
            tabBarIcon: () => (
              <Ionicons name="newspaper-outline" size={24} color="black" />
            ),
            headerShown: false,
          }}
        />
        {/* <Tab.Screen
          name="Admin Post Notification"
          component={AdminPostNotificationStackNavigator}
          options={{
            tabBarIcon: () => (
              <Ionicons name="newspaper-outline" size={24} color="black" />
            ),
            headerShown: false,
          }}
        /> */}
        <Tab.Screen
          name="Admin Profile"
          component={AdminProfileStackNavigator}
          options={{
            tabBarIcon: () => (
              <Ionicons name="person-outline" size={24} color="black" />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default AdminBottomTabNavigator;
