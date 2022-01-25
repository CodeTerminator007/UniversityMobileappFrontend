import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { NotificationStackNavigator, ProfileStackNavigator, } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import { DrawerContent } from './DrawerContent';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="DrawerHome" component={TabNavigator} options={{headerShown: false}}/>
      <Drawer.Screen name="DrawerProfile" component={ProfileStackNavigator} options={{headerShown: false}}/>
      <Drawer.Screen name="DrawerContact Us" component={NotificationStackNavigator} options={{headerShown: false}} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;