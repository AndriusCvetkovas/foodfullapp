import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  FormLabel,
  Alert


} from 'react-native';
import DonSignStyles from '../styles/DonSignStyles';
import {Actions} from 'react-native-router-flux';


function DonationSign(){

/*
BUTTON

This will probably change when we add the router
flux to the "Sign Up" button..
But for now, if any input is blank there will be an alert

*/ 
const [input, setInput] = useState("");

buttonClickListener = () =>{

  if(input == ''){
    inputinfo = (
         Alert.alert("Please fill in all the inputs before signing up."));

  }

}


  return (
 
    <View style={DonSignStyles.container}>

    {/* HEADER: icon and text */}
    <View style={DonSignStyles.headerContainer}>
      <Image
          style = {{width:50, height:45, top:-10}}
          source={require('../assets/icon/donating_active.png')}
      />
      <Text style={DonSignStyles.headertext}>
        Donating Food
      </Text>
    </View>

    {/* DONATING FORM */}

        <View style={DonSignStyles.titles}>
              <Text style={DonSignStyles.text}>Company Name</Text>
        </View>
        <View style={DonSignStyles.inputContainer}>
            <TextInput style={DonSignStyles.inputs}
                keyboardType="default"
                autoFocus="true"
                selectionColor="#0ca3bc"/>  
        </View>


        <View style={DonSignStyles.titles}>
              <Text style={DonSignStyles.text}>Company Address</Text>
        </View>
        <View style={DonSignStyles.inputContainer}>
            <TextInput style={DonSignStyles.inputs}
                keyboardType="default"
                selectionColor="#0ca3bc"/>
        </View>


        <View style={DonSignStyles.titles}>
              <Text style={DonSignStyles.text}>Phone Number</Text>
        </View>
        <View style={DonSignStyles.inputContainer}>
            <TextInput style={DonSignStyles.inputs}
                keyboardType="number-pad"
                selectionColor="#0ca3bc"/>  
        </View>


        <View style={DonSignStyles.titles}>
              <Text style={DonSignStyles.text}>Email</Text>
        </View>
        <View style={DonSignStyles.inputContainer}>
            <TextInput style={DonSignStyles.inputs}
                keyboardType="email-address"
                selectionColor="#0ca3bc"
                />
        </View>

  
          <View style={DonSignStyles.titles}>
              <Text style={DonSignStyles.text}>Password</Text>
         </View>
          <View style={DonSignStyles.inputContainer}>
              <TextInput style={DonSignStyles.inputs}
              keyboardType="default"
              selectionColor="#0ca3bc"
              secureTextEntry={true}
                />
          </View>


          
      {/* NEXT BUTTON */}
          <TouchableHighlight style={[DonSignStyles.buttonContainer, DonSignStyles.signupButton]} onPress={buttonClickListener}>
            <Text style={DonSignStyles.signUpText}>Next</Text>
          </TouchableHighlight>
     
    </View>

  
  )
};

export default DonationSign;
