import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  TeacherCreateAssignmentStackNavigator,
  TeacherCreateQuizStackNavigator,
  TeacherMarkAttandanceStackNavigator,
  TeacherTimetableStackNavigator,
} from "./TeacherStackNavigator";
import TeacherBottomTabNavigator from "./TeacherTabNavigator";
import { TeacherDrawerContent } from "./TeacherDrawerContent";

const Drawer = createDrawerNavigator();

const TeacherDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <TeacherDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Teacher Dashboard"
        component={TeacherBottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Mark Attandance"
        component={TeacherMarkAttandanceStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Create Assignment"
        component={TeacherCreateAssignmentStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Create Quiz"
        component={TeacherCreateQuizStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Teacher Timetable"
        component={TeacherTimetableStackNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default TeacherDrawerNavigator;
