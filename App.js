import React from 'react';
import { StyleSheet, ScrollView, Image, Text, View } from 'react-native';
import * as Progress from './components/react-native-progress';

export default class ProcessActivity extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.TopView}>
          <Text style={styles.TopText}>This is subject</Text>
        </View>
        <View style={styles.MidView}>
          <Text style={styles.MidText}> หมวดหมู่: </Text>
          <Text style={styles.MidText}> สถานที่เกิดเหตุ: </Text>
          <Text style={styles.MidText}> เวลาเกิดเหตุ: </Text>
        </View>
        <Image source={require('./img/pic1.jpg')} />
        <Text>เจ้าหน้าที่รับเรื่องแล้ว</Text>
        <Progress.Bar progress={0.5} width={270} />
        <View style={styles.button}>
          <Text style={color= 'white'}>ยกเลิก</Text>
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
    margin: 2,
    backgroundColor: '#fff',
  },
  MidText: {
    color: 'black',
    fontWeight: 'bold',
  },
  TopView: {
    backgroundColor: 'rgba(0, 122, 255, 1)',
    alignItems: 'center',
    padding: 10,
  },
  TopText: {
    color: 'white',
    fontSize: 30,
  },
  button: {
    backgroundColor: 'brown',
    padding: 7,
  },
});
