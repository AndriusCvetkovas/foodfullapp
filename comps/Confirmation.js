import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import ConfirmStyle from '../styles/confirmStyle';
import buttonStyle from '../styles/buttonStyle';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';

function Confirmation({text}){
    var obj = text;
    var url = obj.data.image_url[0].uri;
    console.log(obj);
    const SendDonationInfo = async () => {
        var r = await axios.post(`http://localhost:3001/post`, obj);
        console.log(r);
    }
    const Confirm = () =>{
        SendDonationInfo();
        Actions.refresh({key: 'postdonation'})
        
        Actions.donationposted()
    }
    return(
        <View style = {ConfirmStyle.main}>
            <View style = {ConfirmStyle.main2}>
            {/*Donation info below */}
            <View style = {ConfirmStyle.donationInfoTop}>
                <Image style = {{width: 50, height: 50, margin:15, flex: 0.7}}
                source = {require('../assets/img/posted_donation.png')}></Image>
                <Text style = {{paddingRight: 25, flex: 1.8}}>This donation will be posted publicly for any accepting organization to claim</Text>
            </View>
            {/*Image text below */}
            <Text style = {ConfirmStyle.imageText}>Images</Text>
            {/*Images below */}
            <View style = {ConfirmStyle.imageBox}>
                <Image style = {{height: 100, width: 100, margin:15, marginBottom: 0}}
                source = {{uri:url}}
                ></Image>
            </View>
            {/*Date of pickup below */}
            <View style = {ConfirmStyle.pickupDate}>
                <Text style = {{ fontSize: 18, flex: 1}}>Date of pickup</Text>
                <Text style = {{color: '#066a87', fontSize: 16, flex: 1}}>{obj.data.date}</Text>
            </View>
            {/*Pickup time below */}
            <View style = {ConfirmStyle.pickupTime}>
                <Text style = {{fontSize: 18, flex: 1}}>Pickup Time</Text>
                <Text style = {{color: '#066a87', fontSize: 16, flex: 1}}>{obj.data.time}</Text>
            </View>
            {/*Description title below */}
            <Text
            style = {ConfirmStyle.descriptionTitle}
            >Description</Text>
            {/*Description below */}
            <Text
            style = {ConfirmStyle.description}
            >
                {obj.data.description}
            </Text>
            <TouchableOpacity
            
            title="Accept"
            style = {buttonStyle.button}
            onPress={()=> Confirm()}>
                <Text
                style = {{color: 'white', fontSize: 16, fontWeight: '500'}}
                >Confirm Donation</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
};
export default Confirmation;