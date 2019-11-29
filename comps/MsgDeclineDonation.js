import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import MsgNfStyles from '../styles/MsgNfStyles';
import buttonStyle from '../styles/buttonStyle';

function MsgDeclineDonation(){
    return(
        <View
        style = {MsgNfStyles.infoBox}
        >
            {/*Title box below*/} 
            <View
            style = {{marginTop: 50}}>
                <Text
                style = {MsgNfStyles.CancelledText}
                >Donation Declined</Text>
            </View>
            {/*Image box below*/} 
            <View 
            style = {MsgNfStyles.imageBox}
            >
               
            </View>
            {/*Date box below*/} 
            <View
            style = {MsgNfStyles.messageBox}
            >
                <Text style = {{height:70,marginTop: 40, fontFamily: 'DidactGothic-Regular', fontSize: 15}}>You have cancelled this donation from Safeway Extra.
                You have declined this donation request</Text>
                <Text style = {{color: '#0ca3bc'}}></Text>
            </View>
            <View
            style = {{flexDirection: 'row', width: "80%", flex: 0.4}}
            >
                <Text style = {{flex: 1, color: '#0ca3bc', fontFamily: 'Avenir', fontSize: 18}}>Location:</Text>
                <Text style = {{flex: 1, fontFamily: 'DidactGothic-Regular', fontSize: 15}}>6666 Iona</Text>
            </View>
            {/*Time box below*/} 
            <View style = {{flexDirection: 'row', width: "80%", flex: 0.4}}>
                <Text style = {{color: '#0ca3bc', flex: 1, fontFamily: 'DidactGothic-Regular', fontSize: 18}}>Pickup time:</Text>
                <Text
                style = {{color: "black", flex: 1, fontFamily: 'DidactGothic-Regular', fontSize: 15}}
                >
                    1:20pm
                </Text>
            </View>
            
            {/*Button below*/}
            <TouchableHighlight
            title="Accept"
            style = {buttonStyle.button}>
                <Text
                style = {{color: 'white', fontWeight: '500', fontFamily: 'avenir', fontSize: 16}}
                >View Donations</Text>
            </TouchableHighlight>
            <TouchableHighlight
            title="Accept"
            style = {buttonStyle.button2}>
                <Text
                style = {{color: '#0ca3bc', fontWeight: '500', fontFamily: 'avenir', fontSize: 16}}
                >Search for Donations</Text>
            </TouchableHighlight>
        </View>
    );
};
export default MsgDeclineDonation;