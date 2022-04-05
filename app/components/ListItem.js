import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function ListItem({ title, description, url }) {
  return (
    <View style={styles.notifiContainer}>
      <Image style={styles.image} source={{ uri: url }}></Image>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.detailText}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  notifiContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#185079",
    marginBottom: 6,
  },
  image: {
    height: 60,
    width: 60,
    backgroundColor: "white",
    //padding: 20,
  },
  textContainer: {
    marginLeft: 8,
  },
  detailText: {
    color: "white",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
export default ListItem;
