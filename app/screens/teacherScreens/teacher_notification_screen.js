import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  FlatList,
  Alert,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import URI from "../../context/uri";
import ListItem from "../../components/ListItem";
import { useSelector } from "react-redux";
import axios from "axios";

function TeacherNotificationScreen({ navigation }) {
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const [data, setdata] = useState();
  const [isloading, setIsLoading] = useState(false);

  const getNotification = async () => {
    const AuthStr = "Bearer ".concat(Token);
    setIsLoading(true);
    axios
      .get(`${URI.uri}/announcement/`, {
        headers: { Authorization: AuthStr },
      })
      .then((response) => {
        // If request is good...
        setdata(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        Alert.alert("Error", "Network Error");
        console.log("error " + error);
      });
  };

  useEffect(() => {
    getNotification();
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
              <ListItem
                title={item.title}
                description={item.detail}
                url={item.image}
                onPress={() =>
                  navigation.navigate("Teacher Notifications Detail", {
                    ...item,
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
export default TeacherNotificationScreen;
