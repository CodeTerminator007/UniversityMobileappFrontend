// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

// import SplashScreen from './app/screens/splash_screen';
// import LoginScreen from './app/screens/login_screen';
// import ProfileScreen from './app/screens/profile_screen';
// import NotificationScreen from './app/screens/notification_screen';
// import DashboardScreen from './app/screens/dashboard_screen';
// import NotificationDetailScreen from './app/screens/notification_detail_screen';

import AuthStackNavigator from './app/navigation/AuthStackNavigator';
import DrawerNavigator from './app/navigation/DrawerNavigator';
// import { HomeStackNavigator } from './app/navigation/StackNavigator';
// import BottomTabNavigator from './app/navigation/TabNavigator';
// import {SecureStore} from 'expo';

import { UserContext } from './app/context/user_context';
import { useState } from 'react/cjs/react.development';
import { useContext } from 'react';
export default function App() {


  return (
      <NavigationContainer>
          <AuthStackNavigator/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
