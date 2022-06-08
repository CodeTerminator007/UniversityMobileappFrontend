import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

function ClassListItem({ title, description, url, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.notifiContainer}>
        <Text style={styles.heading}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  notifiContainer: {
    //flexDirection: "row",
    padding: 20,
    backgroundColor: "#87CEEB",
    marginBottom: 6,
    borderRadius: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
export default ClassListItem;
