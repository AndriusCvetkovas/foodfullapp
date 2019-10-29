/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {View,Text,ScrollView} from 'react-native';
import MaterialTabs from 'react-native-material-tabs';
import ContentStyle from '../styles/contentStyle';
import Donations from '../comps/donation';
import Donate from './donate';
import Pickup from './pickup';
import DonateContent from './donateContent';
import Appfooter from './footer'


function AppContent() {
  const [defaultComp, setComp] = useState('currentPage');
  currentPage = (<Donate/>);

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem(pag);
      if (value !== null) {
        // We have data!!
        currentPage = page;
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  

  return (
   
  
       <Donate/>
   
  );
}


export default AppContent;
