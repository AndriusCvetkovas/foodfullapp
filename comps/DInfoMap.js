import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import GMapStyle from '../styles/mapStyle';
import TimePicker from './DatePicker';
import buttonStyle from '../styles/buttonStyle';
//for DateTimePicker run yarn add @react-native-community/datetimepicker and pod install

function Info(){

    
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
                style = {GMapStyle.donationImage}
                />
            </View>
            {/*Date box below*/} 
            <View
            style = {GMapStyle.dateBox}
            >
                <Text style = {{flex: 1, color: '#066a87'}}>Date:</Text>
                <Text style = {{flex: 1}}>69 January 6969</Text>
            </View>
            {/*Time box below*/} 
            <View style = {{flexDirection: 'row', width: "80%"}}>
                <Text style = {{color: '#066a87'}}>Pick your time:</Text>
                <View
                style = {GMapStyle.timeBox}
                >
                    {/*<TimePicker />*/}
                </View>
            </View>
            {/*Note box below*/} 
            <View
            style = {GMapStyle.noteBox}
            >
                <Text
                style = {{padding: 10}}
                >Notes go here</Text>
            </View>
            {/*Button below*/}
            <TouchableHighlight
            title="Accept"
            style = {buttonStyle.button}>
                <Text
                style = {{color: 'white'}}
                >Claim Donation</Text>
            </TouchableHighlight>
        </View>
    );
};
export default Info;