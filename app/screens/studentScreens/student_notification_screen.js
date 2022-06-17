import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import URI from "../../context/uri";
import ListItem from "../../components/ListItem";
import { useSelector } from "react-redux";
import axios from "axios";
import { ActivityIndicator } from "react-native-paper";

function StudentNotificationScreen({ navigation }) {
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const [data, setdata] = useState();
  const [isloading, setIsLoading] = useState(false);

  const AuthStr = "Bearer ".concat(Token);
  const getNotification = async () => {
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
        console.log("error " + error);
      });
  };
  useEffect(() => {
    getNotification();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
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
        <View>
          {data && (
            <FlatList
              data={data}
              keyExtractor={(data) => data.id.toString()}
              renderItem={({ item }) => (
                <ListItem
                  title={item.title}
                  description={item.detail}
                  url={item.image}
                  onPress={() =>
                    navigation.navigate("Student Notifications Detail", {
                      ...item,
                    })
                  }
                />
              )}
            />
          )}
        </View>
      )}
    </SafeAreaView>
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
export default StudentNotificationScreen;
