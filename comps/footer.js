/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View,Text,Image,ScrollView, TouchableOpacity} from 'react-native';
import footerStyle from '../styles/footerStyle';
import {Actions} from 'react-native-router-flux';
import Dashboard from './Dashboard.js';

function Appfooter() {


  return (
            <View style={footerStyle.comp}>
          <TouchableOpacity style={footerStyle.iconsFooter}
            onPress ={() => Actions.dashboard()}
          >
              <Image
                resizeMode="contain" 
                style={footerStyle.sizeIcon}
                source={require('../assets/icon/home.png')}
              />
              <Text style={footerStyle.label}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={footerStyle.iconsFooter}>
              <Image 
                resizeMode="contain"
                style={footerStyle.sizeIcon}
                source={require('../assets/icon/schedule.png')}
              />
              <Text style={footerStyle.label}>Schedule</Text>
            </TouchableOpacity>

            <TouchableOpacity style={footerStyle.donateIcon}
            onPress ={() => Actions.map()}
            >
              <Image
                resizeMode="contain"
                style={footerStyle.sizeDonateIcon}
                source={require('../assets/icon/donate.png')}
              />
              <Text style={footerStyle.label}>Donate</Text>

            </TouchableOpacity>
            <TouchableOpacity style={footerStyle.iconsFooter}>
              <Image 
                resizeMode="contain"
                style={footerStyle.sizeIcon}
                source={require('../assets/icon/notif.png')}
              />
              <Text style={footerStyle.label}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={footerStyle.iconsFooter}>
              <Image 
                resizeMode="contain"
                style={footerStyle.sizeIcon}

                source={require('../assets/icon/profile.png')}

              />
              <Text style={footerStyle.label}>Account</Text>
            </TouchableOpacity>
          
          </View> 
           
            
  );
}


export default Appfooter;
