import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import GMapStyle from '../styles/mapStyle';
import buttonStyle from '../styles/buttonStyle';

function AcceptedInfo(){
    return(
        <View
        style = {GMapStyle.infoBox}
        >
            {/*Title box below*/} 
            <View
            style = {{marginTop: 50}}>
                <Text
                style = {GMapStyle.donatorTitle}
                >Claimed</Text>
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
                <Text>You have claimed this donation from Safeway Extra</Text>
                <Text style = {{color: '#0ca3bc'}}></Text>
            </View>
            <View
            style = {{flexDirection: 'row', width: "80%", flex: 0.4}}
            >
                <Text style = {{flex: 1, color: '#0ca3bc'}}>Location:</Text>
                <Text style = {{flex: 1}}>6666 Iona</Text>
            </View>
            {/*Time box below*/} 
            <View style = {{flexDirection: 'row', width: "80%", flex: 0.4}}>
                <Text style = {{color: '#0ca3bc', flex: 1}}>Pickup time:</Text>
                <Text
                style = {{color: "black", flex: 1}}
                >
                    1:20pm
                </Text>
            </View>
            
            {/*Button below*/}
            <TouchableHighlight
            title="Accept"
            style = {buttonStyle.button}>
                <Text
                style = {{color: 'white'}}
                >Claim another Donation</Text>
            </TouchableHighlight>
            <TouchableHighlight
            title="Accept"
            style = {buttonStyle.button2}>
                <Text
                style = {{color: '#0ca3bc', fontWeight: 'bold'}}
                >View pickups</Text>
            </TouchableHighlight>
        </View>
    );
};
export default AcceptedInfo;