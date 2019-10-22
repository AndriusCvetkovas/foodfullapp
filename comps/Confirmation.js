import React from 'react';
import {View, Text, Image} from 'react-native';
import ConfirmStyle from '../styles/confirmStyle';

function Confirmation(){
    return(
        <View style = {ConfirmStyle.main}>
            {/*Donation info below */}
            <View style = {ConfirmStyle.donationInfoTop}>
                <Image style = {{width: 75, height: 75, margin:15, backgroundColor: 'grey'}}></Image>
                <Text style = {{paddingRight: 50}}>This donation will be posted publicly for any accepting organization to claim</Text>
            </View>
            {/*Image text below */}
            <Text style = {ConfirmStyle.imageText}>Images</Text>
            {/*Images below */}
            <View style = {ConfirmStyle.imageBox}>
                <Image style = {{width: 75, height: 75, margin:15, backgroundColor: 'grey'}}></Image>
            </View>
            {/*Date of pickup below */}
            <View style = {ConfirmStyle.pickupDate}>
                <Text style = {{ margin: 20}}>Date of pickup</Text>
                <Text style = {{color: '#066a87', fontSize: 18, margin: 20}}>July 14, 2019</Text>
            </View>
            {/*Pickup time below */}
            <View style = {ConfirmStyle.pickupTime}>
                <Text style = {{ margin: 20}}>Pickup Time</Text>
                <Text style = {{color: '#066a87', fontSize: 18, margin: 20}}>3:00 pm to 7:00 pm</Text>
            </View>
            {/*Description title below */}
            <Text></Text>
            {/*Description below */}
            <Text></Text>
        </View>
    )
};
export default Confirmation;