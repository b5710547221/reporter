import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from "react-native-button";

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.viewouter}>
            <Button style={styles.button} onPress={()=>this.props.navigation.navigate('Report')}>แจ้งความ</Button>
            <View style={styles.viewinner}/>
            <Button style={styles.button} onPress={()=>this.props.navigation.navigate('Follow')}>ติดตามผล</Button>
          </View>
          <View style={styles.logout}>
            <Button>ออกจากระบบ</Button>
          </View>  
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
  botton:{
      width:100,
      height:100,
      backgroundColor:'#5bc0de',
      color:'white'
  },
  viewinner:{
      width:80
  },
  logout:{
      width:120
  },
  viewouter:{
      flexDirection:'row'
  }
});

module.exports = Home;
