import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import StudentDashboardScreen from "../../screens/studentScreens/student_dashboard_screen";
import StudentNotificationScreen from "../../screens/studentScreens/student_notification_screen";
import StudentNotificationDetailScreen from "../../screens/studentScreens/student_notification_detail_screen";
import StudentProfileScreen from "../../screens/studentScreens/student_profile_screen";
import StudentTimetableScreen from "../../screens/studentScreens/student_timetable_screen";
import StudentEditTimetableScreen from "../../screens/studentScreens/student_edit_timetable_screen";
import StudentUploadAssignmentScreen from "../../screens/studentScreens/student_upload_assignment_screen";
import StudentQuizScreen from "../../screens/studentScreens/student_quiz_screen";
import StudentAttandanceScreen from "../../screens/studentScreens/student_attandance_screen";
import StudentResultScreen from "../../screens/studentScreens/student_result_screen";
import AllSubjectsForAssignmentScreen from "../../screens/studentScreens/all_subjects_for_assignment";
import StudentAllAssignmentsScreen from "../../screens/studentScreens/student_all_assignment_screen";
import StudentViewAssignmentScreen from "../../screens/studentScreens/student_view_assignment_screen";
import FileReader from "../../components/file_reader";
import StartQuizScreen from "../../screens/studentScreens/start_quiz_screen";
import QuizResultScreen from "../../screens/studentScreens/quiz_result_screen";
import AllSubjectsForQuizScreen from "../../screens/studentScreens/all_subjects_for_quiz";
import AllQuizScreen from "../../screens/studentScreens/all_quiz_screen";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    //backgroundColor: "#9AC4F8",
  },
  //headerTitleAlign: 'center',
};

const StudentHomeStackNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Student Dashboard"
        component={StudentDashboardScreen}
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

const StudentNotificationStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Student Notifications"
        component={StudentNotificationScreen}
      />
      <Stack.Screen
        name="Student Notifications Detail"
        component={StudentNotificationDetailScreen}
      />
    </Stack.Navigator>
  );
};

const StudentProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Student Profile"
        component={StudentProfileScreen}
        //options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const StudentTimetableStackNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Student Timetable"
        component={StudentTimetableScreen}
        options={{
          headerStyle: {
            //padding: 20
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Student Edit Timetable")}
              style={{ marginRight: 10 }}
            >
              <AntDesign name="edit" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Student Edit Timetable"
        component={StudentEditTimetableScreen}
      />
    </Stack.Navigator>
  );
};

const StudentUploadAssignmentStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="All Subjects For Assignment"
        component={AllSubjectsForAssignmentScreen}
      />
      <Stack.Screen
        name="Student All Assignment"
        component={StudentAllAssignmentsScreen}
      />
      <Stack.Screen
        name="View Assignment Screen"
        component={StudentViewAssignmentScreen}
      />
      <Stack.Screen
        name="Upload Assignment"
        component={StudentUploadAssignmentScreen}
      />
      <Stack.Screen name="File Reader" component={FileReader} />
    </Stack.Navigator>
  );
};

const StudentQuizStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Subjects For Quiz"
        component={AllSubjectsForQuizScreen}
        //options={{ headerShown: false }}
      />
      <Stack.Screen
        name="All Quiz"
        component={AllQuizScreen}
        //options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Start Quiz"
        component={StartQuizScreen}
        //options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quiz"
        component={StudentQuizScreen}
        //options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quiz Result"
        component={QuizResultScreen}
        //options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const StudentAttandanceStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Attandance"
        component={StudentAttandanceScreen}
        //options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const StudentResultStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="View Result"
        component={StudentResultScreen}
        //options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export {
  StudentHomeStackNavigator,
  StudentNotificationStackNavigator,
  StudentProfileStackNavigator,
  StudentTimetableStackNavigator,
  StudentUploadAssignmentStackNavigator,
  StudentQuizStackNavigator,
  StudentAttandanceStackNavigator,
  StudentResultStackNavigator,
};
