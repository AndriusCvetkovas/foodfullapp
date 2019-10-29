import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import ConfirmStyle from '../styles/confirmStyle';
import buttonStyle from '../styles/buttonStyle';

function Confirmation(){
    return(
        <View style = {ConfirmStyle.main}>
            <View style = {ConfirmStyle.main2}>
            {/*Donation info below */}
            <View style = {ConfirmStyle.donationInfoTop}>
                <Image style = {{width: 75, height: 75, margin:15}}
                source = {require('../assets/img/posted_donation.png')}></Image>
                <Text style = {{paddingRight: 25}}>This donation will be posted publicly for any accepting organization to claim</Text>
            </View>
            {/*Image text below */}
            <Text style = {ConfirmStyle.imageText}>Images</Text>
            {/*Images below */}
            <View style = {ConfirmStyle.imageBox}>
                <Image style = {{width: 75, height: 75, margin:15, marginBottom: 0, backgroundColor: 'grey'}}></Image>
            </View>
            {/*Date of pickup below */}
            <View style = {ConfirmStyle.pickupDate}>
                <Text style = {{ fontSize: 18, flex: 1}}>Date of pickup</Text>
                <Text style = {{color: '#066a87', fontSize: 16, flex: 1}}>July 14, 2019</Text>
            </View>
            {/*Pickup time below */}
            <View style = {ConfirmStyle.pickupTime}>
                <Text style = {{fontSize: 18, flex: 1}}>Pickup Time</Text>
                <Text style = {{color: '#066a87', fontSize: 16, flex: 1}}>3:00 pm - 7:00 pm</Text>
            </View>
            {/*Description title below */}
            <Text
            style = {ConfirmStyle.descriptionTitle}
            >Description</Text>
            {/*Description below */}
            <Text
            style = {ConfirmStyle.description}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
            </Text>
            <TouchableHighlight
            title="Accept"
            style = {buttonStyle.button}>
                <Text
                style = {{color: 'white', fontSize: 16, fontWeight: '500'}}
                >Claim another Donation</Text>
            </TouchableHighlight>
            </View>
        </View>
    )
};
export default Confirmation;