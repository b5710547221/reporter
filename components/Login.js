import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';


class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:2}}></View>
        <View style={{flex:3}}>
          <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
            <View style={{flex:3,alignItems:'center'}}><Text>ชื่อผู้ใช้</Text></View>
            <View style={{flex:7,alignItems:'center'}}><TextInput style={{width:200}}/></View>
          </View>
          <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
            <View style={{flex:3,alignItems:'center'}}><Text>รหัสผ่าน</Text></View>
            <View style={{flex:7,alignItems:'center'}}><TextInput style={{width:200}}/></View>
          </View>
        </View>
        <View style={{flex:3,justifyContent:'space-around',alignItems:'center'}}>
          <Button onPress={()=>this.props.navigation.navigate('Home')} title='เข้าสู่ระบบ'/>
          <Button title='ลงทะเบียน'/>
        </View>
        <View style={{flex:2}}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

module.exports = Login;