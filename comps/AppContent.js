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


function AppContent() {
  return (
    <View>
     <DonationPen />
    </View>
  );
}


export default AppContent;
