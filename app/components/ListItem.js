import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Separator from "../components/separator";

function ListItem({ title, description, url, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.notifiContainer}>
        <Image style={styles.image} source={{ uri: url }}></Image>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>{title}</Text>
          <Text numberOfLines={1} style={styles.detailText}>
            {description}
          </Text>
        </View>
      </View>
      <Separator />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  notifiContainer: {
    flexDirection: "row",
    padding: 8,
    //backgroundColor: "#185079",
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
    color: "black",
    marginTop: 4,
    width: 260,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});
export default ListItem;
