/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View,Text} from 'react-native';
import headerStyle from '../styles/headerStyle';
import DonationPen from '../comps/DonationPen';
import Accpending from './Accpending';
import LoginPage from './LoginPage';


function AppContent() {
  return (
    <View>
   <LoginPage /> 
   
    </View>
  );
}


export default AppContent;
