import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight, TextInput} from 'react-native';
import PickUpStyle from '../styles/pickUpStyle';
// import buttonStyle from '../styles/buttonStyle';

function AcceptedInfo(props){
    const [value, onChangeText] = React.useState('LBS');
    return(
        <View
        style = {PickUpStyle.infoBox}
        >
            {/*Title box below*/} 
            <View
            style = {{marginTop: 50}}>
                <Text
                style = {PickUpStyle.donatorTitle}
                >Picked Up</Text>
            </View>
            {/*Image box below*/} 
            <View 
            style = {PickUpStyle.imageBox}
            >
                <Image
                style = {PickUpStyle.checkmarkImage}
                source = {require('../assets/icon/checkmark.png')}
                />
            </View>
            {/*Date box below*/} 
            <View
            style = {PickUpStyle.messageBox}
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
      style={PickUpStyle.InputSty}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
            </View>
            
            {/*Button below*/}
            <TouchableHighlight
            onPress={props.obj.hide} 
            title="Accept"
            style = {PickUpStyle.buttonS}>
                <Text
                style = {{color: 'white'}}
                >Confirm Pickup</Text>
            </TouchableHighlight>
            
        </View>
    );
};
export default AcceptedInfo;