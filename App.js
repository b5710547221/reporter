import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Home from './components/Home';
import Report from './components/Report';
import Follow from './components/Follow';



const App = StackNavigator({
  Main: {screen: Home},
  Report: {screen: Report},
  Follow: {screen: Follow}
});

export default App