/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import footerStyle from '../styles/footerStyle';
import { Actions } from 'react-native-router-flux';
import Dashboard from './Dashboard.js';
import Schedule from './Schedule';


var type = "";
function Appfooter() {
  //GET USER TYPE 
  const getType = async () =>{
    var json = await AsyncStorage.getItem('type');
    type = json;
}
  const [color, changeColor] = useState(require('../assets/icon/home.png'));
  const [buttonText, changeButtonText] = useState('');
  const [buttonLink, changeButtonLink] = useState('Actions.postdonation()');
  

  const CheckUser = () => {
    if (type == 1) {
      
      changeButtonText('Claim');
    } else {
      changeButtonText('Donate')
    }
  }
  const Plus = () =>{
    if(type == 0){
      Actions.postdonation();
    }else {
      Actions.map1();
    }
  }

  function CombinedHome() {
    if (type == 1) {
      Actions.tabbar1();
    } else {
      Actions.tabbar0();
    }
    changeColor(require('../assets/icon/home_active.png'))
  };
  function CombinedNot() {
    if (type == 1) {
      Actions.notification1();
    } else {
      Actions.notification0();
    }
  }
  useEffect(() => {
    CheckUser();
    getType();
  }, []);
  return (
    <View style={footerStyle.comp}>
      <TouchableOpacity style={footerStyle.iconsFooter}
        onPress={() => CombinedHome()}
      >
        <Image
          resizeMode="contain"
          style={footerStyle.sizeIcon}
          source={color}
        />
        <Text style={footerStyle.label}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={footerStyle.iconsFooter}
        onPress={() => Actions.schedule()}
      >
        <Image
          resizeMode="contain"
          style={footerStyle.sizeIcon}
          source={require('../assets/icon/schedule.png')}
        />
        <Text style={footerStyle.label}>Schedule</Text>
      </TouchableOpacity>

      <TouchableOpacity style={footerStyle.donateIcon}
        onPress={() => Plus()}
      >
        <Image
          resizeMode="contain"
          style={footerStyle.sizeDonateIcon}
          source={require('../assets/icon/donate.png')}
        />
        <Text style={footerStyle.label}>{buttonText}</Text>

      </TouchableOpacity>
      <TouchableOpacity style={footerStyle.iconsFooter}
        onPress={() => CombinedNot()}>
        <Image
          resizeMode="contain"
          style={footerStyle.sizeIcon}
          source={require('../assets/icon/notif.png')}
        />
        <Text style={footerStyle.label}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={footerStyle.iconsFooter}
        onPress={() => Actions.profile()}
      >
        <Image
          resizeMode="contain"
          style={footerStyle.sizeIcon}

          source={require('../assets/icon/profile.png')}

        />
        <Text style={footerStyle.label}>Account</Text>
      </TouchableOpacity>

    </View>
  );
}
export default Appfooter