import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  AdminAddStudentStackNavigator,
  AdminAddTeacherStackNavigator,
  AdminPostNotificationStackNavigator,
  AdminEditAttandanceStackNavigator,
  AdminMarkResultStackNavigator,
  AdminCoursesStackNavigator,
  AdminClassesStackNavigator,
  AdminSubjectsStackNavigator,
  AdminAllAdminsStackNavigator,
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
      <Drawer.Screen
        name="All Admins"
        component={AdminAllAdminsStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="All Teachers"
        component={AdminAddTeacherStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="All Students"
        component={AdminAddStudentStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="All Courses"
        component={AdminCoursesStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="All Classes"
        component={AdminClassesStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="All Subjects"
        component={AdminSubjectsStackNavigator}
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
