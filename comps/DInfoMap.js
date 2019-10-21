import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import GMapStyle from '../styles/mapStyle';
import TimePicker from './DatePicker';
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
                >Name of the Donator</Text>
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
                <Text style = {{flex: 1}}>Date:</Text>
                <Text style = {{flex: 1}}>69 January 6969</Text>
            </View>
            {/*Time box below*/} 
            <Text>Pick your time</Text>
            <View
            style = {GMapStyle.timeBox}
            >
                <TimePicker />
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
            style = {GMapStyle.button}>
                <Text
                style = {{color: 'white'}}
                >Accept</Text>
            </TouchableHighlight>
        </View>
    );
};
export default Info;