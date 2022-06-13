import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Constants from "expo-constants";
//import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Separator from "../../components/separator";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

function TeacherNotificationDetailScreen({ navigation, route }) {
  const listings = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image style={styles.image} source={{ uri: listings.image }} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{listings.title}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{listings.created_at}</Text>
        </View>
        <Text style={styles.detailText}>{listings.detail}</Text>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={styles.modalView}>
          <Image style={styles.modalImage} source={{ uri: listings.image }} />
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Feather name="x-circle" size={35} color="black" />
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    //paddingTop: Constants.statusBarHeight,
    //padding: 8,
  },
  modalView: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    height: 500,
    width: 300,
    marginHorizontal: 40,
    marginVertical: 40,
    //backgroundColor: "red",
  },

  textContainer: {
    padding: 10,
  },
  dateContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#185079",
    height: 20,
    width: 80,
    borderRadius: 20,
    marginBottom: 10,
  },
  image: {
    height: 150,
    width: "100%",
    backgroundColor: "black",
    marginBottom: 10,
    //padding: 20,
  },
  detailText: {
    //color: "white",
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    //color: "white",
  },
  date: {
    //marginBottom: 10,
    color: "white",
  },
});
export default TeacherNotificationDetailScreen;
