import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";

const FilePicker = () => {
  const [file, setFile] = useState(null);

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result.uri);
    console.log(result);
    if (!result.cancelled) {
      setFile(result);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.file}>
        {!file && (
          <MaterialCommunityIcons
            name="cloud-upload-outline"
            size={40}
            color="#003f5c"
          />
        )}
        {file && (
          <Ionicons name="cloud-done-outline" size={40} color="#003f5c" />
        )}
      </View>
      <View style={styles.button}>
        <TouchableOpacity>
          <Button
            title="upload your file"
            color="#003f5c"
            onPress={pickDocument}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //marginTop: 200,
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
  button: {
    //marginHorizontal: 60,
    marginBottom: 10,
  },
});

export default FilePicker;
