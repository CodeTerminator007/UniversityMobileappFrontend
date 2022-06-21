import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
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
import DropDownPicker from "react-native-dropdown-picker";
import ImagePickerr from "../../components/image_picker";
import URI from "../../context/uri";
import { Alert } from "react-native";

function EditAdminScreen({ navigation, route }) {
  const { id } = route.params;
  const { first_name } = route.params;
  const { last_name } = route.params;
  const { username1 } = route.params;
  const { email1 } = route.params;
  const { phone_number1 } = route.params;
  const { phone_number2 } = route.params;
  const { gender1 } = route.params;
  const { last_education_degree } = route.params;
  const { Dob } = route.params;
  const { cnic1 } = route.params;
  const { profile_image } = route.params;
  const [image, setImage] = useState(profile_image);

  const [username, setUsername] = useState(username1);
  const [password, setPassword] = useState(null);
  const [firstname, setFirstname] = useState(first_name);
  const [lastname, setLastname] = useState(last_name);
  const [dobirth, setDobirth] = useState(Dob);
  const [cnic, setCnic] = useState(cnic1);
  const [email, setEmail] = useState(email1);
  const [phone1, setPhone1] = useState(phone_number1);
  const [phone2, setPhone2] = useState(phone_number2);
  const [isloading, setIsLoading] = useState(false);

  const [genderopen, setGenderopen] = useState(false);
  const [gender, setGender] = useState(gender1);
  const [genderlist, setGenderlist] = useState([
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ]);

  const [lastdegreeopen, setLastdegreeopen] = useState(false);
  const [lastdegree, setLastdegree] = useState(last_education_degree);
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

  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const AuthStr = "Bearer ".concat(Token);

  const handleSubmit = async (event) => {
    setIsLoading(true);
    console.log("in");
    event.preventDefault();
    const option = {
      headers: { Authorization: AuthStr },
    };
    axios
      .put(
        `${URI.uri}/updateuserwithoutpassword/${id}/`,
        {
          username: username,
          email: email,
          first_name: firstname,
          last_name: lastname,
          phone_number1: phone1,
          phone_number2: phone2,
          gender: gender,
          last_education_degree: lastdegree,
          Dob: dobirth,
          cnic: cnic,
        },
        option
      )
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        Alert.alert("Admin", "The Admin has been Updated.");
        navigation.navigate("All Admins");
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
            <Text style={styles.logoText}>Edit Admin</Text>

            <Text style={styles.text}>User Name</Text>

            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder={username1}
                placeholderTextColor="#003f5c"
                onChangeText={setUsername}
              />
            </View>

            <Text style={styles.text}>First Name</Text>

            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder={first_name}
                placeholderTextColor="#003f5c"
                onChangeText={setFirstname}
              />
            </View>

            <Text style={styles.text}>Last Name</Text>

            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder={last_name}
                placeholderTextColor="#003f5c"
                onChangeText={setLastname}
              />
            </View>

            <Text style={styles.text}>Date Of Birth(YYYY-MM-DD)</Text>

            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder={Dob}
                placeholderTextColor="#003f5c"
                onChangeText={setDobirth}
              />
            </View>

            <Text style={styles.text}>CNIC(33104-0012345-7)</Text>

            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder={cnic1}
                placeholderTextColor="#003f5c"
                onChangeText={setCnic}
              />
            </View>

            <Text style={styles.text}>Email</Text>

            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder={email1}
                placeholderTextColor="#003f5c"
                onChangeText={setEmail}
              />
            </View>

            <Text style={styles.text}>Gender</Text>

            <DropDownPicker
              placeholder={gender1}
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
                placeholder={phone_number1}
                placeholderTextColor="#003f5c"
                onChangeText={setPhone1}
              />
            </View>

            <Text style={styles.text}>Phone 2 (+92 ***********)</Text>

            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder={phone_number2}
                placeholderTextColor="#003f5c"
                onChangeText={setPhone2}
              />
            </View>

            <Text style={styles.text}>Last Education</Text>

            <DropDownPicker
              placeholder={last_education_degree}
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
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.loginText}>Update</Text>
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

export default EditAdminScreen;
