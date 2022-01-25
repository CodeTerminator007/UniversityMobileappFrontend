import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign, Ionicons } from '@expo/vector-icons'; 

import { HomeStackNavigator, NotificationStackNavigator, ProfileStackNavigator, } from "./StackNavigator";

// import FloatingButton from '../components/FloatingButton'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <View style={{ justifyContent: "flex-end", flex: 1, backgroundColor: "red" }}>
    <Tab.Navigator
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
       }
     }}
    >
      <Tab.Screen 
       name="TabHome" 
       component={HomeStackNavigator} 
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
       name="TabNotifications" 
       component={NotificationStackNavigator} 
       options={{
         tabBarIcon: () => <Ionicons name="newspaper-outline" size={24} color="black" />,
         headerShown: false,
       }}
      />
      <Tab.Screen 
       name="TabProfile" 
       component={ProfileStackNavigator}
       options={{
         tabBarIcon: () => <Ionicons name="person-outline" size={24} color="black" />,
         headerShown: false,
       }} 
      />
    </Tab.Navigator>
    </View>
  );
};

export default BottomTabNavigator;