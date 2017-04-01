
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import Home from './components/Home';
import Report from './components/Report';
import Follow from './components/Follow';
import Login from './components/Login';
import ReportDetail_first from './components/ReportDetail_first';
import ReportDetail_more from './components/ReportDetail_more';
import ReportStack from './components/ReportStack'
import Register from './components/Register';
import CameraLib from "./components/CameraLib";

const App = StackNavigator({
  Main: {screen: Login},
  Login: {screen: Login},
  Register: {screen: Register},
  Report: {screen: Report},
  Follow: {screen: Follow},
  Home:{screen: Home},
  ReportStack: {screen: ReportStack},
  ReportDetail_more: {screen: ReportDetail_more},
  ReportDetail_first: {screen: ReportDetail_first},
  CameraLib: { screen: CameraLib }
});

export default App;
