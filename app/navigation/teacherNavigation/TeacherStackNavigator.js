import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import TeacherDashboardScreen from "../../screens/teacherScreens/teacher_dashboard_screen";
import TeacherCreateAssignmentScreen from "../../screens/teacherScreens/teacher_create_assignment_screen";
import TeacherCreateQuizScreen from "../../screens/teacherScreens/teacher_create_quiz_screen";
import TeacherMarkAttandanceScreen from "../../screens/teacherScreens/teacher_mark_attandance_screen";
import TeacherTimetableScreen from "../../screens/teacherScreens/teacher_timetable_screen";
import TeacherEditTimetableScreen from "../../screens/teacherScreens/teacher_edit_timetable_screen";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    //backgroundColor: "#9AC4F8",
  },
  //headerTitleAlign: 'center',
};

const TeacherHomeStackNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Teacher Dashboard"
        component={TeacherDashboardScreen}
        options={{
          headerStyle: {
            //padding: 20
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              style={{ marginLeft: 9 }}
            >
              <FontAwesome5 name="bars" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const TeacherCreateAssignmentStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Create Assignment"
        component={TeacherCreateAssignmentScreen}
      />
    </Stack.Navigator>
  );
};
const TeacherCreateQuizStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Create Quiz" component={TeacherCreateQuizScreen} />
    </Stack.Navigator>
  );
};
const TeacherMarkAttandanceStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Mark Attandance"
        component={TeacherMarkAttandanceScreen}
      />
    </Stack.Navigator>
  );
};
const TeacherTimetableStackNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Teacher Timetable"
        component={TeacherTimetableScreen}
        options={{
          headerStyle: {
            //padding: 20
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Teacher Edit Timetable")}
              style={{ marginLeft: 9 }}
            >
              <Ionicons name="create" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Teacher Edit Timetable"
        component={TeacherEditTimetableScreen}
      />
    </Stack.Navigator>
  );
};
export {
  TeacherHomeStackNavigator,
  TeacherCreateAssignmentStackNavigator,
  TeacherCreateQuizStackNavigator,
  TeacherMarkAttandanceStackNavigator,
  TeacherTimetableStackNavigator,
};
