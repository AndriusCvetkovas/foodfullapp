import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import Profile from '../../comps/Profile';
import Leaderboard from '../../comps/Leaderboard';

storiesOf('Page', module)
.add('Profile', () => <Profile />)
.add('Leaderboard', () => <Leaderboard/>);

