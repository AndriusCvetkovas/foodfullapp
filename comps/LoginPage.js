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
import styles from '../styles/LoginStyles';


function LoginPage(){
  return (
 

<View style={styles.container}>

        <View>
            <Image
            style={styles.LogoImg}
            source={require('../assets/img/logo_animation.png')}
            />
        </View>


        <View>
          <Text style={styles.header}>
          Foodfull
          </Text>
          <Text style={styles.subheader}>
          Giving food a Second Life
          </Text>
        </View>
       

       
        <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={{uri: 'https://cdn2.iconfinder.com/data/icons/basic-thin-line-color/21/20-512.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              />
        </View>

        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              />
        </View>

        

        <TouchableHighlight style={[styles.buttonContainer, styles.signinButton]} onPress={() => this.onClickListener('sign_up')}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableHighlight>

        <View style={styles.signUpFooter}>
          <Text>Don't have account? Sign Up</Text>

        </View>

   </View>

  
  )
};

export default LoginPage;
