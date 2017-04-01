import React from 'react';
import { StyleSheet, Text, View ,Picker} from 'react-native';
import MapView from 'react-native-maps';
class Follow extends React.Component {
 render() {
    return (
           <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
    );
  }
}

module.exports = Follow;
