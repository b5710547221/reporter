import React , { Component } from "react";
import { Image, StyleSheet, Text, View, Picker, TextInput,TouchableOpacity,ScrollView, Button, WebView } from "react-native";
import DatePicker from "react-native-datepicker";
const Item = Picker.Item;
const ARC_DE_TRIOMPHE_POSITION = {
  lat: 48.873947,
  lng: 2.295038
};

const EIFFEL_TOWER_POSITION = {
  lat: 48.858608,
  lng: 2.294471
};
class Report extends React.Component {
  state = {
    selected1: "key0",
    selected2: "key0",
    selected3: "key0",
    color: "red",
    mode: Picker.MODE_DIALOG
  };
  render() {
    return (
      <View style={{backgroundColor:"white"}}>
        <ScrollView>
          <Picker
            style={styles.picker}
            selectedValue={this.state.selected1}
            onValueChange={this.onValueChange}
          >
            <Item label="กรุณาเลือกหมวดหมู่" value="key0" />
            <Item label="จราจร" value="key1" />
            <Item label="โจรกรรม" value="key2" />
            <Item label="ทำร้ายร่างกาย" value="key3" />
            <Item label="อนาจาร" value="key4" />
          </Picker>
          <Text style={{marginLeft:10}}>รายละเอียด*:</Text>
          <View style={styles.item}>
            <TextInput
              multiline={true} //prop
              style={{
                height: 80,
                width: 330,
                color: "black",
                backgroundColor:"#cfcbcb",
                borderWidth: 1
              }}
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
              tintColor={"black"}
            />
          </View>
          <View style={{marginTop:15,marginLeft:10}}>
            <Text>วันที่*:</Text>
            <DatePicker
              date={new Date()}
              mode="date"
              placeholder="เลือกวันที่เกิดเหตุ"
              format="DD-MM-YYYY"
              confirmBtnText="ตกลง"
              cancelBtnText="ยกเลิก"
            />
          </View>
          <View style={{marginTop:15,marginLeft:10}}>
            <Text>เวลา*:</Text>
            <View style={{ flexDirection: "row",marginLeft:10 }}>
              <Picker
                style={styles.pickerTime}
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChangeTime}
              >
                {[...Array(24)].map((item, i) => (
                  <Item key={i} label={i.toString()} value={`key${i}`} />
                ))}
              </Picker>
              <View style={{ width: 10 }} />
              <Picker
                style={styles.pickerMinute}
                selectedValue={this.state.selected3}
                onValueChange={this.onValueChangeMinute}
              >
                {[...Array(60)].map((item, i) => (
                  <Item key={i} label={i.toString()} value={`key${i}`} />
                ))}
              </Picker>
            </View>
          </View>
          <View style={{marginTop:15}}>
            <Text style={{marginLeft:10}} >สถานที่เกิดเหตุ*:</Text>
            <View style={styles.PicView}>
                <Image source={require('../img/gps.png')} style={{width: 360, height: 200}} />
            </View>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems: "center"}}>
            <View style={styles.touch}>
              <Text style={{marginTop:15}}>สื่อประกอบคำให้การ:</Text>
              <TouchableOpacity style={styles.ProgboxView} onPress={()=>this.props.navigation.navigate('CameraLib')}>
                  <Image source={require('../img/Upload_Upload.png')} style={{width: 150, height:  150}} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.logout}>
            <Button style={{width:150}} onPress={()=>this.props.navigation.navigate('ReportDetail_first')} title="ยืนยัน"></Button>
          </View>
         </ScrollView>
      </View>
    );
  }
  onValueChange = value => {
    const newState = {};
    newState["selected1"] = value;
    this.setState(newState);
  };
  onValueChangeTime = value => {
    const newState = {};
    newState["selected2"] = value;
    this.setState(newState);
  };
  onValueChangeMinute = value => {
    const newState = {};
    newState["selected3"] = value;
    this.setState(newState);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  pickerTime: {
    width: 50
  },
  pickerMinute: {
    width: 60
  },
  PicView:{
    width:300,
    marginTop:15
  },
  touch:{
    width:330,
    height:250,
    marginTop:25,
    flex:1,
    justifyContent:'center',
    alignItems: "center",
    backgroundColor:"#cfcbcb",
    borderTopColor: "#8c8a8a",
    borderTopWidth: 2,
    borderTopRightRadius: 2,
    borderLeftColor: "#8c8a8a",
    borderLeftWidth: 2,
    borderTopLeftRadius: 2,
    borderRightColor: "#8c8a8a",
    borderRightWidth: 2,
    borderBottomColor: "#8c8a8a",
    borderBottomWidth: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  picker:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logout:{
    marginTop:30,
    marginBottom:30
  },
  item:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  ProgboxView:{
    marginTop:15
  }
});

module.exports = Report;
