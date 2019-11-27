import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableHighlight, AsyncStorage } from 'react-native';
import MsgNfStyles from '../styles/MsgNfStyles';
import TimePicker from './DatePicker';
import DatePicker from 'react-native-datepicker';
import buttonStyle from '../styles/buttonStyle';
import { Router, Scene, Actions } from 'react-native-router-flux';
import axios from 'axios';
//for DateTimePicker run yarn add @react-native-community/datetimepicker and pod install


function Info({ description, names, img, time, date, address, id }) {
    var desc = description;
    var namer = names;
    var imgs = img;
    var times = time;
    var dates = date;
    var addresss = address;
    var dId = id;
    console.log(namer);
    var currentId = 0;
    const getID = async () =>{
        var json = await AsyncStorage.getItem('id');
        currentId = json;
        console.log("userID "+currentId);
    }

    const Claim = async () => {
        var obj = {
            key: "donations_update",
            data: {
              id: dId,
              status: 2,
              destination_id: currentId
            }
          }
          var r = await axios.post(`http://localhost:3001/post`, obj);
          var json = JSON.parse(r.data.body);
          console.log(r);
        Actions.conf({address: addresss, time: times, date: dates, names:namer});
    }
    //const [time, setTime] = useState("20:20");

    useEffect(()=> {
        getID()
    }, [])
    return (
        <View
            style={MsgNfStyles.infoBox}
        >
            {/*Title box below*/}
            <View>
                <Text
                    style={MsgNfStyles.donatorTitle}
                >{namer}</Text>
            </View>
            {/*Image box below*/}
            <View
                style={MsgNfStyles.imageBox}
            >
                <Image
                    source={require('../assets/img/safeway.jpg')}
                    style={MsgNfStyles.donationImage}
                />

            </View>
            {/*Date box below*/}
            <View
                style={MsgNfStyles.dateBox}
            >
                <Text style={{ flex: 1, color: '#0ca3bc', fontSize: 18, fontFamily: 'avenir' }}>Date:</Text>
                <Text style={{ flex: 1.1, fontFamily: 'DidactGothic-regular', fontSize: 15 }}>{dates}</Text>
            </View>
            {/*Time box below*/}
            <View style={{ flexDirection: 'row', width: "80%", alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#0ca3bc', fontSize: 18, fontFamily: 'avenir' }}>Pick your time:</Text>
                <View
                    style={MsgNfStyles.timeBox}
                >
                    {/* <DatePicker
                            style={{width: '100%'}}
                            date={time}
                            mode="time"
                            placeholder="Pick a time"
                            format="HH:mm"
                            value = {time}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                width:0,
                                height:0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                width: 100,
                                borderRadius:50,
                                
                            }
                            // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(newTime) => {setTime(newTime)}}
                        /> */}
                    {/*<TimePicker />*/}
                    <Text>{time}</Text>
                </View>
            </View>
            {/*Note box below*/}


            <View
                style={MsgNfStyles.noteBox}
            >
                <Text style={{ color: '#0ca3bc', paddingBottom: 5, fontSize: 18, fontFamily: 'avenir' }}>Descriptions:</Text>

                <Text
                    style={{ paddingTop: 10, fontFamily: 'DidactGothic-regular', fontSize: 15 }}
                >{desc}</Text>
            </View>
            {/*Button below*/}
            <TouchableHighlight
                onPress={() => Claim()}
                title="Accept"
                style={buttonStyle.button}>
                <Text
                    style={{ color: 'white', fontFamily: 'avenir', fontSize: 16, fontWeight: '500' }}
                >Claim Donation</Text>
            </TouchableHighlight>
        </View>
    );
};
export default Info;