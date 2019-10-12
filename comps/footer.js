/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View,Text,Image} from 'react-native';
import footerStyle from '../styles/footerStyle';


function Appfooter() {


  return (
  
    <View style={footerStyle.comp}>
           
           <View style={footerStyle.iconsFooter}>
              <Image
                resizeMode="contain" 
                style={{width: 25, height: 25}}
                source={require('../assets/icon/home.png')}
              />
              <Text style={footerStyle.label}>Home</Text>
            </View>
            <View style={footerStyle.iconsFooter}>
              <Image 
                resizeMode="contain"
                style={{width: 25, height: 25}}
                source={require('../assets/icon/schedule.png')}
              />
              <Text style={footerStyle.label}>Schedule</Text>
            </View>
            <View style={footerStyle.iconsFooter}>
              <Image
                resizeMode="contain"
                style={{width: 50, height: 50}}
                source={require('../assets/icon/donate.png')}
              />
            </View>
            <View style={footerStyle.iconsFooter}>
              <Image 
                resizeMode="contain"
                style={{width: 25, height: 25, paddingTop:10}}
                source={require('../assets/icon/notif.png')}
              />
              <Text style={footerStyle.label}>Notifications</Text>
            </View>
            <View style={footerStyle.iconsFooter}>
              <Image 
                resizeMode="contain"
                style={{width: 25, height: 25}}
                source={require('../assets/icon/profile.png')}
              />
              <Text style={footerStyle.label}>Account</Text>
            </View>
            
    </View>
  );
}


export default Appfooter;
