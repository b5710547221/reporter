import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewouter}>
          <Button
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Report")}
            title="แจ้งความ"
          />
          <View style={styles.viewinner} />
          <Button
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Follow")}
            title="ติดตามผล"
          />
        </View>
        <View style={styles.logout}>
          <Button title="ออกจากระบบ" />
        </View>
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
  },
  botton: {
    width: 200,
    height: 50,
    backgroundColor: "#5bc0de",
    color: "white"
  },
  viewinner: {
    width: 50
  },
  logout: {
    width: 120
  },
  viewouter: {
    flexDirection: "row",
    height: 70,
    marginBottom: 10
  }
});

module.exports = Home;
