/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, { useState, useEffect } from 'react';
import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, AsyncStorage, Navigator} from 'react-native';
import {
  Router,
  Scene,
  Overlay,
  Stack,
  Lightbox,
  Drawer,
  Actions,
  Tabs,
  Animations,
  Schema,
} from 'react-native-router-flux';
import GMap from './donatingSide/GMap';
import Dashboard from './donatingSide/Dashboard';
import Confirmation from './donatingSide/Confirmation';
import DashboardAccept from './acceptingSide/DashboardAccept';
import AccountCreate from './login/AccountCreate';
import GetStarted from './homeOnboarding/getStarted';
import LoginPage from './login/LoginPage';
import SignUp from './login/SignUp';
import AcceptingSignUp from './login/AcceptingSignUp';
import Donate from './donatingSide/donate';
import Info from './acceptingSide/DInfoMap';
import DonateContent from './acceptingSide/donateContent';
import DonationPosted from './donatingSide/DonationPosted';
import DConfMap from './acceptingSide/DConfMap';
import LeaderBoard from './profile/Leaderboard';
import Profile from './profile/Profile';
import Appfooter from './footer';
import DonNotification from './donatingSide/DonNotification';
import Schedule from './Schedule';
import GMapAccept from './acceptingSide/GMapAccept';
import Home from './homeOnboarding/Home';
import ChooseDonation from './donatingSide/ChooseDonation';

function AppContent() {
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="home"
          component={Home}
          title="Home"
          hideNavBar={true}
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
        <Scene
          gesturesEnabled={false}
          key="mapaccept"
          component={GMapAccept}
          title="Map"
          hideNavBar={true}
        />
        <Tabs
          key="tabbar0"
          wrap={false}
          hideNavBar={true}
          tabBarComponent={Appfooter}
          modal
          gesturesEnabled={false}>
          <Scene
            key="dashboard0"
            component={Dashboard}
            title="Dashboard"
            hideNavBar={true}
            panHandlers={null}
            initial
          />
          <Scene 
          key='choosedonation'
          component={ChooseDonation}
          hideNavBar={true}
          
          />
          <Scene
            key="postdonation"
            component={Donate}
            title="Post Donation"
            hideNavBar={true}
          />
          <Scene
            key="confirmdonation"
            component={Confirmation}
            title="Confirm donation"
            hideNavBar={true}
          />
          <Scene
            key="notification0"
            component={DonNotification}
            title="Notifications"
            schema="modal"
            hideNavBar={true}
          />
          <Scene
            key="donationposted"
            component={DonationPosted}
            title="Donation posted"
            hideNavBar={true}
          />
          <Scene
            key="profile"
            component={Profile}
            title="profile"
            hideNavBar={true}
          />
          <Scene
            key="schedule"
            component={Schedule}
            title="schedule"
            hideNavBar={true}
          />
          <Scene key="info" component={Info} title="info" hideNavBar={true} />
          <Scene
            key="conf"
            component={DConfMap}
            title="confirmation"
            hideNavBar={true}
          />
          <Scene
            key="leaderboard"
            component={LeaderBoard}
            title="lb"
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
            initial
          />
          <Scene
            key="notification1"
            component={DonateContent}
            title="Notifications"
            hideNavBar={true}
          />

          <Scene
            key="profile"
            component={Profile}
            title="profile"
            hideNavBar={true}
          />
          <Scene
            key="schedule"
            component={Schedule}
            title="schedule"
            hideNavBar={true}
          />
          <Scene
            key="leaderboard"
            component={LeaderBoard}
            title="lb"
            hideNavBar={true}
          />
        </Drawer>
        <Scene
          gesturesEnabled={false}
          key="map"
          component={GMap}
          title="Map"
          hideNavBar={true}
        />
      </Stack>
    </Router>
  );
}

export default AppContent;
