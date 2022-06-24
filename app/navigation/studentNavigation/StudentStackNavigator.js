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
import AllSubjectsForQuizResultScreen from "../../screens/studentScreens/subjects_for_quiz_result";
import QuizresultsScreen from "../../screens/studentScreens/quiz_results_screen";
import AllSubjectsForAssignmentResultScreen from "../../screens/studentScreens/subjects_for_assignment_results";
import AssignmentResultsScreen from "../../screens/studentScreens/assignment_results_screen";

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
      <Stack.Screen
        name="S Time Table"
        component={StudentTimetableStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="S Assignment"
        component={StudentUploadAssignmentStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="S Quiz"
        component={StudentQuizStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="S Attandance"
        component={StudentAttandanceStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="S Result"
        component={StudentResultStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="S Quiz Result"
        component={StudentQuizResultsStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="S Assignment Result"
        component={StudentAssignmentResultsStackNavigator}
        options={{ headerShown: false }}
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
        options={{ title: "Notification" }}
      />
      <Stack.Screen
        name="Student Notifications Detail"
        component={StudentNotificationDetailScreen}
        options={{ title: "Notification Detail" }}
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
        options={{ title: "Profile" }}
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
          title: "Timetable",
        }}
      />
      <Stack.Screen
        name="Student Edit Timetable"
        component={StudentEditTimetableScreen}
        options={{ title: "Edit Timetable" }}
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
        options={{ title: "All Subjects" }}
      />
      <Stack.Screen
        name="Student All Assignment"
        component={StudentAllAssignmentsScreen}
        options={{ title: "All Assignments" }}
      />
      <Stack.Screen
        name="View Assignment Screen"
        component={StudentViewAssignmentScreen}
        options={{ title: "View Assignment" }}
      />
      <Stack.Screen
        name="Upload Assignment"
        component={StudentUploadAssignmentScreen}
      />
      <Stack.Screen name="File Reader" component={FileReader} />
    </Stack.Navigator>
  );
};

const StudentAssignmentResultsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Subjects For Assignment Result"
        component={AllSubjectsForAssignmentResultScreen}
        options={{ title: "All Subjects" }}
      />
      <Stack.Screen
        name="Assignment Results Screen"
        component={AssignmentResultsScreen}
        options={{ title: "Assignments Result" }}
      />
    </Stack.Navigator>
  );
};

const StudentQuizStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Subjects For Quiz"
        component={AllSubjectsForQuizScreen}
        options={{ title: "All Subjects" }}
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
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quiz Result"
        component={QuizResultScreen}
        //options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const StudentQuizResultsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Subjects For Quiz Result"
        component={AllSubjectsForQuizResultScreen}
        options={{ title: "All Subjects" }}
      />
      <Stack.Screen
        name="Quiz Results Screen"
        component={QuizresultsScreen}
        options={{ title: "Quiz Results" }}
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
        options={{ title: "Result" }}
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
  StudentAssignmentResultsStackNavigator,
  StudentQuizStackNavigator,
  StudentQuizResultsStackNavigator,
  StudentAttandanceStackNavigator,
  StudentResultStackNavigator,
};
