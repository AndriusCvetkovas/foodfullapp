import React, { useState } from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import GMapStyle from '../styles/mapStyle';
import TimePicker from './DatePicker';
import DatePicker from 'react-native-datepicker';
import buttonStyle from '../styles/buttonStyle';
import {Router, Scene, Actions} from 'react-native-router-flux';
//for DateTimePicker run yarn add @react-native-community/datetimepicker and pod install

function Info(){
   
    const [time, setTime] = useState("20:20");
 
    
    return (
        <View
        style = {GMapStyle.infoBox}
        >
            {/*Title box below*/} 
            <View>
                <Text
                style = {GMapStyle.donatorTitle}
                >Safeway Extra</Text>
            </View>
            {/*Image box below*/} 
            <View 
            style = {GMapStyle.imageBox}
            >
                <Image
                source = {require('../assets/img/safeway.jpg')}
                style = {GMapStyle.donationImage}
                />
                
            </View>
            {/*Date box below*/} 
            <View
            style = {GMapStyle.dateBox}
            >
                <Text style = {{flex: 1, color: '#0ca3bc',fontSize:18, fontFamily: 'avenir'}}>Date:</Text>
                <Text style = {{flex: 1.1, fontFamily: 'DidactGothic-regular', fontSize: 15}}>69 January 6969</Text>
            </View>
            {/*Time box below*/} 
            <View style = {{flexDirection: 'row', width: "80%", alignItems: 'center', justifyContent:'center'}}>
                <Text style = {{color: '#0ca3bc',fontSize:18, fontFamily: 'avenir'}}>Pick your time:</Text>
                <View
                style = {GMapStyle.timeBox}
                >
                    <DatePicker
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
                        />
                    {/*<TimePicker />*/}
                </View>
            </View>
            {/*Note box below*/} 

            
            <View
            style = {GMapStyle.noteBox}
            >
              <Text style = {{color: '#0ca3bc', paddingBottom:5, fontSize:18, fontFamily: 'avenir'}}>Descriptions:</Text>
               
                <Text
                style = {{paddingTop: 10, fontFamily: 'DidactGothic-regular', fontSize: 15}}
                >Soup cans, chicken noodles, and mushroom. Produce: apple, bananas Bakery: buns and loaves of bread</Text>
            </View>
            {/*Button below*/}
            <TouchableHighlight
            onPress = {()=> Actions.DConfirmation()}
            title="Accept"
            style = {buttonStyle.button}>
                <Text
                style = {{color: 'white', fontFamily: 'avenir', fontSize: 16, fontWeight: '500'}}
                >Claim Donation</Text>
            </TouchableHighlight>
        </View>
    );
};
export default Info;