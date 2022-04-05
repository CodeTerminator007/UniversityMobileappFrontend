// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// import SplashScreen from './app/screens/splash_screen';
// import LoginScreen from './app/screens/login_screen';
// import ProfileScreen from './app/screens/profile_screen';
// import NotificationScreen from './app/screens/notification_screen';
// import DashboardScreen from './app/screens/dashboard_screen';
// import NotificationDetailScreen from './app/screens/notification_detail_screen';
//import PostNotificationScreen from "./app/screens/teacherScreens/post_notification_screen";
import AddStudentScreen from "./app/screens/adminScreens/add_student_screen";
import AddTeacherScreen from "./app/screens/adminScreens/add_teacher_screen";
import AdminDrawerNavigator from "./app/navigation/adminNavigation/AdminDrawerNavigator";

import AuthStackNavigator from "./app/navigation/AuthStackNavigator";
import TeacherDrawerNavigator from "./app/navigation/teacherNavigation/TeacherDrawerNavigator";
// import {SecureStore} from 'expo';

import { Store } from "./app/redux/store";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import AdminBottomTabNavigator from "./app/navigation/adminNavigation/AdminTabNavigator";
import TeacherBottomTabNavigator from "./app/navigation/teacherNavigation/TeacherTabNavigator";
import { StudentDrawerContent } from "./app/navigation/studentNavigation/StudentDrawerContent";
import StudentDrawerNavigator from "./app/navigation/studentNavigation/StudentDrawerNavigator";
export default function App() {
  // const user_data = useSelector((state)=>state.userData)
  // const user_type = user_data && user_data.is_admin === true ? "isAdmin" : user_data.is_faculty ? "isTeacher" : "isStudent"
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <AuthStackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
