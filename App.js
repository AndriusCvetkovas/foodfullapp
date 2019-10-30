/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View,Text, ScrollView} from 'react-native';


import mainStyle from './styles/mainStyle';
import AppHeader from './comps/header';
import AppFooter from './comps/footer';
import AppContent from './comps/AppContent';
import {Actions} from 'react-native-router-flux';


function App() {
  return (
    <View style={mainStyle.App}>
      

      <View style={mainStyle.AppContent}>
        <AppContent/>
      </View> 

      <View style={mainStyle.AppFooter}>
        <AppFooter/>
      </View>
     
    </View>
  );
}


export default App;
