import React from "react";
import { CameraRoll, Image, StyleSheet, Text, View, Button } from "react-native";
import CameraRollPicker from "react-native-camera-roll-picker";

class CameraLib extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{width:360}}>
          <Button onPress={()=>this.props.navigation.navigate('Report')} title="&#10004;"></Button>
        </View>
        <CameraRollPicker callback={this.getSelectedImages} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

module.exports = CameraLib;
