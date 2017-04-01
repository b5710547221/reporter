import React from 'react';
import { StyleSheet, ScrollView, Image, Text, View, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';

export default class ReportDetail_more extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.TopView}>
          <Text style={styles.TopText}>รายละเอียดแจ้งเหตุ</Text>
        </View>
        <View style={styles.MidView}>
          <Text><Text style={styles.MidText}>หมวดหมู่: </Text><Text>อนาจาร</Text></Text>
          <Text><Text style={styles.MidText}>สถานที่เกิดเหตุ: </Text><Text>ซอย สาธรแมนชั่น 1 แขวง คลองต้นไทร เขต คลองสาน กรุงเทพมหานคร 10600</Text></Text>
          <Text><Text style={styles.MidText}>เวลาเกิดเหตุ: </Text><Text>10:12    2/4/60</Text></Text>
          <View style={styles.PicView}>
            <Image source={require('../img/pic1.jpg')} style={{width: 200, height: 200}} />
          </View>
          <View style={styles.ProgbarView}>
            <Progress.Bar progress={0.6666666} width={270} />
            <Text>เจ้าหน้าที่กำลังเดินทางมา</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex:2}}></View>
            <View style={{flex:3}}>
            <TouchableOpacity style={styles.ButtonContainer} onPress={()=>this.props.navigation.navigate('ReportStack')}>
              <Text style={styles.ButtonText}>ยกเลิก</Text>
            </TouchableOpacity>
            </View>
            <View style={{flex:2}}></View>
          </View>
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
  MidView: {
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
  },
  MidText: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  PicView: {
    alignItems: 'center',
    marginBottom: 25,
    marginTop: 25,
  },
  ProgbarView: {
    marginBottom: 25,
    alignItems: 'center',
  },
  TopView: {
    backgroundColor: 'rgba(0, 122, 255, 1)',
    alignItems: 'center',
    padding: 10,
    marginBottom: 25,
  },
  TopText: {
    color: 'white',
    fontSize: 30,
  },
  ButtonContainer: {
    backgroundColor: 'rgba(0, 122, 255, 1)',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
  },
  ButtonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
  },
});

module.exports = ReportDetail_more;