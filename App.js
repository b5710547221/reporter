import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Home from './components/Home';
import Report from './components/Report';
import Follow from './components/Follow';
import Login from './components/Login';



const App = StackNavigator({
  Main: {screen: Login},
  Report: {screen: Report},
  Follow: {screen: Follow},
  Home:{screen: Home}
});

export default App