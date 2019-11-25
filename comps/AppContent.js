/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, AsyncStorage, Navigator } from 'react-native';
import { Router, Scene, Overlay, Stack, Lightbox, Drawer, Actions, Tabs, Animations, Schema } from 'react-native-router-flux';
import GMap from './GMap';
import Dashboard from './Dashboard';
import Confirmation from './Confirmation';
import DashboardAccept from './DashboardAccept';
import DonationPen from '../comps/DonationPen';
import AccountCreate from './login/AccountCreate';
import LoginPage from './login/LoginPage';
import SignUp from './login/SignUp';
import AcceptingSignUp from './login/AcceptingSignUp';
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
import LeaderBoard from './profile/Leaderboard';
import Profile from './profile/Profile';
import Appfooter from './footer';
import DonNotification from './DonNotification';
import Schedule from './Schedule';
import GMapAccept from './GMapAccept';
import DonNotificationAccepted from './DonNotificationAccepted';
import DonNotificationDeclined from './DonNotificationDeclined';
import MsgDeclineDonation from './MsgDeclineDonation';
import AppHeader from './header';
import GetStarted from './getStarted';
import Home from './Home';


function AppContent() {
  return (


    <Router>

      <Stack key='root'>
      <Scene
          key="home"
          component={Home}
          title="Home"
          hideNavBar={true}
          initial
        />
        <Scene
          key="login"
          component={LoginPage}
          title="login"
          hideNavBar={true}
        />
        <Scene
          key="signup"
          component={SignUp}
          title="Sign Up"
          hideNavBar={true}
          gesturesEnabled={false}
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
        <Scene
          key="onboarding"
          component={GetStarted}
          title="Account Created"
          hideNavBar={true}
        />
        <Tabs
          key="tabbar0"

          wrap={false}
          hideNavBar={true}
          tabBarComponent={Appfooter}
          modal
          gesturesEnabled={false}
        >
          <Scene
            key="dashboard0"
            component={Dashboard}
            title="Dashboard"
            hideNavBar={true}
            panHandlers={null}
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
            schema="modal"
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
          key='info'
          component={Info}
          title="info"
          hideNavBar={true}
          />
          <Scene
          key='conf'
          component={DConfMap}
          title="confirmation"
          hideNavBar={true} />
          <Scene
            key="leaderboard"
            component={LeaderBoard}
            title='lb'
            hideNavBar={true}
            />
        </Tabs>

         <Drawer
          key="tabbar1"
          gesturesEnabled={false}
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
            key="leaderboard"
            component={LeaderBoard}
            title='lb'
            hideNavBar={true}
            />
        </Drawer>
        <Scene
        gesturesEnabled={false}
          key='map'
          component={GMap}
          title='Map'
          hideNavBar={true}
          />
          <Scene
          gesturesEnabled={false}
            key='mapaccept'
            component={GMapAccept}
            title='Map'
            hideNavBar={true}
            />

      </Stack>
    </Router >


  );
}


export default AppContent;
