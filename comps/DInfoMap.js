import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  AsyncStorage,
} from 'react-native';
import GMapStyle from '../styles/mapStyle';
import TimePicker from './DatePicker';
import DatePicker from 'react-native-datepicker';
import buttonStyle from '../styles/buttonStyle';
import {Router, Scene, Actions} from 'react-native-router-flux';
import axios from 'axios';
//for DateTimePicker run yarn add @react-native-community/datetimepicker and pod install

function Info({dd}) {
  var desc = dd.description;
  var namer = dd.names;
  var times = dd.time;
  var dates = dd.date;
  var addresss = dd.address;
  var dId = dd.id;
  console.log(namer);
  var currentId = 0;
  const getID = async () => {
    var json = await AsyncStorage.getItem('id');
    currentId = json;
    console.log('userID ' + currentId);
  };

  const Claim = async () => {
    var obj = {
      key: 'donations_update',
      data: {
        id: dId,
        status: 2,
        destination_id: currentId,
      },
    };
    var r = await axios.post(`http://localhost:3001/post`, obj);
    var json = JSON.parse(r.data.body);
    console.log(r);
    Actions.conf({address: addresss, time: times, date: dates, names: namer});
  };
  //const [time, setTime] = useState("20:20");

  useEffect(() => {
    getID();
  }, []);
  return (
    <View style={GMapStyle.infoBox}>
      {/*Title box below*/}
      <View>
        <Text style={GMapStyle.donatorTitle}>{namer}</Text>
      </View>
      {/*Image box below*/}
      <View style={GMapStyle.imageBox}>
        <Image
          source={require('../assets/img/safeway.jpg')}
          style={{width: 100, height: 100}}
        />
      </View>
      {/*Date box below*/}
      <View style={GMapStyle.dateBox}>
        <Text
          style={{
            flex: 1,
            color: '#0ca3bc',
            fontSize: 18,
            fontFamily: 'avenir',
          }}>
          Date:
        </Text>
        <Text
          style={{flex: 1.1, fontFamily: 'DidactGothic-regular', fontSize: 15}}>
          {dates}
        </Text>
      </View>
      {/*Time box below*/}
      <View
        style={{
          flexDirection: 'row',
          width: '80%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#0ca3bc', fontSize: 18, fontFamily: 'avenir'}}>
          Pick your time:
        </Text>
        <View style={GMapStyle.timeBox}>
          <Text>{times}</Text>
        </View>
      </View>
      {/*Note box below*/}

      <View style={GMapStyle.noteBox}>
        <Text
          style={{
            color: '#0ca3bc',
            paddingBottom: 5,
            fontSize: 18,
            fontFamily: 'avenir',
          }}>
          Descriptions:
        </Text>

        <Text
          style={{
            paddingTop: 10,
            fontFamily: 'DidactGothic-regular',
            fontSize: 15,
          }}>
          {desc}
        </Text>
      </View>
      {/*Button below*/}
      <TouchableHighlight
        onPress={() => Claim()}
        title="Accept"
        style={buttonStyle.button}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'avenir',
            fontSize: 16,
            fontWeight: '500',
          }}>
          Claim Donation
        </Text>
      </TouchableHighlight>
    </View>
  );
}
export default Info;
