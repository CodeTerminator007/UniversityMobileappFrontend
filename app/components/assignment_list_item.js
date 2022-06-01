import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

function AssignmentListItem({ title, description, url, onPress, statuss }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.notifiContainer}>
        <Text style={styles.heading}>{title}</Text>
        <View>
          {statuss ? (
            <AntDesign name="checkcircleo" size={24} color="green" />
          ) : (
            <Entypo name="circle-with-cross" size={24} color="red" />
          )}
        </View>
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
export default AssignmentListItem;
