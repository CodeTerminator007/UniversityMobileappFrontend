import React from "react";
import { View, StyleSheet, Image, TouchableHighlight, Text } from "react-native";
//import { MaterialCommunityIcons } from "@expo/vector-icons";
//import Swipeable from "react-native-gesture-handler/Swipeable";

function Profile() {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri:"https://bootdey.com/img/Content/avatar/avatar7.png"}}/>
        <Text style={styles.text}>Ali</Text>
        <Text style={styles.text}>10545</Text>
        <Text style={styles.text}>BS Computer Science</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //alignItems: "center",
        //flexDirection: "row",
        padding: "10%",
        backgroundColor: "#185079",
        //borderColor: "black",
        //borderWidth: 1,
        borderRadius: 20,
        //height: "10%",
        //shadowColor: "grey",
        //shadowOffset: { width: 10, height: 10},
        //shadowOpacity: 1,
        //shadowRadius: 10,
        //elevation: 15,
        //marginBottom: 30
      },
      image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 7,
        //backgroundColor: '#7367af',
      },
      text: {
        color: "#b6bdc7",
        fontSize: 17,
        fontWeight: "bold"
      },
});

export default Profile;
