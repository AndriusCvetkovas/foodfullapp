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
import {Router, Scene, Overlay, Stack, Lightbox} from 'react-native-router-flux';
import GMap from './GMap';
import Dashboard from './Dashboard';
import Confirmation from './Confirmation';
import DashboardAccept from './DashboardAccept';

import Info from './DInfoMap';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import DonationSign from './DonationSign';
function AppContent() {
  return (
    <Router>
      <Scene key='root'>
        <Scene
          key="login"
          component={LoginPage}
          title="login"
          initial
          />
          <Scene
          key="signup"
          component={SignUp}
          title="Sign Up"
          />
          <Scene
          key="donationsign"
          component={DonationSign}
          title="Almost"
          />
        <Scene
          key="dashboard"
          component={Dashboard}
          title="Home"
        ></Scene>
        
        <Overlay
          key="map"
          component={GMap}
          title="Map"
        ></Overlay>
          <Scene
            key="Info"
            component={Info}
            title="Information"
          ></Scene>
        <Scene key = "DConfirmation"
        component={Confirmation}
        title="Confirmation"
        />
        
      </Scene>
    </Router>
      
  );
}


export default AppContent;
