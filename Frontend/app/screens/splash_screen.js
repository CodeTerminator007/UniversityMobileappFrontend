import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default class SplashScreen extends React.Component {

// componentDidMount()
//    {
//     setTimeout(() => {
//       this.props.navigation.navigate('login')
//     }, 2000);
//   }
  
  render(){
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/RIU.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    height: 120,
    width: '100%',
  },

  // logo:{
  //   fontWeight:"bold",
  //   fontSize:50,
  //   color:"#fb5b5a",
  // },
});
