import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

function SplashScreen() {
  // useEffect();
  // {
  //   setTimeout(() => {
  //     this.props.navigation.navigate("login");
  //   }, 2000);
  // }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/RIU.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 120,
    width: "100%",
  },

  // logo:{
  //   fontWeight:"bold",
  //   fontSize:50,
  //   color:"#fb5b5a",
  // },
});
export default SplashScreen;
