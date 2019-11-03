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
import Pickup from './pickup';


function DonateContent() {
  const [selectedTab, setSelectedTab] = useState(0);
  var donation = null;
  if (selectedTab === 0){
    donation = (
      <Donations/>
    )
  } else if (selectedTab === 1){
    donation = (
      <Pickup />
    )
  }
  
  return (
    <View style = {ContentStyle.comp}>
      <MaterialTabs
        items={['Donations ','Pick Ups' ]}
        selectedIndex={selectedTab}
        onChange={setSelectedTab}
        barColor="#fff"
        indicatorColor="#b4dc5c"
        activeTextColor="#07a2bb"
        inactiveTextColor="#8d8d8d"
      /> 
    
       {donation}

     
    </View>
  );
}


export default DonateContent;
