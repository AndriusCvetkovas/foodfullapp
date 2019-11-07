import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import LoginPage from '../../comps/LoginPage';
import SignUp from '../../comps/SignUp';
import AcceptingSignUp from '../../comps/AcceptingSignUp';
import DonatingSignUp from '../../comps/DonatingSignUp';
import AccountCreate from '../../comps/AccountCreate';
import Dashboard from '../../comps/Dashboard';
import Donate from '../../comps/donate';
import GMap from '../../comps/GMap';
import Profile from '../../comps/Profile';
import Leaderboard from '../../comps/Leaderboard';
import Schedule from '../../comps/Schedule';
import Confirmation from '../../comps/Confirmation';
import DConfMap from '../../comps/DConfMap';
import DInfoMap from '../../comps/DInfoMap';
import DonateContent from '../../comps/donateContent';
import DonationPosted from '../../comps/DonationPosted';
import PickedUpComfirm from '../../comps/PickedUpComfirm';
import DashboardAccept from '../../comps/DashboardAccept';
import NotifPickComfirm from '../../comps/NotifPickComfirm';
import MsgAcceptDonation from '../../comps/MsgAcceptDonation';
import MsgCancelDonation from '../../comps/MsgCancelDonation';

storiesOf('Page', module)
.add('Profile', () => <Profile />)
.add('Leaderboard', () => <Leaderboard/>)
.add('LoginPage', () => <LoginPage/>)
.add('SignUp', () => <SignUp/>)
.add('AcceptingSignUp', () => <AcceptingSignUp/>)
.add('AccountCreate', () => <AccountCreate/>)
.add('Dashboard', () => <Dashboard/>)
.add('Donate', () => <Donate/>)
.add('Profile', () => <Profile />)
.add('Leaderboard', () => <Leaderboard/>)
.add('GMap', () => <GMap/>)
.add('Schedule', () => <Schedule/>)
.add('Confirmation', () => <Confirmation/>)
.add('DConfMap', () => <DConfMap/>)
.add('DInfoMap', () => <DInfoMap/>)
.add('DonateContent', () => <DonateContent/>)
.add('DonationPosted', () => <DonationPosted/>)
.add('PickedupComfirm', () => <PickedUpComfirm/>)
.add('DashboardAccept', () => <DashboardAccept/>)
.add('NotifPickComfirm', () => <NotifPickComfirm/>)
.add('MsgAcceptDonation', () => <MsgAcceptDonation/>)
.add('MsgCancelDonation', () => <MsgCancelDonation/>);

