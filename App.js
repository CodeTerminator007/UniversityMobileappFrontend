import { Store } from "./app/redux/store";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import AuthStackNavigator from "./app/navigation/AuthStackNavigator";
import TeacherDrawerNavigator from "./app/navigation/teacherNavigation/TeacherDrawerNavigator";
import StudentDrawerNavigator from "./app/navigation/studentNavigation/StudentDrawerNavigator";
import TeacherMarkAttandanceScreen from "./app/screens/teacherScreens/teacher_mark_attandance_screen";
import AllClassesScreen from "./app/screens/teacherScreens/all_classes_screen";

export default function App() {
  // const user_data = useSelector((state)=>state.userData)
  // const user_type = user_data && user_data.is_admin === true ? "isAdmin" : user_data.is_faculty ? "isTeacher" : "isStudent"
  return (
    // <AllClassesScreen />
    <Provider store={Store}>
      <NavigationContainer>
        <AuthStackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
