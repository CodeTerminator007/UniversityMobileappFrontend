import { Store } from "./app/redux/store";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import AuthStackNavigator from "./app/navigation/AuthStackNavigator";
import TeacherDrawerNavigator from "./app/navigation/teacherNavigation/TeacherDrawerNavigator";
import StudentDrawerNavigator from "./app/navigation/studentNavigation/StudentDrawerNavigator";
import TeacherMarkAttandanceScreen from "./app/screens/teacherScreens/teacher_mark_attandance_screen";
import AllClassesScreen from "./app/screens/teacherScreens/all_classes_screen";
import StudentAttandanceScreen from "./app/screens/studentScreens/student_attandance_screen";
import registerNNPushToken from "native-notify";

export default function App() {
  registerNNPushToken(2899, "S0A9cKzQJtppEYoM5j6dMo");
  // const user_data = useSelector((state)=>state.userData)
  // const user_type = user_data && user_data.is_admin === true ? "isAdmin" : user_data.is_faculty ? "isTeacher" : "isStudent"
  return (
    //<StudentAttandanceScreen />
    <Provider store={Store}>
      <NavigationContainer>
        <AuthStackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
