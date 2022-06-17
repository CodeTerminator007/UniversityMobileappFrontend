import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

function Students({ title, rollNo, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.notifiContainer}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.heading}>{rollNo}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  notifiContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#185079",
    marginBottom: 6,
    borderRadius: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
export default Students;
