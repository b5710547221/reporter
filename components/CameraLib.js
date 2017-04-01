import React from "react";
import { CameraRoll, Image, StyleSheet, Text, View } from "react-native";
import CameraRollPicker from "react-native-camera-roll-picker";

class CameraLib extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
