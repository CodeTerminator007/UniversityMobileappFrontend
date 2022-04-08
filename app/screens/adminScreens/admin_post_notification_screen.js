import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

function AdminPostNotificationScreen() {
  const [title, setTitle] = useState(null);
  const [detail, setDetail] = useState(null);
  const handleSubmit = async (event) => {};

  return (
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
      <View style={styles.titleinputView}>
        <TextInput
          style={styles.titleinputText}
          placeholder="Picture"
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
});
export default AdminPostNotificationScreen;
