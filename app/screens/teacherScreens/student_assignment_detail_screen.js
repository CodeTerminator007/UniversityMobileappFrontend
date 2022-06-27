import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Alert } from "react-native";
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
import { ActivityIndicator } from "react-native-paper";
import URI from "../../context/uri";
import FileReader from "../../components/file_reader";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import * as FileSystem from "expo-file-system";
const { StorageAccessFramework } = FileSystem;
function StudentAssignmentDetailScreen({ navigation, route }) {
  const { student_id } = route.params;
  const { subject_id } = route.params;
  const { theid } = route.params;
  const { commentback } = route.params;
  const { submission_datetime } = route.params;
  const { documentback } = route.params;
  const { document2 } = route.params;
  const { marksback } = route.params;
  const { roll_no } = route.params;
  const { nameback } = route.params; 
  const { assignemt } = route.params; 

  const [data, setdata] = useState(null);
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const AuthStr = "Bearer ".concat(Token);
  const [name, setName] = useState(nameback);
  const [rollno, setRollno] = useState(roll_no);
  const [marks, setMarks] = useState(null);
  const [comment, setComment] = useState(commentback);
  const [date, setDate] = useState("12");
  const [iid, setiid] = useState(theid);
  const [isFetching, setIssFethin] = useState(false);
  const [document, setDocument] = useState(documentback);
  const [isloading, setIsLoading] = useState(false);

  // setiid(theid)
  // setName(nameback)
  // setRollno(roll_no)
  if(date=='12'){
  const d = submission_datetime;
  const z = d.toString().replace("T", "  ");
  const g = z.replace("Z", " ").toString();
  setDate(g);
}
if (marks==null){
  console.log(marksback);
  setMarks(marksback)
}
  // setDocument(documentback)
  // setComment(commentback)

  const downlaodfile = async () => {
    const permissions =
      await StorageAccessFramework.requestDirectoryPermissionsAsync();
    if (!permissions.granted) {
      return;
    }

    const fileName = "assignment";
    try {
      await StorageAccessFramework.createFileAsync(
        permissions.directoryUri,
        fileName,
        "application/pdf"
      )
        .then(async (uri) => {
          await FileSystem.writeAsStringAsync(uri, document2, {
            encoding: FileSystem.EncodingType.Base64,
          });
        })
        .catch((e) => {
          Alert.alert("Error", "Network Error");
          console.log(e);
        });
    } catch (e) {
      Alert.alert("Error", "Network Error");
      throw new Error(e);
    }
  };
  // useEffect(() => {
  //   setIsLoading(true);

  // }, [isFetching]);
  // if (data != null) {
  //   if (data.length != 0) {
  //     setComment(data[0].comment);

  //     setDocument(data[0].document);
  //     setMarks(data[0].marks.toString());
  //     setName(`${data[0].first_name} ${data[0].last_name}`);
  //     setRollno(data[0].roll_no.toString());

  //     setdata(null);
  //   }
  // }
  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const option = {
      headers: {
        Authorization: AuthStr,
        "Content-Type": "multipart/form-data",
      },
    };
    let formdata = new FormData();
    formdata.append("assignment", assignemt);
    formdata.append("student", student_id);
    formdata.append("marks", marks);
    formdata.append("id", iid);
    axios
      .put(`${URI.uri}/AssignmentSubmissionViewSet/${iid}/`, formdata, option)
      .then((res) => {
        const option2 = {
          headers: { Authorization: AuthStr },
        };
        axios
          .post(
            `${URI.uri}/Assignmentmarksresult/`,
            {
              assignment: assignemt,
              student: student_id,
              marks: marks,
              subject: subject_id,
            },
            option2
          )
          .then((res) => {
            setIsLoading(false);
            Alert.alert("Marks", "The Marks has been updated.");
          })
          .catch((err) => {
            if ((err = 400)) {
              Alert.alert("Error", "Empty Fields fill all the fields");
            }
            console.log("error", err);
          });
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
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, backgroundColor: "white" }}
        >
          <View style={styles.container}>
            <Text style={styles.headingText}>Student Assignment Details</Text>
            <Text style={styles.text}>Name</Text>
            <TextInput
              style={styles.inputText}
              value={name}
              editable={false}
              placeholder="Name"
              placeholderTextColor="#003f5c"
              onChangeText={setName}
            />
            <Text style={styles.text}>Roll No</Text>
            <TextInput
              style={styles.inputText}
              value={rollno}
              editable={false}
              placeholder="Roll No"
              placeholderTextColor="#003f5c"
              onChange={setRollno}
            />
            <Text style={styles.text}>Comment</Text>
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
            <Text style={styles.text}>Marks</Text>
            <View style={styles.textinputView}>
              <TextInput
                style={styles.inputText}
                value={marks}
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

            <View style={styles.fileButtonsView}>
              <TouchableOpacity
                style={styles.fileView}
                onPress={() =>
                  navigation.navigate("File Reader", {
                    uri: `${URI.uri}${document}`,
                  })
                }
              >
                <Text style={styles.buttonText}>View</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.fileDownload}
                onPress={downlaodfile}
              >
                <Text style={styles.buttonText}>Download</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.markGrade} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Mark Grade</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
  markGrade: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "64%",
    backgroundColor: "#185079",
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 10,
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
    //height: 90,
    color: "black",
    marginBottom: 20,
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

export default StudentAssignmentDetailScreen;
