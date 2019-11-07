import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  TouchableHighlight

} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Loginstyles from '../styles/LoginStyles';



function LoginPage(){
  return (
 
<View style={Loginstyles.container}>

      {/* LOGO / ANIMATION */}
        <View>
            <Image
            style={Loginstyles.LogoImg}
            source={require('../assets/img/logo_animation.png')}
            />
        </View>

      {/* HEADER AND SUBHEADER */}
        <View>
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
        <Image style={{width:20, height:15, marginLeft:15,}}
          source={require('../assets/icon/email.png')}/>
          <TextInput style={Loginstyles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              />
        </View>

        <View style={Loginstyles.inputContainer}>
          <Image style={{width:18, height:25, marginLeft:15,}}
          source={require('../assets/icon/password.png')}/>
          <TextInput style={Loginstyles.inputs}
              placeholder="Password"
              />
        </View>

        </View>

        

        <TouchableHighlight style={[Loginstyles.buttonContainer, Loginstyles.signinButton]} onPress={() => Actions.dashboard()}>
          <Text style={Loginstyles.signInText}>Sign In</Text>
        </TouchableHighlight>

        <View style={Loginstyles.signUpFooter}>
          <Text style={Loginstyles.signUpText}>Don't have account?</Text>
          <Text 
          style={Loginstyles.link}
          onPress={()=> Actions.signup()}> Sign Up</Text>

        </View>

   </View>

  
  )
};

export default LoginPage;
