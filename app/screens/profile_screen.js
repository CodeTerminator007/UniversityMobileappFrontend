import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, ScrollView, SafeAreaView } from 'react-native'
import { Ionicons, Fontisto  } from '@expo/vector-icons'
import Constants from "expo-constants";
//import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Separator from '../components/separator'

export default class ProfileScreen extends Component {
        
  render() {          
  return (
      <SafeAreaView style={styles.container}>
          
              <View style={styles.profileStyle}>
               <Image style={styles.image} source={{uri:"https://bootdey.com/img/Content/avatar/avatar7.png"}}></Image>
               <Text style={styles.namestyle}>Student</Text>
              </View>
          
              <Separator/>
              <View style={styles.headingContainer}>
                  <Text style={styles.heading}>DETAILS</Text>
              </View>
              <Separator/>
              <View style={styles.LocationEmailContainer}>
                  <View style={styles.icon}>
                   <Ionicons name="location-outline" size={24} color="grey" />
                  </View>
                  <View style={styles.LocationEmailTextContainer}>
                      <Text style={styles.LocationEmailHeading}>Roll No:</Text>
                      <Text style={styles.detailText}>0000</Text>
                  </View>
              </View>
              <Separator/>
              <View style={styles.LocationEmailContainer}>
                  <View style={styles.icon}>
                   <Fontisto name="email" size={24} color="grey" />
                  </View>
                  <View style={styles.LocationEmailTextContainer}>
                      <Text style={styles.LocationEmailHeading}>Email</Text>
                      <Text style={styles.detailText}>abc@gmail.com</Text>
                  </View>
              </View>
              <Separator/>
      </SafeAreaView>
  );
 };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Constants.statusBarHeight,
    },
    profileStyle:{
        alignItems: "center",
        marginTop: 10,
        marginBottom: 40,
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderColor:"#ffffff",
        borderWidth: 1,
        marginTop: 25,
    },
    namestyle: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 15,
        marginBottom: 15,
    },
    headingContainer: {
        //height: 70,
        width: "100%",
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    detailText: {
        color: "grey",
    },
    heading: {
        fontSize: 25,
        fontWeight: "bold",
    },
    LocationEmailContainer: {
        //height: 70,
        width: "100%",
        flexDirection: "row",
        padding: 10,
        alignItems: "center"    
    },
    LocationEmailHeading: {
        fontSize: 16,
        fontWeight: "bold",
    },
    LocationEmailTextContainer: {
        marginLeft: 10
    },
});
