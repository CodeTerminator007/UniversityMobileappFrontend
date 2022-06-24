import React, { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Alert } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import URI from "../../context/uri";

// import { useSelector, useDispatch } from "react-redux";
// import { setToken, setName, setUserData } from "../redux/actions";
// import { useNavigation } from "@react-navigation/native";

function MarkResultScreen({ navigation, route }) {
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const ID = stateData.userReducer.id;
  const [midmarks, setMidmarks] = useState(null);
  const [finalmarks, setFinalmarks] = useState(null);
  const [sessional, setSessional] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const { class_id } = route.params;
  const { studentid } = route.params;
  const { subject_id } = route.params;
  const [yearopen, setYearopen] = useState(false);
  const [year, setYear] = useState(null);
  const [isFetching, setIssFethin] = useState(false);
  const [yearlist, setYearlist] = useState([
    { label: "2022", value: "2022" },
    { label: "2021", value: "2021" },
  ]);

  const AuthStr = "Bearer ".concat(Token);

  if (!isFetching) {
    useEffect(() => {
      setIsLoading(true);
      axios
        .get(`${URI.uri}/Result/`, {
          headers: { Authorization: AuthStr },
        })
        .then((response) => {
          const data1 = response.data;
          setIsLoading(false);
          const g = data1.map((item) => {
            return {
              value: item.id,
              label: item.name,
            };
          });
          setYearlist(g);
        })
        .catch((error) => {
          setIsLoading(false);
          Alert.alert("Error", "Network Error");
          console.log("error " + error);
        });
    }, [isFetching]);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const AuthStr = "Bearer ".concat(Token);
    const option = {
      headers: { Authorization: AuthStr },
    };
    setIsLoading(true);
    axios
      .post(
        `${URI.uri}/SubjectResult/`,
        {
          midobtainedMarks: midmarks,
          finalobtainedMarks: finalmarks,
          sessionalmarks: sessional,
          classid: class_id,
          student: studentid,
          subject: subject_id,
          result: year,
        },
        option
      )
      .then((res) => {
        setIsLoading(false);
        if (res.status == 201) {
          Alert.alert("Marks", "Marks has been added for the student.");
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
          <Text style={styles.logoText}>Mark Result</Text>
          <DropDownPicker
            placeholder="Year"
            open={yearopen}
            // onOpen={yearopen}
            value={year}
            items={yearlist}
            setOpen={setYearopen}
            setValue={setYear}
            setItems={setYearlist}
            containerStyle={{
              width: "80%",
              height: 50,
              marginBottom: yearopen ? 175 : 20,
              justifyContent: "center",
              //padding: 20,
            }}
            style={{
              backgroundColor: "#edece8",
              borderColor: "#edece8",
              borderRadius: 25,
            }}
            textStyle={{
              color: "#003f5c",
              marginLeft: 10,
            }}
          />

          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Mid Marks"
              placeholderTextColor="#003f5c"
              onChangeText={setMidmarks}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Final Marks"
              placeholderTextColor="#003f5c"
              onChangeText={setFinalmarks}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Sessional Marks"
              placeholderTextColor="#003f5c"
              onChangeText={setSessional}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.loginText}>Post</Text>
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
  logoText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#185079",
    marginTop: 10,
    marginBottom: 40,
  },
  inputView: {
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
  forgot: {
    color: "black",
    fontSize: 11,
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
  loginText: {
    color: "white",
  },
});

export default MarkResultScreen;
