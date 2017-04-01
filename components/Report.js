import React from "react";
import { Image, StyleSheet, Text, View, Picker, TextInput } from "react-native";
import DatePicker from "react-native-datepicker";
const Item = Picker.Item;
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
      <View>
        <Text>แจ้งความ</Text>

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
        <Text>รายละเอียด :</Text>
        <TextInput
          multiline={true} //prop
          style={{
            height: 80,
            borderColor: "white",
            borderWidth: 1
          }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Text>วันที่และเวลาที่เกิดเหตุ:</Text>
        <DatePicker
          date={new Date()}
          mode="date"
          placeholder="เลือกวันที่เกิดเหตุ"
          format="DD-MM-YYYY"
          confirmBtnText="ตกลง"
          cancelBtnText="ยกเลิก"
        />

        <View style={{ flexDirection: "row" }}>
          <Picker
            style={styles.pickerTime}
            selectedValue={this.state.selected2}
            onValueChange={this.onValueChangeTime}
          >
            <Item label="0" value="key0" />
            <Item label="1" value="key1" />
            <Item label="2" value="key2" />
            <Item label="3" value="key3" />
            <Item label="4" value="key4" />
            <Item label="5" value="key5" />
            <Item label="6" value="key6" />
            <Item label="7" value="key7" />
            <Item label="8" value="key8" />
            <Item label="9" value="key9" />
            <Item label="10" value="key10" />
            <Item label="11" value="key11" />
            <Item label="12" value="key12" />
            <Item label="13" value="key13" />
            <Item label="14" value="key14" />
            <Item label="15" value="key15" />
            <Item label="16" value="key16" />
            <Item label="17" value="key17" />
            <Item label="18" value="key18" />
            <Item label="19" value="key19" />
            <Item label="20" value="key20" />
            <Item label="21" value="key21" />
            <Item label="22" value="key22" />
            <Item label="23" value="key23" />
          </Picker>
          <View style={{ width: 10 }} />
          <Picker
            style={styles.pickerMinute}
            selectedValue={this.state.selected3}
            onValueChange={this.onValueChangeMinute}
          >
            <Item label="00" value="key00" />
            <Item label="01" value="key01" />
            <Item label="02" value="key02" />
            <Item label="03" value="key03" />
            <Item label="04" value="key04" />
            <Item label="05" value="key05" />
            <Item label="06" value="key06" />
            <Item label="07" value="key07" />
            <Item label="08" value="key08" />
            <Item label="09" value="key09" />
            <Item label="10" value="key10" />
            <Item label="11" value="key11" />
            <Item label="12" value="key12" />
            <Item label="13" value="key13" />
            <Item label="14" value="key14" />
            <Item label="15" value="key15" />
            <Item label="16" value="key16" />
            <Item label="17" value="key17" />
            <Item label="18" value="key18" />
            <Item label="19" value="key19" />
            <Item label="20" value="key20" />
            <Item label="21" value="key21" />
            <Item label="22" value="key22" />
            <Item label="23" value="key23" />
            <Item label="24" value="key24" />
            <Item label="25" value="key25" />
            <Item label="26" value="key26" />
            <Item label="27" value="key27" />
            <Item label="28" value="key28" />
            <Item label="29" value="key29" />
            <Item label="30" value="key30" />
            <Item label="31" value="key31" />
            <Item label="32" value="key32" />
            <Item label="33" value="key33" />
            <Item label="34" value="key34" />
            <Item label="35" value="key35" />
            <Item label="36" value="key36" />
            <Item label="37" value="key37" />
            <Item label="38" value="key38" />
            <Item label="39" value="key39" />
            <Item label="40" value="key40" />
            <Item label="41" value="key41" />
            <Item label="42" value="key42" />
            <Item label="43" value="key43" />
            <Item label="44" value="key44" />
            <Item label="45" value="key45" />
            <Item label="46" value="key46" />
            <Item label="47" value="key47" />
            <Item label="48" value="key48" />
            <Item label="49" value="key49" />
            <Item label="50" value="key50" />
            <Item label="51" value="key51" />
            <Item label="52" value="key52" />
            <Item label="53" value="key53" />
            <Item label="54" value="key54" />
            <Item label="55" value="key55" />
            <Item label="56" value="key56" />
            <Item label="57" value="key57" />
            <Item label="58" value="key58" />
            <Item label="59" value="key59" />
          </Picker>
        </View>
        <Text>สถานที่เกิดเหตุ</Text>
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
  }
});

module.exports = Report;
