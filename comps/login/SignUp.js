import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import SignUpStyles from '../../styles/SignUpStyles';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
import LottieView from 'lottie-react-native';

function SignUp() {
  //Changing the colour of the option when clicked
  const [userType, setUserType] = useState();
  const [optionColor1, setOptionColor1] = useState(false);
  const [optionColor2, setOptionColor2] = useState(false);
  const changePage = () => {
    if(optionColor1 != true && optionColor2 !=true){
      alert("Please pick your user type")
    }else {
      Actions.acceptingsignup({text: userType})
    }
  }
  ;
  function ChangeColor1() {
    setOptionColor1(!optionColor1);
    setOptionColor2(false);
    setUserType(0);
  }
  function ChangeColor2() {
    setOptionColor2(!optionColor2);
    setOptionColor1(false);
    setUserType(1);
  }

  var BGColor1 = '#F4F5F7';
  var HeaderColor1 = '#606060';
  var TextColor1 = '#606060';
  var imageUrl1 = require('../../assets/icon/donating.png');
  var ShadowColor1 = '#9B9EA3';
  var ShadowOpacity1 = 0;

  //Next Button
  var ButtonColor = '#EDEDEF';
  var ButtonBorder = '#EDEDEF';
  var ButtonText = '#606060';

  var hidedonating =<Image
    style = {{width: 80,height: 70, marginBottom: 20, marginLeft: 15,}}
    source = {imageUrl1}
    />;
    var movetext = -30;

  if (optionColor1 === true) {
    BGColor1 = '#ffffff';
    HeaderColor1 = '#0ca3bc';
    TextColor1 = '#49b204';
    ShadowColor1 = '#0ca3bc';
    ShadowOpacity1 = 0.15;
    ButtonColor = '#0ca3bc';
    ButtonBorder = '#0ca3bc';
    ButtonText = '#ffffff';
    var movetext = -30;
    hidedonating = <LottieView
    source={require('../../assets/lottieFiles/donating_option.json')}
    style={{ width: 95,height: 95, marginBottom: 20,left:-1, marginRight: -25, top: -0.5}}
    autoPlay
    loop
    />
  }
  var BGColor2 = '#F4F5F7';
  var HeaderColor2 = '#606060';
  var TextColor2 = '#606060';
  var imageUrl2 = require('../../assets/icon/accepting.png');
  var ShadowColor2 = '#9B9EA3';
  var ShadowOpacity2 = 0;

  var hideaccepting =<Image
  style = {{width: 85,height: 80, marginBottom: 20, marginLeft: 15,}}
  source = {imageUrl2}
  />;

  if (optionColor2 === true) {
    BGColor2 = '#ffffff';
    HeaderColor2 = '#0ca3bc';
    TextColor2 = '#49b204';
    ShadowColor2 = '#0ca3bc';
    ShadowOpacity2 = 0.15;
    ButtonColor = '#34a3bd';
    ButtonBorder = '#0ca3bc';
    ButtonText = '#ffffff';
    hideaccepting = <LottieView
    source={require('../../assets/lottieFiles/accepting_option.json')}
    style={{ width: 100,height: 132, marginBottom: 32,left:-8.5, marginRight: -67, top: -1}}
    autoPlay
    loop
    />
  }

  return (
    <View style={SignUpStyles.container}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 70,
          left: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => Actions.login()}>
        <Image
          source={require('../../assets/icon/next.png')}
          style={
            {width: 25, height: 30, 
            transform: [{rotateY: '180deg'}],
          }}></Image>
        <Text></Text>
      </TouchableOpacity>
      {/* HEADER TEXT */}
      <View style={SignUpStyles.headerContainer}>
        <Text style={SignUpStyles.header}>How will you be using Foodfull?</Text>
        <Text style={SignUpStyles.subheader}>Choose One</Text>
      </View>

      <View style={SignUpStyles.optionContainer}>
        <View style={SignUpStyles.MainSignup}>
          {/* DONATING FOOD BOX */}
          <TouchableOpacity
            onPress={() => ChangeColor1()}
            style={[
              SignUpStyles.option1,
              {
                backgroundColor: BGColor1,
                shadowColor: ShadowColor1,
                shadowOpacity: ShadowOpacity1,
              },
            ]}>
            <Text
              style={{
                color: HeaderColor1,
                fontSize: 20,
                marginLeft: 45,
                fontWeight: '600',
              }}>
              Donating Food
            </Text>

            <View style={SignUpStyles.optioninfo}>
              <View>
              {hidedonating}
              </View>

              <View style={{margin: 20}}>
                <Text style={{color: TextColor1, width: 175, fontSize: 18,}}>
                  Grocery store and markets restaurants
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* END OF DONATING FOOD BOX */}

          {/* /////////////////////////////// */}

          {/* ACCEPTING FOOD BOX */}

          <TouchableOpacity
            onPress={() => ChangeColor2()}
            style={[
              SignUpStyles.option2,
              {
                backgroundColor: BGColor2,
                shadowColor: ShadowColor2,
                shadowOpacity: ShadowOpacity2,
              },
            ]}>
            <Text
              style={{
                color: HeaderColor2,
                fontSize: 20,
                marginLeft: 57,
                fontWeight: '600',
              }}>
              Accepting Food
            </Text>

            <View style={SignUpStyles.optioninfo}>
              <View>
              {hideaccepting}
              </View>

              <View style={{margin: 20}}>
                <Text style={{color: TextColor2, width: 250, fontSize: 18,}}>
                  Food banks, non profit organization and shelters
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* END OF ACCEPTING FOOD BOX */}
        </View>

        {/* NEXT BUTTON*/}
        <View style={SignUpStyles.buttonContainer}>
          <TouchableOpacity
            style={[
              SignUpStyles.button,
              {borderColor: ButtonBorder, backgroundColor: ButtonColor},
            ]}
            onPress={changePage}>
            <Text style={[SignUpStyles.buttonText, {color: ButtonText}]}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default SignUp;
