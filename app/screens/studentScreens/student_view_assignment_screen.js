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

function StudentViewAssignmentScreen({ navigation }) {
  const [title, setTitle] = useState("assignment 1");
  const [detail, setDetail] = useState("ddddddddddddd");
  const [marks, setMarks] = useState("10");
  const [date, setDate] = useState("2022-01-01");

  return (
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Upload Assignment")}
          style={{ marginLeft: 9 }}
        >
          <Ionicons name="create" size={24} color="black" />
        </TouchableOpacity>
      ),
    }),
    (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.headingText}>View Assignment </Text>

          <Text style={styles.text}>Title</Text>

          {/* <View style={styles.titleinputView}> */}
          <TextInput
            style={styles.titleinputText}
            value={title}
            editable={false}
            placeholder="Title"
            placeholderTextColor="#003f5c"
            onChangeText={setTitle}
          />
          {/* </View> */}

          <Text style={styles.text}>Detail</Text>

          {/* <View style={styles.detailinputView}> */}
          <TextInput
            style={styles.detailinputText}
            value={detail}
            editable={false}
            placeholder="Details"
            placeholderTextColor="#003f5c"
            multiline={true}
            textAlignVertical="top"
            onChangeText={setDetail}
          />
          {/* </View> */}

          <Text style={styles.text}>Marks</Text>

          {/* <View style={styles.titleinputView}> */}
          <TextInput
            style={styles.titleinputText}
            value={marks}
            editable={false}
            placeholder="Marks"
            placeholderTextColor="#003f5c"
            onChangeText={setMarks}
          />
          {/* </View> */}

          <Text style={styles.text}>Submit Date & Time</Text>

          {/* <View style={styles.titleinputView}> */}
          <TextInput
            style={styles.titleinputText}
            value={date}
            editable={false}
            placeholder="date"
            placeholderTextColor="#003f5c"
            onChangeText={setDate}
          />
          {/* </View> */}

          <Text style={styles.text}>Assignment File</Text>
          <View style={styles.fileButtonsView}>
            <TouchableOpacity
              style={styles.fileView}
              onPress={() =>
                navigation.navigate("File Reader", {
                  uri: "http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf",
                })
              }
            >
              <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.fileDownload}>
              <Text style={styles.buttonText}>Download</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  fileView: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 50,
    width: "32%",
    backgroundColor: "green",
    borderRadius: 15,
  },
  fileDownload: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "32%",
    backgroundColor: "red",
    borderRadius: 15,
  },
  fileButtonsView: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  marksnswitch: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
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
    fontWeight: "bold",
    height: 50,
    color: "black",
  },
  detailinputView: {
    width: "80%",
    backgroundColor: "#edece8",
    borderRadius: 25,
    height: 80,
    marginBottom: 20,
    //justifyContent: "center",
    padding: 20,
  },
  marksinputView: {
    width: "35%",
    backgroundColor: "#edece8",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  detailinputText: {
    fontWeight: "bold",
    height: 50,
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
    fontWeight: "bold",
    fontSize: 17,
  },
  text: {
    color: "#003f5c",
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: "14%",
  },
});

export default StudentViewAssignmentScreen;
