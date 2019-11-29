import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import MsgNfStyles from '../styles/MsgNfStyles';
import buttonStyle from '../styles/buttonStyle';


function MsgAcceptDonation(){
    return(
        <View
        style = {MsgNfStyles.infoBox}
        >
            {/*Title box below*/} 
            <View
            style = {{marginTop: 50}}>
                <Text
                style = {MsgNfStyles.donatorTitle}
                >Donation Accepted</Text>
            </View>
            {/*Image box below*/} 
            <View 
            style = {MsgNfStyles.imageBox}
            >
                <Image
                style = {MsgNfStyles.checkmarkImage}
                source = {require('../assets/icon/checkmark.png')}
                />
            </View>
            {/*Date box below*/} 
            <View
            style = {MsgNfStyles.messageBox}
            >
                <Text style = {{marginTop: 30, fontFamily: 'DidactGothic-Regular', fontSize: 15}}>You have Accepted this donation from Safeway Extra</Text>
                <Text style = {{color: '#0ca3bc'}}></Text>
            </View>
            <View
            style = {{flexDirection: 'row', width: "80%", flex: 0.4, alignItems: 'center'}}
            >
                <Text style = {{flex: 1, color: '#0ca3bc', fontFamily: 'Avenir', fontSize: 18}}>Location:</Text>
                <Text style = {{flex: 1, fontFamily: 'DidactGothic-Regular', fontSize: 15}}>6666 Iona</Text>
            </View>
            {/*Time box below*/} 
            <View style = {{flexDirection: 'row', width: "80%", flex: 0.4, alignItems: 'center'}}>
                <Text style = {{color: '#0ca3bc', flex: 1,fontFamily: 'Avenir', fontSize: 18}}>Pickup time:</Text>
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
export default MsgAcceptDonation;