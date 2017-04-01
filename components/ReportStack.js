import React from 'react';
import { StyleSheet, ScrollView, Image, Text, View, TouchableOpacity } from 'react-native';
import * as Progress from './react-native-progress';

export default class ReportStack extends React.Component {
  render() {
    return (
        <View>
            <View style={styles.TopView}>
                <Text style={styles.TopText}>รายการแจ้งเหตุ</Text>
            </View>
            <TouchableOpacity style={styles.ProgboxView}>
              <Text>
                <Text style={styles.ProgboxText}>หมวดหมู่: </Text><Text style={{color: 'rgba(0, 122, 255, 1)'}}>จราจร</Text>
              </Text>
              <View style={styles.ProgboxView}>
                <Progress.Bar progress={0.1} width={240} />
                <Text>เจ้าหน้าที่รับเรื่องแล้ว</Text>
              </View>
              <Text>1/4/60    10:15</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ProgboxView} onPress={()=>this.props.navigation.navigate('ReportDetail_more')}>
              <Text>
                <Text style={styles.ProgboxText}>หมวดหมู่: </Text><Text style={{color: 'rgba(0, 122, 255, 1)'}}>อนาจาร</Text>
              </Text>
              <View style={styles.ProgboxView}>
                <Progress.Bar progress={0.6666666} width={240} />
                <Text>เจ้าหน้าที่กำลังเดินทางมา</Text>
              </View>
              <Text>1/4/60    10:12</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex:2}}></View>
              <View style={{flex:3}}>
                <TouchableOpacity style={styles.ButtonContainer} onPress={()=>this.props.navigation.navigate('Home')}>
                  <Text style={styles.ButtonText}>กลับหน้าแรก</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex:2}}></View>
            </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
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
  ProgboxView: {
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: 'white',
      padding: 10,
      marginBottom: 10
  },
  ProgboxText: {
    color: 'rgba(0, 122, 255, 1)',
    fontWeight: 'bold',
  },
  ProgbarView: {
    marginBottom: 25,
    alignItems: 'center',
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

module.exports = ReportStack;