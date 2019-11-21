/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import footerStyle from '../styles/footerStyle';
import { Actions } from 'react-native-router-flux';
import Dashboard from './Dashboard.js';
import Schedule from './Schedule';


var type = "";
function Appfooter() {
  //GET USER TYPE 
  const getType = async () =>{
    var json = await AsyncStorage.getItem('type');
    type = json;
    CheckUser();
}
  const [colorHome, changeColorHome] = useState(require('../assets/icon/home_active.png'));
  const [colorSchedule, changeColorSchedule] = useState(require('../assets/icon/schedule.png'));
  const [colorNotif, changeColorNotif] = useState(require('../assets/icon/notif.png'));
  const [colorProfile, changeColorProfile] = useState(require('../assets/icon/profile.png'));
  const [buttonText, changeButtonText] = useState('');
  const [buttonLink, changeButtonLink] = useState('Actions.postdonation()');
  const [mainButton, changeMainButton] = useState(require('../assets/icon/donate.png'));
  const [home, changeHome] = useState('#0ca3bc');
  const [schedule, changeSchedule] = useState('black');
  const [notification, changeNotification] = useState('black');
  const [profile, changeProfile] = useState('black');
  const [plus, changePlus] = useState('black')

  const CheckUser = () => {
    if (type == 1) {
      
      changeButtonText('Search');
      changeMainButton(require('../assets/icon/search_button.png'))
    } else {
      changeButtonText('Donate')
    }
  }
  const Plus = () =>{
    changeColorHome(require('../assets/icon/home.png'));
    changeColorNotif(require('../assets/icon/notif.png'));
    changeColorProfile(require('../assets/icon/profile.png'));
    changeColorSchedule(require('../assets/icon/schedule.png'));
    changeHome('black')
    changeNotification('black');
    changeProfile('black');
    changeSchedule('black');
    changePlus('#0ca3bc')
    if(type == 1){
      Actions.mapaccept();
    }else {
      Actions.refresh({key: 'postdonation'});
      Actions.postdonation();
    }
  }

  function CombinedHome() {
    changeColorHome(require('../assets/icon/home_active.png'));
    changeHome('#0ca3bc')
    changeNotification('black');
    changeProfile('black');
    changeSchedule('black');
    changePlus('black')
    changeColorNotif(require('../assets/icon/notif.png'));
    changeColorProfile(require('../assets/icon/profile.png'));
    changeColorSchedule(require('../assets/icon/schedule.png'));
    if (type == 1) {
      Actions.dashboard1();
    } else {
      Actions.dashboard0();
      
    }
  };
  function CombinedProf(){
    Actions.profile();
    changeHome('black')
    changeNotification('black');
    changeProfile('#0ca3bc');
    changeSchedule('black');
    changePlus('black')
    changeColorHome(require('../assets/icon/home.png'));
    changeColorNotif(require('../assets/icon/notif.png'));
    changeColorProfile(require('../assets/icon/profile_active.png'));
    changeColorSchedule(require('../assets/icon/schedule.png'));
  };
  function CombinedSchedule(){
    Actions.schedule();
    changeHome('black');
    changeNotification('black');
    changeProfile('black');
    changeSchedule('#0ca3bc');
    changePlus('black');
    changeColorHome(require('../assets/icon/home.png'));
    changeColorNotif(require('../assets/icon/notif.png'));
    changeColorProfile(require('../assets/icon/profile.png'));
    changeColorSchedule(require('../assets/icon/schedule_active.png'));
  }
  function CombinedNot() {
    changeHome('black');
    changeNotification('#0ca3bc');
    changeProfile('black');
    changeSchedule('black');
    changePlus('black');
    changeColorHome(require('../assets/icon/home.png'));
    changeColorNotif(require('../assets/icon/notif_active.png'));
    changeColorProfile(require('../assets/icon/profile.png'));
    changeColorSchedule(require('../assets/icon/schedule.png'));
    if (type == 1) {
      Actions.notification1();
    } else {
      Actions.notification0();
    }
  }
  useEffect(() => {
    
    getType();
  }, []);
  return (
    <View style={footerStyle.comp}>
      <TouchableOpacity style={footerStyle.iconsFooter}
        onPress={() => CombinedHome()}
      >
        <Image
          resizeMode="contain"
          style={footerStyle.sizeIcon}
          source={colorHome}
        />
        <Text style={[footerStyle.label, {color: home}]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={footerStyle.iconsFooter}
        onPress={() => CombinedSchedule()}
      >
        <Image
          resizeMode="contain"
          style={footerStyle.sizeIcon}
          source={colorSchedule}
        />
        <Text style={[footerStyle.label, {color: schedule}]}>Schedule</Text>
      </TouchableOpacity>

      <TouchableOpacity style={footerStyle.donateIcon}
        onPress={() => Plus()}
      >
        <Image
          resizeMode="contain"
          style={footerStyle.sizeDonateIcon}
          source={mainButton}
        />
        <Text style={[footerStyle.label,{color: plus}]}>{buttonText}</Text>

      </TouchableOpacity>
      <TouchableOpacity style={footerStyle.iconsFooter}
        onPress={() => CombinedNot()}>
        <Image
          resizeMode="contain"
          style={footerStyle.sizeIcon}
          source={colorNotif}
        />
        <Text style={[footerStyle.label, {color: notification}]}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={footerStyle.iconsFooter}
        onPress={() => CombinedProf()}
      >
        <Image
          resizeMode="contain"
          style={footerStyle.sizeIcon}

          source={colorProfile}

        />
        <Text style={[footerStyle.label, {color: profile}]}>Profile</Text>
      </TouchableOpacity>

    </View>
  );
}
export default Appfooter