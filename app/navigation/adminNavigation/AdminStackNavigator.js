import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import AdminDashboardScreen from "../../screens/adminScreens/admin_dashboard_screen";
import AdminPostNotificationScreen from "../../screens/adminScreens/admin_post_notification_screen";
import AdminEditAttandanceScreen from "../../screens/adminScreens/admin_edit_attandance_screen";
import AdminMarkResultScreen from "../../screens/adminScreens/admin_mark_result_screen";
import AdminProfileScreen from "../../screens/adminScreens/admin_profile_screen";

import AdminAllClassesScreen from "../../screens/adminScreens/all_classes_screen";
import AddClassScreen from "../../screens/adminScreens/add_class_screen";
import EditClassScreen from "../../screens/adminScreens/edit_class_screen";

import AllCoursesScreen from "../../screens/adminScreens/all_courses_screen";
import AddCourseScreen from "../../screens/adminScreens/add_course_screen";
import EditCourseScreen from "../../screens/adminScreens/edit_course_screen";

import AllSubjectsScreen from "../../screens/adminScreens/all_subjects_screen";
import AddSubjectScreen from "../../screens/adminScreens/add_subject_screen";
import EditSubjectScreen from "../../screens/adminScreens/edit_subject_screen";

import AllAdminsScreen from "../../screens/adminScreens/all_admins_screen";
import AddAdmintScreen from "../../screens/adminScreens/add_admin_screen";
import EditAdmintScreen from "../../screens/adminScreens/edit_admin_screen";
import AllTeachersScreen from "../../screens/adminScreens/all_teachers_screen";
import AddTeacherScreen from "../../screens/adminScreens/add_teacher_screen";
import EditTeacherScreen from "../../screens/adminScreens/edit_teacher_screen";
import AllStudentsScreen from "../../screens/adminScreens/all_students_screen";
import AddStudentScreen from "../../screens/adminScreens/add_student_screen";
import EditStudentScreen from "../../screens/adminScreens/edit_student_screen";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    //backgroundColor: "#9AC4F8",
  },
  //headerTitleAlign: 'center',
};

const AdminHomeStackNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Admin Dashboard"
        component={AdminDashboardScreen}
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

const AdminPostNotificationStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Admin Post Notification"
        component={AdminPostNotificationScreen}
        //options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const AdminEditAttandanceStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Admin Edit Attandance"
        component={AdminEditAttandanceScreen}
        //options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const AdminMarkResultStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Admin Mark Result"
        component={AdminMarkResultScreen}
        //options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const AdminCoursesStackNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="All Courses"
        component={AllCoursesScreen}
        options={{
          headerStyle: {
            //padding: 20
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Add Course")}
              style={{ marginLeft: 9, marginRight: 9 }}
            >
              <Ionicons name="ios-add-circle-outline" size={30} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Add Course"
        component={AddCourseScreen}
        //options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Edit Course"
        component={EditCourseScreen}
        //options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const AdminClassesStackNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Admin All Classes"
        component={AdminAllClassesScreen}
        options={{
          headerStyle: {
            //padding: 20
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Add Class")}
              style={{ marginLeft: 9, marginRight: 9 }}
            >
              <Ionicons name="ios-add-circle-outline" size={30} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Add Class"
        component={AddClassScreen}
        //options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Edit Class"
        component={EditClassScreen}
        //options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const AdminSubjectsStackNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="All Subjects"
        component={AllSubjectsScreen}
        options={{
          headerStyle: {
            //padding: 20,
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Add Subject")}
              style={{ marginLeft: 9, marginRight: 9 }}
            >
              <Ionicons name="ios-add-circle-outline" size={30} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Add Subject"
        component={AddSubjectScreen}
        //options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Edit Subject"
        component={EditSubjectScreen}
        //options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const AdminAllAdminsStackNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="All Admins"
        component={AllAdminsScreen}
        options={{
          headerStyle: {
            //padding: 20,
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Add Admin")}
              style={{ marginLeft: 9, marginRight: 9 }}
            >
              <Ionicons name="ios-add-circle-outline" size={30} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Add Admin"
        component={AddAdmintScreen}
        //options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Edit Admin"
        component={EditAdmintScreen}
        //options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AdminAddStudentStackNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="All Students"
        component={AllStudentsScreen}
        options={{
          headerStyle: {
            //padding: 20,
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Add Student")}
              style={{ marginLeft: 9, marginRight: 9 }}
            >
              <Ionicons name="ios-add-circle-outline" size={30} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Add Student"
        component={AddStudentScreen}
        //options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Edit Student"
        component={EditStudentScreen}
        //options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AdminAddTeacherStackNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="All Teachers"
        component={AllTeachersScreen}
        options={{
          headerStyle: {
            //padding: 20,
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Add Teacher")}
              style={{ marginLeft: 9, marginRight: 9 }}
            >
              <Ionicons name="ios-add-circle-outline" size={30} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Add Teacher"
        component={AddTeacherScreen}
        //options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Edit Teacher"
        component={EditTeacherScreen}
        //options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AdminProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Admin Profile"
        component={AdminProfileScreen}
        //options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export {
  AdminHomeStackNavigator,
  AdminAddStudentStackNavigator,
  AdminAddTeacherStackNavigator,
  AdminPostNotificationStackNavigator,
  AdminEditAttandanceStackNavigator,
  AdminMarkResultStackNavigator,
  AdminCoursesStackNavigator,
  AdminClassesStackNavigator,
  AdminSubjectsStackNavigator,
  AdminProfileStackNavigator,
  AdminAllAdminsStackNavigator,
};
