import React, { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Alert } from "react-native";

import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";

function AdminPostNotificationScreen() {
  const [title, setTitle] = useState(null);
  const [detail, setDetail] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    axios
      .post(`https://app.nativenotify.com/api/notification`, {
        appId: 2899,
        appToken: "S0A9cKzQJtppEYoM5j6dMo",
        title: title,
        body: detail,
        dateSent: new Date(Date.now()),
        pushData: { yourProperty: "yourPropertyValue" },
      })
      .then((res) => {
        setIsLoading(false);
        if (res.status == 201) {
          Alert.alert("Announcement", "The Announcement has been Posted.");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        if ((err = 400)) {
          Alert.alert("Error", "Empty Fields fill all the fields");
        }
        console.log("error", err);
      });
  };

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
        <View style={styles.container}>
          <Text style={styles.headingText}>Post Notification</Text>
          <View style={styles.titleinputView}>
            <TextInput
              style={styles.titleinputText}
              placeholder="Title"
              placeholderTextColor="#003f5c"
              onChangeText={setTitle}
            />
          </View>
          <View style={styles.detailinputView}>
            <TextInput
              style={styles.detailinputText}
              placeholder="Details"
              placeholderTextColor="#003f5c"
              multiline={true}
              textAlignVertical="top"
              onChangeText={setDetail}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>POST</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#185079",
    marginTop: 10,
    marginBottom: 40,
  },
  titleinputView: {
    width: "80%",
    backgroundColor: "#edece8",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  titleinputText: {
    height: 50,
    color: "black",
  },
  detailinputView: {
    width: "80%",
    backgroundColor: "#edece8",
    borderRadius: 25,
    height: 200,
    marginBottom: 20,
    //justifyContent: "center",
    padding: 20,
  },
  detailinputText: {
    height: 180,
    color: "black",
  },
  button: {
    width: "80%",
    backgroundColor: "#185079",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
  },
  text: {
    color: "#003f5c",
  },
});
export default AdminPostNotificationScreen;
