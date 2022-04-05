import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import AdminDashboardScreen from "../../screens/adminScreens/admin_dashboard_screen";
import AddStudentScreen from "../../screens/adminScreens/add_student_screen";
import AddTeacherScreen from "../../screens/adminScreens/add_teacher_screen";
import AdminPostNotificationScreen from "../../screens/adminScreens/admin_post_notification_screen";
import AdminEditAttandanceScreen from "../../screens/adminScreens/admin_edit_attandance_screen";
import AdminMarkResultScreen from "../../screens/adminScreens/admin_mark_result_screen";

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

const AdminAddStudentStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Add Student" component={AddStudentScreen} />
    </Stack.Navigator>
  );
};

const AdminAddTeacherStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Add Teacher"
        component={AddTeacherScreen}
        //options={{ headerShown: false }}
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

export {
  AdminHomeStackNavigator,
  AdminAddStudentStackNavigator,
  AdminAddTeacherStackNavigator,
  AdminPostNotificationStackNavigator,
  AdminEditAttandanceStackNavigator,
  AdminMarkResultStackNavigator,
};
