import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  AdminAddStudentStackNavigator,
  AdminAddTeacherStackNavigator,
  AdminPostNotificationStackNavigator,
  AdminEditAttandanceStackNavigator,
  AdminMarkResultStackNavigator,
} from "./AdminStackNavigator";
import AdminTabNavigator from "./AdminTabNavigator";
import { AdminDrawerContent } from "./AdminDrawerContent";

const Drawer = createDrawerNavigator();

const AdminDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <AdminDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Admin Dashboard"
        component={AdminTabNavigator}
        options={{ headerShown: false }}
      />
      {/* <Drawer.Screen
        name="DrawerProfile"
        component={StudentProfileStackNavigator}
        options={{ headerShown: false }}
      /> */}
      <Drawer.Screen
        name="Add Teacher"
        component={AdminAddTeacherStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Add Student"
        component={AdminAddStudentStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Admin Edit Attandance"
        component={AdminEditAttandanceStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Admin Mark Result"
        component={AdminMarkResultStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Admin Post Notification"
        component={AdminPostNotificationStackNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default AdminDrawerNavigator;
