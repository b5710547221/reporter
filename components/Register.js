import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Picker, Item } from 'react-native';
import DatePicker from 'react-native-datepicker';

class Register extends React.Component {
  constructor(props){
    super(props)
    this.state = new Date()
  }
 render() {
    return (
      <View style={styles.container}>
        <View style={{flex:5}}></View>
        <View style={{flex:10,justifyContent:'center',alignItems:'center'}}>
          <Text>สมัครสมาชิก</Text>
        </View>
        <View style={{flex:65}}>
          <View style={{flex:10,flexDirection:'row'}}>
            <View style={styles.textInputLabel}><Text>ชื่อผู้ใช้</Text></View>
            <View style={styles.textInputBox}><TextInput /></View>
          </View>
          <View style={{flex:10,flexDirection:'row'}}>
            <View style={styles.textInputLabel}><Text>รหัสผ่าน</Text></View>
            <View style={styles.textInputBox}><TextInput secureTextEntry={true} /></View>
          </View>
          <View style={{flex:10,flexDirection:'row'}}>
            <View style={styles.textInputLabel}><Text>อีเมล์</Text></View>
            <View style={styles.textInputBox}><TextInput /></View>
          </View>
          <View style={{flex:10,flexDirection:'row'}}>
            <View style={styles.textInputLabel}><Text>รหัสประจำตัวประชาชน</Text></View>
            <View style={styles.textInputBox}><TextInput maxLength={13} /></View>
          </View>
          <View style={{flex:10,flexDirection:'row'}}>
            <View style={styles.textInputLabel}><Text>วันเกิด</Text></View>
            <View style={styles.textInputBox}>
              <DatePicker
                mode="date"
                date={this.state.date}
                placeholder="เลือกวันเกิด"
                format="DD-MM-YYYY"
                confirmBtnText="ตกลง"
                cancelBtnText="ยกเลิก"
                onDateChange={(date) => {this.setState({date: date})}}
              />
            </View>
          </View>
          <View style={{flex:10,flexDirection:'row'}}>
            <View style={styles.textInputLabel}><Text>เบอร์โทรศัพท์</Text></View>
            <View style={styles.textInputBox}>
              <TextInput maxLength={10} />
            </View>
          </View>
          <View style={{flex:40,flexDirection:'row'}}>
            <View style={styles.textInputLabel}><Text>ที่อยู่</Text></View>
            <View style={styles.textInputBox}>
              <TextInput multiline={true} numberOfLines={8} />
            </View>
          </View>
        </View>
        <View style={{flex:10,justifyContent:'center',alignItems:'center'}}>
          <Button onPress={()=>this.props.navigation.navigate('Home')} title="ยืนยัน" />
        </View>
        <View style={{flex:10}}></View>
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
  textInputLabel:{
    flex:47,
    justifyContent:'center',
    marginLeft:10,
  },
  textInputBox:{
    flex:53,
    justifyContent:'center',
    marginLeft:10,
  },
});

module.exports = Register;
