import React,{useContext, useState,useEffect} from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default loginScreen = ()=>{
const [password , setPassword]= useState(null)
const [username, setUsername]= useState(null)

  const handleSubmit = async (event)=>{
    const test = []
    event.preventDefault();
console.log(username, password);
axios.post(`https://2e90-2400-adc7-13d-5200-3183-2225-af23-d71d.ngrok.io/auth/login`, {username :username,password: password })
      .then(res => {
        console.log(res.data.jwt.access);
        console.log("data",res.data.user);

        
      })
      .catch((err)=>{
        console.log("error", er);
      })

      

  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/RipLogo.png')}
      />
      <Text style={styles.logoText}>Welcome</Text>
      <Text style={styles.logoText2}>Login to Continue</Text>
      <View style={styles.inputView} >
        <TextInput  
          style={styles.inputText}
          placeholder="User Name..." 
          placeholderTextColor="#003f5c"
          onChangeText={setUsername}/>
      </View>
      <View style={styles.inputView} >
        <TextInput  
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..." 
          placeholderTextColor="#003f5c"
          onChangeText={setPassword}/>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>


    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText:{
    fontWeight:"bold",
    fontSize:30,
    color:"#185079",
    marginTop:10,
    //marginBottom:40,
  },
  logoText2:{
    color: '#185079',
    marginBottom: 40,
  },
  inputView:{
    width:"80%",
    backgroundColor:'#edece8',
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"black",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#185079",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});
