import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

function ImagePickerr({image,setImage}) {
  // const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5,
      exif:true,
      base64:true
    });

    console.log(result.uri);

    if (!result.cancelled) {
      setImage(result);
    }
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      <View style={styles.container}>
        {!image && (
          <MaterialCommunityIcons color="white" name="camera" size={40} />
        )}
        {image && <Image source={{ uri: image.uri }} style={styles.image} />}
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "grey",
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    marginVertical: 10,
    marginBottom: 20,
    overflow: "hidden",
    width: 100,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
export default ImagePickerr;
