import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import ImagePickerr from "../../components/image_picker";

function AddTeacherScreen() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [dobirth, setDobirth] = useState(null);
  const [cnic, setCnic] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone1, setPhone1] = useState(null);
  const [phone2, setPhone2] = useState(null);

  const [genderopen, setGenderopen] = useState(false);
  const [gender, setGender] = useState(null);
  const [genderlist, setGenderlist] = useState([
    { label: "Male", value: "m" },
    { label: "Female", value: "f" },
    { label: "Neuter", value: "n" },
  ]);

  const [lastdegreeopen, setLastdegreeopen] = useState(false);
  const [lastdegree, setLastdegree] = useState(null);
  const [lastdegreelist, setLastdegreelist] = useState([
    { label: "Degree 1", value: "a" },
    { label: "Degree 2", value: "b" },
    { label: "Degree 3", value: "c" },
    { label: "Degree 4", value: "d" },
  ]);

  const onGenderOpen = useCallback(() => {
    setLastdegreeopen(false);
  }, []);

  const onDegreeOpen = useCallback(() => {
    setGenderopen(false);
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.logoText}>Add Teacher</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="User Name"
            placeholderTextColor="#003f5c"
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="First Name"
            placeholderTextColor="#003f5c"
            onChangeText={setFirstname}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Last Name"
            placeholderTextColor="#003f5c"
            onChangeText={setLastname}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Date of Birth"
            placeholderTextColor="#003f5c"
            onChangeText={setDobirth}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="CNIC"
            placeholderTextColor="#003f5c"
            onChangeText={setCnic}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={setEmail}
          />
        </View>
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
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Phone 1"
            placeholderTextColor="#003f5c"
            onChangeText={setPhone1}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Phone 2"
            placeholderTextColor="#003f5c"
            onChangeText={setPhone2}
          />
        </View>
        <DropDownPicker
          placeholder="Select Course"
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
        <ImagePickerr />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.loginText}>Add</Text>
        </TouchableOpacity>
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
  },
});

export default AddTeacherScreen;
