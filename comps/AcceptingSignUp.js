import React, { useState } from 'react';
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
import { Actions } from 'react-native-router-flux';


function AcceptingSignUp() {

  /*
  BUTTON
  
  This will probably change when we add the router
  flux to the "Sign Up" button..
  But for now, if any input is blank there will be an alert
  
  */
  const [input, setInput] = useState("");

  buttonClickListener = () => {

    if (input == '') {
      inputinfo = (
        Alert.alert("Please fill in all inputs before signing up."));

    }

  };
  var suggestionList = [];
  const [prediction, setPrediction] = useState([]);
  const getAddress = async (address) => {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${address}&location=49.246292,-123.116226&radius=50000&key=AIzaSyCCD_OOE3Yj3h-fSov9ed1IhFByZPNALEs`;
    const result = await fetch(apiUrl);
    const json = await result.json();
    const suggestion = await json.results;
    console.log(suggestion);
    setPrediction(suggestion);
  }
  for (var i = 0; i < prediction.length; i++) {
    suggestionList.push(

      <Text key={i}
        style={{ padding: 10, borderBottomWidth: 0.5 }} onPress={Choose.bind(this, prediction[i].formatted_address)}>{prediction[i].formatted_address}</Text>
    )
  }
  const [autoComplete, enter] = useState("")
  const [disp, changeDisp] = useState({
    top: 270,
    backgroundColor: 'white',
    padding: 20,
    flexDirection: 'column',
    zIndex: 2,
    position: 'absolute',
  });
  function Choose(selection) {
    enter(selection);
    changeDisp({
      display: 'none'
    });
  }

  return (

    <View style={DonSignStyles.container}>

      {/* HEADER: icon and text */}
      <View style={DonSignStyles.headerContainer}>
        <Image
          style={{ width: 50, height: 45, top: -10 }}
          source={require('../assets/icon/accepting_active.png')}
        />
        <Text style={DonSignStyles.headertext}>
          Accepting Food
      </Text>
      </View>

      {/* DONATING FORM */}

      <View style={DonSignStyles.titles}>
        <Text style={DonSignStyles.text}>Organization Name</Text>
      </View>
      <View style={DonSignStyles.inputContainer}>
        <TextInput style={DonSignStyles.inputs}
          keyboardType="default"
          autoFocus={true}
          selectionColor="#0ca3bc"
          onChangeText={(input) => setInput(input)}
          value={input}
        />
      </View>


      <View style={DonSignStyles.titles}>
        <Text style={DonSignStyles.text}>Organization Address</Text>
      </View>
      <View style={DonSignStyles.inputContainer}>
        <TextInput style={DonSignStyles.inputs}
          keyboardType="default"
          selectionColor="#0ca3bc"
          onChangeText={address => getAddress(address)}
        >{autoComplete}</TextInput>

      </View>
      <View style={disp}>
        {suggestionList}
      </View>
      <View style={DonSignStyles.titles}>
        <Text style={DonSignStyles.text}>Phone Number</Text>
      </View>
      <View style={DonSignStyles.inputContainer}>
        <TextInput style={DonSignStyles.inputs}
          keyboardType="number-pad"
          selectionColor="#0ca3bc" />
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



      {/* SIGN UP BUTTON */}
      <TouchableHighlight style={[DonSignStyles.buttonContainer, DonSignStyles.signupButton]} onPress={buttonClickListener}>
        <Text style={DonSignStyles.signUpText}>Sign Up</Text>
      </TouchableHighlight>

    </View>


  )
};

export default AcceptingSignUp;
