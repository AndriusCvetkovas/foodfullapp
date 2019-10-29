/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, useState} from 'react';
import {View,Text,Image,TouchableOpacity,AsyncStorage} from 'react-native';
import footerStyle from '../styles/footerStyle';

function Appfooter() {
   const[currentPag, setPage] = useState('home');

if (currentPag ==='donate'){
  pag = ('<Donate/>');
  _storeData = async () => {
    try {
      await AsyncStorage.setItem(pag);
    } catch (error) {
      // Error saving data
    }
  };
}
  

    return (
      <View style={footerStyle.comp}>
        <View style={footerStyle.iconsFooter}>
        <TouchableOpacity>
            <Image
              resizeMode="contain" 
              style={footerStyle.sizeIcon}
              source={require('../images/assets/icon/home.png')}
            />
          </TouchableOpacity>
            <Text style={footerStyle.label}>Home</Text>
          </View>
          <View style={footerStyle.iconsFooter}>
          <TouchableOpacity>
            <Image 
              resizeMode="contain"
              style={footerStyle.sizeIcon}
              source={require('../images/assets/icon/schedule.png')}
            />
            </TouchableOpacity>
            <Text style={footerStyle.label}>Schedule</Text>
            
          </View>
          <View style={footerStyle.iconsFooter}>
          <TouchableOpacity 
          onPress={() => {setPage('donate')}}
          >
            <Image
              resizeMode="contain"
              style={footerStyle.sizeIcon}
              source={require('../images/assets/icon/donate_active.png')}
            />
            </TouchableOpacity>

            <Text style={footerStyle.label}>Donate</Text>
          </View>
          <View style={footerStyle.iconsFooter}>
          <TouchableOpacity>
            <Image 
              resizeMode="contain"
              style={footerStyle.sizeIcon}
              source={require('../images/assets/icon/notif.png')}
            />
            </TouchableOpacity>
            <Text style={footerStyle.label}>Notifications</Text>
            
          </View>
          <View style={footerStyle.iconsFooter}>
          <TouchableOpacity>
            <Image 
              resizeMode="contain"
              style={footerStyle.sizeIcon}
              source={require('../images/assets/icon/profile.png')}
            />
             </TouchableOpacity>
            <Text style={footerStyle.label}>Account</Text>
           
          </View>
        
        </View>  
    );
   }
 
   export default Appfooter

