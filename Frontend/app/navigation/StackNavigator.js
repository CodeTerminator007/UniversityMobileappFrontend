import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { createStackNavigator } from "@react-navigation/stack";

import DashboardScreen from "../screens/dashboard_screen";
import NotificationScreen from "../screens/notification_screen";
import ProfileScreen from "../screens/profile_screen";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    //backgroundColor: "#9AC4F8",
  },
  //headerTitleAlign: 'center',
};

const HomeStackNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen 
            name="Dashboard" 
            component={DashboardScreen}
            options={{
              headerStyle: {
                //padding: 20
              },
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={{marginLeft:9}}>
                <FontAwesome5 name="bars" size={24} color="black"  />
                </TouchableOpacity>
                ),
              }}  
      />
    </Stack.Navigator>
  );
}

const NotificationStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Notifications" component={NotificationScreen} />
      </Stack.Navigator>
    );
  }

  const ProfileStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    );
  }



export { HomeStackNavigator, NotificationStackNavigator, ProfileStackNavigator, };