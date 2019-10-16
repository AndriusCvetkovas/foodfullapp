/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View,Text,Image,ScrollView} from 'react-native';
import footerStyle from '../styles/footerStyle';


function Appfooter() {


  return (
            <View style={footerStyle.comp}>
          <View style={footerStyle.iconsFooter}>
              <Image
                resizeMode="contain" 
                style={footerStyle.sizeIcon}
                source={require('../images/assets/icon/home.png')}
              />
              <Text style={footerStyle.label}>Home</Text>
            </View>
            <View style={footerStyle.iconsFooter}>
              <Image 
                resizeMode="contain"
                style={footerStyle.sizeIcon}
                source={require('../images/assets/icon/schedule.png')}
              />
              <Text style={footerStyle.label}>Schedule</Text>
            </View>
            <View style={footerStyle.iconsFooter}>
              <Image
                resizeMode="contain"
                style={footerStyle.sizeIcon}
                source={require('../images/assets/icon/donate_active.png')}
              />
              <Text style={footerStyle.label}>Donate</Text>
            </View>
            <View style={footerStyle.iconsFooter}>
              <Image 
                resizeMode="contain"
                style={footerStyle.sizeIcon}
                source={require('../images/assets/icon/notif.png')}
              />
              <Text style={footerStyle.label}>Notifications</Text>
            </View>
            <View style={footerStyle.iconsFooter}>
              <Image 
                resizeMode="contain"
                style={footerStyle.sizeIcon}
                source={require('../images/assets/icon/profile.png')}
              />
              <Text style={footerStyle.label}>Account</Text>
            </View>
          
          </View> 
           
            
  );
}


export default Appfooter;
