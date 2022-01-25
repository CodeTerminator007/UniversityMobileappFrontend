import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/login_screen";

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;