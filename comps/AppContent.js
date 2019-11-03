/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {View,Text,ScrollView} from 'react-native';
import ContentStyle from '../styles/contentStyle';
// import {Router, Scene, Overlay, Stack, Lightbox} from 'react-native-router-flux';
import GMap from './GMap';
import Dashboard from './Dashboard';
import Confirmation from './Confirmation';
import DashboardAccept from './DashboardAccept';
import DonationPen from '../comps/DonationPen';
import AccountCreate from './AccountCreate';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import DonationSign from './DonationSign';
import Donate from './donate';
import Info from './DInfoMap';
import DonateContent from './donateContent';
import DonationPosted from './DonationPosted';
import DConfMap from './DConfMap';


function AppContent() {
  return (
        <DConfMap/>
    // <Router>
    //   <Scene key='root'>
    //     <Scene
    //       key="login"
    //       component={LoginPage}
    //       title="login"
    //       initial
    //       />
    //       <Scene
    //       key="signup"
    //       component={SignUp}
    //       title="Sign Up"
    //       />
    //       <Scene
    //       key="donationsign"
    //       component={DonationSign}
    //       title="Almost"
    //       />
    //       <Scene
    //       key="donate"
    //       component={Donate}
    //       title="donate"
    //       />
    //       <Scene
    //       key="confirmation"
    //       component={Confirmation}
    //       title="Confirm Your Donation"
    //       />
    //       <Scene
    //       key="notifications"
    //       component={DonateContent}
    //       />
    //     <Scene
    //       key="dashboard"
    //       component={Dashboard}
    //       title="Home"
    //     ></Scene>
        
    //     <Overlay
    //       key="map"
    //       component={GMap}
    //       title="Map"
    //     ></Overlay>
    //       <Scene
    //         key="Info"
    //         component={Info}
    //         title="Information"
    //       ></Scene>
    //     <Scene key = "DConfirmation"
    //     component={Confirmation}
    //     title="Confirmation"
    //     />
        
    //   </Scene>
    // </Router>
      
  );
}


export default AppContent;
