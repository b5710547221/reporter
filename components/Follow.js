import React from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
const Item = Picker.Item;
class Follow extends React.Component {
  state = {
    selected1: "key1",
    selected2: "key1",
    selected3: "key1",
    color: "red",
    mode: Picker.MODE_DIALOG
  };
  render() {
    return (
      <Picker
        style={styles.picker}
        selectedValue={this.state.selected1}
        onValueChange={this.onValueChange}
      >
        <Item label="hello" value="key0" />
        <Item label="world" value="key1" />
      </Picker>
    );
  }
  onValueChange = value => {
    const newState = {};
    newState["selected1"] = value;
    this.setState(newState);
  };
}

var styles = StyleSheet.create({
  picker: {
    width: 100
  }
});

module.exports = Follow;
