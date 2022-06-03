import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Switch,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

function StudentAssignmentDetailScreen() {
  const [name, setName] = useState("Ali");
  const [rollno, setRollno] = useState("1111");
  const [marks, setMarks] = useState(null);
  const [comment, setComment] = useState("I submitted the assignment");
  const [date, setDate] = useState("2022-01-01");

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headingText}>Student Assignment Details</Text>
        <Text style={styles.text}>Name</Text>
        <View style={styles.textinputView}>
          <TextInput
            style={styles.inputText}
            value={name}
            editable={false}
            placeholder="Name"
            placeholderTextColor="#003f5c"
            onChangeText={setName}
          />
        </View>
        <Text style={styles.text}>Roll No</Text>
        <View style={styles.textinputView}>
          <TextInput
            style={styles.inputText}
            value={rollno}
            editable={false}
            placeholder="Roll No"
            placeholderTextColor="#003f5c"
            onChangeText={setRollno}
          />
        </View>
        <Text style={styles.text}>Comment</Text>
        <View style={styles.commentinputView}>
          <TextInput
            style={styles.commentinputText}
            value={comment}
            editable={false}
            placeholder="Comment"
            placeholderTextColor="#003f5c"
            multiline={true}
            textAlignVertical="top"
            onChangeText={setComment}
          />
        </View>
        <Text style={styles.text}>Marks</Text>
        <View style={styles.textinputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Marks"
            placeholderTextColor="#003f5c"
            onChangeText={setMarks}
          />
        </View>

        <Text style={styles.text}>Submit Date & Time</Text>
        {/* <View style={styles.textinputView}> */}
        <TextInput
          style={styles.inputText}
          value={date}
          editable={false}
          placeholder="Date & Time"
          placeholderTextColor="#003f5c"
          onChangeText={setDate}
        />
        {/* </View> */}

        <Text style={styles.text}>Assignment File</Text>
        <View style={styles.file}>
          <Ionicons name="cloud-done-outline" size={40} color="#003f5c" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  file: {
    alignItems: "center",
    backgroundColor: "#edece8",
    borderRadius: 15,
    borderColor: "grey",
    borderWidth: 5,
    height: 70,
    justifyContent: "center",
    marginVertical: 10,
    marginBottom: 10,
    overflow: "hidden",
    width: 70,
  },

  headingText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#185079",
    marginTop: 10,
    marginBottom: 40,
  },
  textinputView: {
    width: "80%",
    backgroundColor: "#edece8",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  commentinputView: {
    width: "80%",
    backgroundColor: "#edece8",
    borderRadius: 25,
    height: 90,
    marginBottom: 20,
    //justifyContent: "center",
    padding: 20,
  },
  commentinputText: {
    height: 90,
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
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: "14%",
  },
});

export default StudentAssignmentDetailScreen;
