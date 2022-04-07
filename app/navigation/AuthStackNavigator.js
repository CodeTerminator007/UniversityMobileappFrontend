import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/login_screen";
import SplashScreen from "../screens/splash_screen";
import AdminDrawerNavigator from "./adminNavigation/AdminDrawerNavigator";
import TeacherDrawerNavigator from "./teacherNavigation/TeacherDrawerNavigator";
import StudentDrawerNavigator from "./studentNavigation/StudentDrawerNavigator";

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Admin"
        component={AdminDrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Teacher"
        component={TeacherDrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Student"
        component={StudentDrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
