/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View,Text,ImageBackground} from 'react-native';
import AppHeaderStyle from '../styles/headerStyle';



function Appheader() {
  return (
    <View style={AppHeaderStyle.comp}>
      <ImageBackground source={require('../assets/img/header.png')} style={AppHeaderStyle.background}>
      <Text style={AppHeaderStyle.TextStyle}>FoodFull</Text>
  </ImageBackground>
      
    </View>
  );
}


export default Appheader;
