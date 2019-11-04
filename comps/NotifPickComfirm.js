import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight, TextInput} from 'react-native';
import GMapStyle from '../styles/pickUpStyle';
// import buttonStyle from '../styles/buttonStyle';

function AcceptedInfo(){
    const [value, onChangeText] = React.useState('LBS');
    return(
        <View
        style = {GMapStyle.infoBox}
        >
            {/*Title box below*/} 
            <View
            style = {{marginTop: 50}}>
                <Text
                style = {GMapStyle.donatorTitle}
                >Picked Up</Text>
            </View>
            {/*Image box below*/} 
            <View 
            style = {GMapStyle.imageBox}
            >
                <Image
                style = {GMapStyle.checkmarkImage}
                source = {require('../assets/icon/checkmark.png')}
                />
            </View>
            {/*Date box below*/} 
            <View
            style = {GMapStyle.messageBox}
            >
                <Text>You have picked up your donation from Safeway Extra</Text>
                <Text style = {{color: '#0ca3bc'}}></Text>
            </View>
            <View
            style = {{flexDirection: 'row', width: "80%", flex: 0.2}}
            >
                <Text style = {{flex: 1, color: '#0ca3bc',fontWeight:'800'}}>How much food you have recieved?</Text>
                
            </View>
            {/*Time box below*/} 
            <View style = {{flexDirection: 'row', width: "80%", flex: 0.4}}>
                <Text style = {{color: '#0ca3bc', flex: 1, fontWeight:'800'}}>Weight:</Text>
                
                <TextInput
      style={GMapStyle.InputSty}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
            </View>
            
            {/*Button below*/}
            <TouchableHighlight
            title="Accept"
            style = {GMapStyle.buttonS}>
                <Text
                style = {{color: 'white'}}
                >Comfirm Pickup</Text>
            </TouchableHighlight>
            
        </View>
    );
};
export default AcceptedInfo;