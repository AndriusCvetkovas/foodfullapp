/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import ContentStyle from '../styles/contentStyle';
import GMap from './GMap';
import Dashboard from './Dashboard';
import Confirmation from './Confirmation';

function AppContent() {
  return (
      <View style = {ContentStyle.comp}>
        <Dashboard/>
      </View>
        
  );
}


export default AppContent;
