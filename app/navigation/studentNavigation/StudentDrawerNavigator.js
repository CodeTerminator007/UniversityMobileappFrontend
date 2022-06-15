import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  StudentNotificationStackNavigator,
  StudentProfileStackNavigator,
  StudentTimetableStackNavigator,
  StudentUploadAssignmentStackNavigator,
  StudentQuizStackNavigator,
  StudentAttandanceStackNavigator,
  StudentResultStackNavigator,
  StudentQuizResultsStackNavigator,
} from "./StudentStackNavigator";
import StudentTabNavigator from "./StudentTabNavigator";
import { StudentDrawerContent } from "./StudentDrawerContent";

const Drawer = createDrawerNavigator();

const StudentDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <StudentDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Student Dashboard"
        component={StudentTabNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Student Profile"
        component={StudentProfileStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Student Timetable"
        component={StudentTimetableStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Assignment"
        component={StudentUploadAssignmentStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Quiz"
        component={StudentQuizStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Quiz Results"
        component={StudentQuizResultsStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Attandance"
        component={StudentAttandanceStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="View Result"
        component={StudentResultStackNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default StudentDrawerNavigator;
