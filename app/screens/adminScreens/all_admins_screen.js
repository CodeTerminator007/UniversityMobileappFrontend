import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import URI from "../../context/uri";
import { ActivityIndicator } from "react-native-paper";
import ClassListItem from "../../components/class_list_item";
import { useSelector } from "react-redux";
import axios from "axios";

function AllAdminsScreen({ navigation }) {
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const [data, setdata] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const AuthStr = "Bearer ".concat(Token);

  const getAdmins = async () => {
    setIsLoading(true);
    axios
      .get(`${URI.uri}/user/admin/`, {
        headers: { Authorization: AuthStr },
      })
      .then((response) => {
        // If request is good...
        const d = response.data;
        console.log(d);
        const g = d.map((item) => {
          return {
            id: item.user,
            title: `${item.first_name} ${item.last_name}`,
            username: item.username,
            first_name: item.first_name,
            last_name: item.last_name,
            email: item.email,
            phone_number1: item.phone_number1,
            phone_number2: item.phone_number2,
            gender: item.gender,
            last_education_degree: item.last_education_degree,
            Dob: item.Dob,
            cnic: item.cnic,
            profile_image: item.profile_image,
          };
        });
        setdata(g);
        setIsLoading(false);
      })

      .catch((error) => {
        setIsLoading(false);
        Alert.alert("Error", "Network Error");
        console.log("error " + error);
      });
  };

  useEffect(() => {
    getAdmins();
  }, []);
  return (
    <>
      {isloading ? (
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <ActivityIndicator animating={true} size={40} />
        </View>
      ) : (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={data}
            keyExtractor={(data) => data.id.toString()}
            renderItem={({ item }) => (
              <ClassListItem
                title={item.title}
                onPress={() =>
                  navigation.navigate("Edit Admin", {
                    id: item.id,
                    username1: item.username,
                    first_name: item.first_name,
                    last_name: item.last_name,
                    email1: item.email,
                    phone_number1: item.phone_number1,
                    phone_number2: item.phone_number2,
                    gender1: item.gender,
                    last_education_degree: item.last_education_degree,
                    Dob: item.Dob,
                    cnic1: item.cnic,
                    profile_image: item.profile_image,
                  })
                }
              />
            )}
          />
        </SafeAreaView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    //paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
});

export default AllAdminsScreen;
