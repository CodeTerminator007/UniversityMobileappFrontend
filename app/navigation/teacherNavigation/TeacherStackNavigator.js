import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import TeacherDashboardScreen from "../../screens/teacherScreens/teacher_dashboard_screen";
import TeacherCreateQuizScreen from "../../screens/teacherScreens/teacher_create_quiz_screen";
import TeacherMarkAttandanceScreen from "../../screens/teacherScreens/teacher_mark_attandance_screen";
import TeacherTimetableScreen from "../../screens/teacherScreens/teacher_timetable_screen";
import TeacherEditTimetableScreen from "../../screens/teacherScreens/teacher_edit_timetable_screen";
import AllClassesScreen from "../../screens/teacherScreens/all_classes_screen";
import TeacherNotificationScreen from "../../screens/teacherScreens/teacher_notification_screen";
import TeacherNotificationDetailScreen from "../../screens/teacherScreens/teacher_notification_detail_screen";
import TeacherProfileScreen from "../../screens/teacherScreens/teacher_profile_screen";
import TeacherCreateAssignmentScreen from "../../screens/teacherScreens/teacher_create_assignment_screen";
import AllClassesForAssignmentScreen from "../../screens/teacherScreens/all_classes_for_assignment_screen";
import AllAssignmentsScreen from "../../screens/teacherScreens/all_assignments_screen";
import AssignmentDetailScreen from "../../screens/teacherScreens/assignment_detail_screen";
import SubmittedAssignmentsScreen from "../../screens/teacherScreens/submitted_assignments_screen";
import StudentAssignmentDetailScreen from "../../screens/teacherScreens/student_assignment_detail_screen";
import FileReader from "../../components/file_reader";
import AddQuestion from "../../screens/teacherScreens/add_question";
import AddOptions from "../../screens/teacherScreens/add_options";
import AllClassesForQuiz from "../../screens/teacherScreens/all_classes_for_quiz";
import AllSubjectsForResult from "../../screens/teacherScreens/all_subjects_for_result";
import AllClassesForResult from "../../screens/teacherScreens/all_classes_for_result";
import AllStudentsResult from "../../screens/teacherScreens/all_students_for_result";
import MarkResult from "../../screens/teacherScreens/mark_result";
import MarkResultScreen from "../../screens/teacherScreens/mark_result";

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
      <Stack.Screen
        name="T Mark Attandance"
        component={TeacherMarkAttandanceStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="T Create Assignment"
        component={TeacherCreateAssignmentStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="T Create Quiz"
        component={TeacherCreateQuizStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="T Timetable"
        component={TeacherTimetableStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="T Mark Result"
        component={TeacherMarkResultStackNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const TeacherCreateAssignmentStackNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="All Classes For Assignment"
        component={AllClassesForAssignmentScreen}
        options={{ title: "All Classes" }}
      />
      <Stack.Screen name="All Assignments" component={AllAssignmentsScreen} />
      <Stack.Screen
        name="Create Assignments"
        component={TeacherCreateAssignmentScreen}
      />
      <Stack.Screen
        name="Assignment Detail"
        component={AssignmentDetailScreen}
      />
      <Stack.Screen
        name="Submitted Assignments"
        component={SubmittedAssignmentsScreen}
        options={{
          headerStyle: {
            //padding: 20
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Assignment Detail")}
              style={{ marginLeft: 9 }}
            >
              <Ionicons name="create" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Student Assignment Detail"
        component={StudentAssignmentDetailScreen}
      />
      <Stack.Screen name="File Reader" component={FileReader} />
    </Stack.Navigator>
  );
};
const TeacherCreateQuizStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="All Classes Quiz"
        component={AllClassesForQuiz}
        options={{ title: "All Classes" }}
      />
      <Stack.Screen name="Create Quiz" component={TeacherCreateQuizScreen} />
      <Stack.Screen name="Add Question" component={AddQuestion} />
      <Stack.Screen name="Add Option" component={AddOptions} />
    </Stack.Navigator>
  );
};
const TeacherMarkAttandanceStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="All Classes Screen"
        component={AllClassesScreen}
        options={{ title: "All Classes" }}
      />
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
          title: "Timetable",
          headerStyle: {
            //padding: 20
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Teacher Edit Timetable")}
              style={{ marginRight: 10 }}
            >
              <MaterialCommunityIcons
                name="file-edit-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Teacher Edit Timetable"
        component={TeacherEditTimetableScreen}
        options={{ title: "Edit Timetable" }}
      />
    </Stack.Navigator>
  );
};
const TeacherNotificationStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Teacher Notifications"
        component={TeacherNotificationScreen}
        options={{ title: "Notification" }}
      />
      <Stack.Screen
        name="Teacher Notifications Detail"
        component={TeacherNotificationDetailScreen}
        options={{ title: "Notification Detail" }}
      />
    </Stack.Navigator>
  );
};

const TeacherProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Teacher Profile"
        component={TeacherProfileScreen}
        options={{ title: "Profile" }}
      />
    </Stack.Navigator>
  );
};

const TeacherMarkResultStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="All Classes Result"
        component={AllClassesForResult}
        options={{ title: "All Classes" }}
      />
      <Stack.Screen
        name="All Subjects Result"
        component={AllSubjectsForResult}
        options={{ title: "All Subjects" }}
      />
      <Stack.Screen
        name="All Students Result"
        component={AllStudentsResult}
        options={{ title: "All Students" }}
      />
      <Stack.Screen name="Mark Result" component={MarkResultScreen} />
    </Stack.Navigator>
  );
};

export {
  TeacherHomeStackNavigator,
  TeacherCreateAssignmentStackNavigator,
  TeacherCreateQuizStackNavigator,
  TeacherMarkAttandanceStackNavigator,
  TeacherTimetableStackNavigator,
  TeacherNotificationStackNavigator,
  TeacherProfileStackNavigator,
  TeacherMarkResultStackNavigator,
};
