import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from "react-native-button";

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={()=>this.props.navigation.navigate('Login')}>Login</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

module.exports = Home;
