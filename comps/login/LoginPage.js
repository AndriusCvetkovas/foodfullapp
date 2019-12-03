import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, TextInput, TouchableOpacity, TouchableHighlight, AsyncStorage, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Loginstyles from '../../styles/LoginStyles';
import axios from 'axios';
import LottieView from 'lottie-react-native';



function LoginPage() {
  const [email, setEnteredEmail] = useState();
  const [password, setEnteredPassword] = useState();
  //Auth
  const Auth = async () => {
    console.log(email, password)
    var obj = {
      key: "users_auth",
      data: {
        email: email,
        password: password
      }
    }
    var r = await axios.post(`https://foodfullapp.herokuapp.com/post`, obj);
    //console.log(r);
    var d = await JSON.parse(r.data.body)
    var userId = r.data.body;
    console.log(userId);

    //SAVE USER ID
    const storeData = async () => {
      try {
        await AsyncStorage.setItem('id', userId);
      } catch (error) {
        // Error saving data
      }
    };
    storeData();

    //CHECK IF PASSOWORD IS CORRECT
    if (d.status === false) {
      alert("The password or email entered is incorrect");
    } else {
      //READ USER ID TO GET TYPE
      const Read = async () => {
        var obj = {
          key: "users_read",
          data: {
            id: userId
          }
        }
        var userInfo = await axios.post(`https://foodfullapp.herokuapp.com/post`, obj);
        var userT = await JSON.parse(userInfo.data.body);
        var type = JSON.stringify(userT.data[0].type)
        console.log(type);
        
        //SAVE type
        const storeData2 = async () => {
          try {
            await AsyncStorage.setItem('type', type);
          } catch (error) {
            // Error saving data
          }
        };
        storeData2();
        if (userT.data[0].type == 0) {
          Actions.tabbar0();
        } else {
          Actions.tabbar1();
        }
      }
      Read();
      //var token = await AsyncStorage.getItem("token");
      //console.log("storage: "+token);

    }
  }
  //CHECK FOR USERS
  CheckUsers = () => {
    Auth();
  }
  return (
    <View style={Loginstyles.container}>

      {/* LOGO / ANIMATION */}
      <View>
        {/* <Image
          style={Loginstyles.LogoImg}
          source={require('../../assets/img/logo_animation.png')}
        /> */}
          <LottieView
            source={require('../../assets/lottieFiles/signin.json')}
            style={Loginstyles.LogoImg}
            autoPlay
            loop
        />
      </View>

      {/* HEADER AND SUBHEADER */}
      <View style={{top:-50}}>
        <Text style={Loginstyles.header}>
          Foodfull
          </Text>
        <Text style={Loginstyles.subheader}>
          Giving food a Second Life
          </Text>
      </View>


      {/* FORM */}

      <View style={Loginstyles.form}>
        <View style={Loginstyles.inputContainer}>
          <Image style={{ width: 20, height: 15, marginLeft: 5, }}
            source={require('../../assets/icon/email.png')} />
          <TextInput style={Loginstyles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize={false}
            onChangeText={(em) => setEnteredEmail(em)}
          />
        </View>

        <View style={Loginstyles.inputContainer}>
          <Image style={{ width: 18, height: 25, marginLeft: 5, }}
            source={require('../../assets/icon/password.png')} />
          <TextInput style={Loginstyles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(pas) => setEnteredPassword(pas)}
          />
        </View>

      </View>


      <TouchableOpacity style={[Loginstyles.buttonContainer, Loginstyles.signinButton]} onPress={() => CheckUsers()}>
        <Text style={Loginstyles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <View style={Loginstyles.signUpFooter}>
        <Text style={Loginstyles.signUpText}>Don't have account?</Text>
        <TouchableOpacity
          onPress={() => Actions.signup()}
          style={{height:30}}>
            <Text style={Loginstyles.link}> Sign Up </Text>
          </TouchableOpacity>

      </View>

    </View>


  )
};

export default LoginPage;
