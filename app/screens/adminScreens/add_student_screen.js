import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Alert } from "react-native";

import { useSelector } from "react-redux";

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
import URI from "../../context/uri";
import DropDownPicker from "react-native-dropdown-picker";
import ImagePickerr from "../../components/image_picker";

function AddStudentScreen({ navigation, route }) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [dobirth, setDobirth] = useState(null);
  const [cnic, setCnic] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone1, setPhone1] = useState(null);
  const [phone2, setPhone2] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const [genderopen, setGenderopen] = useState(false);
  const [gender, setGender] = useState(null);
  const [image, setImage] = useState(null);

  const [genderlist, setGenderlist] = useState([
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ]);

  const [lastdegreeopen, setLastdegreeopen] = useState(false);
  const [lastdegree, setLastdegree] = useState(null);
  const [lastdegreelist, setLastdegreelist] = useState([
    { label: "Matric/O level", value: "Matric/O level" },
    { label: "Intermediate/DAE/A level", value: "Intermediate/DAE/A level" },
    { label: "B.Sc English literature", value: "B.Sc English literature" },
    {
      label: "B.Sc Accounting and Finance",
      value: "B.Sc Accounting and Finance",
    },
    { label: "B.Sc Physics", value: "B.Sc Physics" },
    { label: "B.Sc Electronics", value: "B.Sc Electronics" },
    { label: "B.Sc Mathematics", value: "B.Sc Mathematics" },
    { label: "B.Sc Electrical   ", value: "B.Sc Electrical" },
    { label: "B.Sc Urdu", value: "B.Sc Urdu" },
    { label: "B.Sc Compueter Science", value: "B.Sc Compueter Science" },
    { label: "B.Sc Commerce", value: "Commerce" },
    {
      label: "B.Sc Mechanical Engineering",
      value: "B.Sc Mechanical Engineering",
    },
    { label: "MS Computer Science", value: "MS Computer Science" },
    { label: "MS Electronics", value: "MS Electronics" },
    { label: "MS English literature", value: "MS English literature" },
    { label: "MS Accounting and Finance", value: "MS Accounting and Finance" },
    { label: "MS Physics", value: "MS Physics" },
    { label: "MS Electrical", value: "MS Electrical" },
    { label: "MS Mathematics", value: "MS Mathematics" },
    { label: "MS Urdu", value: "MS Urdu" },
  ]);

  const onGenderOpen = useCallback(() => {
    setLastdegreeopen(false);
  }, []);

  const onDegreeOpen = useCallback(() => {
    setGenderopen(false);
  }, []);

  //this is where we code
  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;

  const AuthStr = "Bearer ".concat(Token);

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
    formdata.append("username", username);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("first_name", firstname);
    formdata.append("last_name", lastname);
    formdata.append("is_admin", false);
    formdata.append("is_student", true);
    formdata.append("is_faculty", false);
    formdata.append("phone_number1", phone1);
    formdata.append("phone_number2", phone2);
    formdata.append("gender", gender);
    formdata.append("last_education_degree", lastdegree);
    formdata.append("Dob", dobirth);
    formdata.append("cnic", cnic);
    formdata.append("profile_image", {
      uri: image.uri,
      type: "image/jpeg",
      name: `${username}profilepic.${image.uri.split(".").pop()}`,
    });

    axios
      .post(`${URI.uri}/users/`, formdata, option)
      .then((res) => {
        setIsLoading(false);
        console.log(res.data);
        if (res.status == 201) {
          navigation.navigate("Student Details", { id: res.data.id });
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
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.logoText}>Add Student</Text>

            <Text style={styles.text}>User Name</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="User Name"
                placeholderTextColor="#003f5c"
                onChangeText={setUsername}
              />
            </View>

            <Text style={styles.text}>Password</Text>
            <View style={styles.inputView}>
              <TextInput
                secureTextEntry
                style={styles.inputText}
                placeholder="Password"
                placeholderTextColor="#003f5c"
                onChangeText={setPassword}
              />
            </View>

            <Text style={styles.text}>First Name</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="First Name"
                placeholderTextColor="#003f5c"
                onChangeText={setFirstname}
              />
            </View>

            <Text style={styles.text}>Last Name</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Last Name"
                placeholderTextColor="#003f5c"
                onChangeText={setLastname}
              />
            </View>

            <Text style={styles.text}>Date Of Birth(YYYY-MM-DD)</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Date of Birth"
                placeholderTextColor="#003f5c"
                onChangeText={setDobirth}
              />
            </View>

            <Text style={styles.text}>CNIC(33104-0012345-7)</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="CNIC"
                placeholderTextColor="#003f5c"
                onChangeText={setCnic}
              />
            </View>

            <Text style={styles.text}>Email</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Email"
                placeholderTextColor="#003f5c"
                onChangeText={setEmail}
              />
            </View>

            <Text style={styles.text}>Gender</Text>
            <DropDownPicker
              placeholder="Select Gender"
              open={genderopen}
              onOpen={onGenderOpen}
              value={gender}
              items={genderlist}
              setOpen={setGenderopen}
              setValue={setGender}
              setItems={setGenderlist}
              containerStyle={{
                width: "80%",
                height: 50,
                marginBottom: genderopen ? 175 : 20,
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

            <Text style={styles.text}>Phone 1 (+92 ***********)</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Phone 1"
                placeholderTextColor="#003f5c"
                onChangeText={setPhone1}
              />
            </View>

            <Text style={styles.text}>Phone 2 (+92 ***********)</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Phone 2"
                placeholderTextColor="#003f5c"
                onChangeText={setPhone2}
              />
            </View>

            <Text style={styles.text}>Last Degree</Text>
            <DropDownPicker
              placeholder="Select Last Degree"
              open={lastdegreeopen}
              onOpen={onDegreeOpen}
              value={lastdegree}
              items={lastdegreelist}
              setOpen={setLastdegreeopen}
              setValue={setLastdegree}
              setItems={setLastdegreelist}
              containerStyle={{
                width: "80%",
                height: 50,
                marginBottom: lastdegreeopen ? 175 : 20,
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
            <Text style={styles.text}>Select Profile</Text>
            <ImagePickerr image={image} setImage={setImage} />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.loginText}>Add</Text>
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
  text: {
    color: "#003f5c",
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: "14%",
  },
});

export default AddStudentScreen;
