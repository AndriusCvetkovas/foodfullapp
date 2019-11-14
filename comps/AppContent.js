/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, AsyncStorage } from 'react-native';
import { Router, Scene, Overlay, Stack, Lightbox } from 'react-native-router-flux';
import GMap from './GMap';
import Dashboard from './Dashboard';
import Confirmation from './Confirmation';
import DashboardAccept from './DashboardAccept';
import DonationPen from '../comps/DonationPen';
import AccountCreate from './AccountCreate';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import DonatingSignUp from './DonatingSignUp';
import AcceptingSignUp from './AcceptingSignUp';
import Donate from './donate';
import Info from './DInfoMap';
import DonateContent from './donateContent';
import DonationPosted from './DonationPosted';
import DConfMap from './DConfMap';
import DInfoMap from './DInfoMap';
import Pickup from './pickup';
import PickedUpComfirm from './PickedUpComfirm';
import NotifPickComfirm from './NotifPickComfirm';
import AcceptDonationNF from './AcceptDonationNF';
import MsgAcceptDonation from './MsgAcceptDonation';
import MsgCancelDonation from './MsgCancelDonation';
import LeaderBoard from './Leaderboard';
import Profile from './Profile';
import Appfooter from './footer';
import DonNotification from './DonNotification';
import Schedule from './Schedule';
import GMapAccept from './GMapAccept';

function AppContent() {
  return (

    /* <View style = {{flex: 1}}>
    <SignUp/>
  </View>
  */


    <Router>
      <Scene key='root' modal>
        <Scene
          key="login"
          component={LoginPage}
          title="login"
          hideNavBar={true}
          initial
        />
        <Scene
          key="signup"
          component={SignUp}
          title="Sign Up"
          hideNavBar={true}
        />
        <Scene
          key="acceptingsignup"
          component={AcceptingSignUp}
          title="Sign Up"
          hideNavBar={true}
        />
        <Scene
          key="accountcreated"
          component={AccountCreate}
          title="Account Created"
          hideNavBar={true}
        />
        <Stack
          key="tabbar0"
          gestureEnabled={false}
          tabs
          hideNavBar
          tabBarComponent={Appfooter}
          wrap={false}
          modal
        >
          <Scene
            key="dashboard0"
            component={Dashboard}
            title="Dashboard"
            hideNavBar={true}
          />
          <Scene
            key='postdonation'
            component={Donate}
            title="Post Donation"
            hideNavBar={true}
          />
          <Scene
            key='confirmdonation'
            component={Confirmation}
            title="Confirm donation"
            hideNavBar={true}
          />
          <Scene
            key='notification0'
            component={DonNotification}
            title="Notifications"
            hideNavBar={true} />
          <Scene
            key='donationposted'
            component={DonationPosted}
            title="Donation posted"
            hideNavBar={true}
          />
          <Scene
            key='profile'
            component={Profile}
            title="profile"
            hideNavBar={true}
          />
          <Scene
            key='schedule'
            component={Schedule}
            title='schedule'
            hideNavBar={true} 
          />
          <Scene
          key='map'
          component={GMap}
          title='Map'
          hideNavBar={true}
          />
        </Stack>

        <Scene
          key="tabbar1"
          gestureEnabled={false}
          tabs
          hideNavBar
          wrap={false}
          tabBarComponent={Appfooter}>
          <Scene
            key="dashboard1"
            component={DashboardAccept}
            title="Dashboard"
            hideNavBar={true}
          />
          <Scene
            key='notification1'
            component={DonateContent}
            title="Notifications"
            hideNavBar={true} />
            <Scene
            key='mapaccept'
            component={GMapAccept}
            title='Map'
            hideNavBar={true}
            />
          <Scene
            key='profile'
            component={Profile}
            title="profile"
            hideNavBar={true}
          />
          <Scene
            key='schedule'
            component={Schedule}
            title='schedule'
            hideNavBar={true} 
          />
        </Scene>

      </Scene>
    </Router >


  );
}


export default AppContent;
