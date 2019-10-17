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

function AppContent() {
  return (
      <ScrollView style = {ContentStyle.comp}>
        <GMap />
      </ScrollView>
        
  );
}


export default AppContent;
