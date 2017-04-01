import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Home from './components/Home';
import Login from './components/Login';



const App = StackNavigator({
  Main: {screen: Home},
  Login: {screen: Login},
});

export default App