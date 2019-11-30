import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  FormLabel,
  Alert,
  ScrollView


} from 'react-native';
import DonSignStyles from '../../styles/DonSignStyles';
import { Actions } from 'react-native-router-flux';
import Geolocation from 'react-native-geolocation-service';
import apiKey from '../../apiKey/apiKey';
import axios from 'axios';



function AcceptingSignUp({text}) {
  //console.log("props", props)
  var userType = text;
  const SendUserInfo = async () => {
    var obj = {
      key: "users_create",
      data: {
        name: userName,
        phone: userPhone,
        email: userEmail,
        password: userPassword,
        type: userType,
        address: userAddress,
        lat: userLatitude,
        long: userLongitude
      }
    }
    // console.log(userLatitude);
    // console.log(userLongitude);
    // console.log(userEmail);
    // console.log(userPassword);
    // console.log(userPhone);
    // console.log(userPassword);
    // console.log(userAddress);
    // console.log(userName);
    // console.log(userType);
    var r = await axios.post(`https://foodfullapp.herokuapp.com/post`, obj);
    console.log(r.data);
    Actions.onboarding();
  }
  const [header, setHeader] = useState("");
  const [headerImg, setHeaderImg] = useState();
  const signUpType = ()=> {
    if(userType == 0){
      setHeader("Donating Food");
      setHeaderImg(require("../../assets/icon/donating_active.png"))
    }else {
      setHeader("Accepting Food");
      setHeaderImg(require("../../assets/icon/accepting_active.png"))
    }
  }

  //SELECTED LOCATION
  const [userLatitude, setUserLatitude] = useState();
  const [userLongitude, setUserLongitude] = useState();
  //Selected Email
  const [userEmail, setUserEmail] = useState();
  //Selected password
  const [userPassword, setUserPassword] = useState();
  //Selected Phone
  const [userPhone, setUserPhone] = useState();
  //SELECTED name
  const [userName, setUserName] = useState();
  //SELECTED address
  const [userAddress, setUserAddress] = useState();


  //GRAB CURRENT LOCATION
  const [long, setLong] = useState(49);
  const [lat, setLat] = useState(-123);
  // const getPos = async () => {
  //   await Geolocation.getCurrentPosition((data) => {
  //     setLong(data.coords.longitude);
  //     setLat(data.coords.latitude);
  //   });
  // }
  //AUTOCOMPLETE FUNCTION
  var suggestionList = [];
  const [prediction, setPrediction] = useState([]);
  const getAddress = async (address) => {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${address}&location=${lat},${long}&radius=50000&key=${apiKey}`;
    const result = await fetch(apiUrl);
    const json = await result.json();
    const suggestion = await json.results;
    console.log(json);
    setPrediction(suggestion);
  }
  for (var i = 0; i < prediction.length; i++) {
    suggestionList.push(

      <Text key={i}
        style={{ padding: 10, borderBottomWidth: 0.5}} onPress={Choose.bind(this, prediction[i])}>{prediction[i].formatted_address}</Text>
    )
  }
  const [disp, changeDisp] = useState({
    top: 400,
    backgroundColor: 'white',
    padding: 0,
    flexDirection: 'column',
    height: 300,
    zIndex: 2,
    overflow: 'hidden',
    position: 'absolute',
  });
  function Choose(selection) {
    setUserAddress(selection.formatted_address);
    setUserLatitude(selection.geometry.location.lat);
    setUserLongitude(selection.geometry.location.lng);
    changeDisp({
      display: 'none'
    });
  }
  function SendUser() {
    if(userAddress == null || userEmail == null || userPassword == null || userName == null || userPhone == null){
      alert("Please fill up the blanks")
    }
    else{
      SendUserInfo();
    }
  };


  useEffect(() => {
    //getPos();
    signUpType();
  }, []);


  return (

    <View style={DonSignStyles.container}>
      <TouchableOpacity style ={{position: 'absolute', top: 70, left: 20, flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}
            onPress={()=>Actions.signup()}> 
                <Image
                source = {require('../../assets/icon/next.png')}
                style = {{width: 25, height: 30, transform: [
                    { rotateY: '180deg'} ]}}
                ></Image>
                <Text></Text>
            </TouchableOpacity>

      {/* HEADER: icon and text */}
      <View style={DonSignStyles.headerContainer}>
        <Image
          style={{ width: 50, height: 45, top: -10 }}
          source={headerImg}
        />
        <Text style={DonSignStyles.headertext}>
          {header}
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
          onChangeText={(name) => setUserName(name)}
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
        >{userAddress}</TextInput>

      </View>
      <ScrollView style={disp}>
        {suggestionList}
      </ScrollView>
      <View style={DonSignStyles.titles}>
        <Text style={DonSignStyles.text}>Phone Number</Text>
      </View>
      <View style={DonSignStyles.inputContainer}>
        <TextInput style={DonSignStyles.inputs}
          keyboardType="number-pad"
          selectionColor="#0ca3bc" 
          onChangeText={(phone) => setUserPhone(phone)}
          />
      </View>


      <View style={DonSignStyles.titles}>
        <Text style={DonSignStyles.text}>Email</Text>
      </View>
      <View style={DonSignStyles.inputContainer}>
        <TextInput style={DonSignStyles.inputs}
          keyboardType="email-address"
          autoCapitalize={false}
          selectionColor="#0ca3bc"
          onChangeText={(email) => setUserEmail(email)}
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
          onChangeText={(password) => setUserPassword(password)}
        />
      </View>



      {/* SIGN UP BUTTON */}
      <TouchableOpacity style={[DonSignStyles.buttonContainer, DonSignStyles.signupButton]} onPress={() => SendUser()}>
        <Text style={DonSignStyles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

    </View>


  )
};

export default AcceptingSignUp;
