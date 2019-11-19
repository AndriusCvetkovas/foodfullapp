import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import ConfirmStyle from '../styles/confirmStyle';
import buttonStyle from '../styles/buttonStyle';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';

function Confirmation({text}){
    var obj = text;
    var url = obj.data.image_url[0].uri
    console.log(obj);
    const SendDonationInfo = async () => {
        var r = await axios.post(`http://localhost:3001/post`, obj);
        console.log(r);
    }
    const Confirm = () =>{
        SendDonationInfo();
        Actions.donationposted();
    }
    return(
        <View style = {ConfirmStyle.main}>
            <View style = {ConfirmStyle.main2}>
            {/*Donation info below */}
            <View style = {ConfirmStyle.donationInfoTop}>
                <Image style = {{width: 50, height: 50, margin:15, flex: 0.7}}
                source = {require('../assets/img/posted_donation.png')}></Image>
                <Text style = {{paddingRight: 25, flex: 1.8}}>Your Donation will be posted for any accepting orgaization</Text>
            </View>
            {/*Image text below */}
            <Text style = {ConfirmStyle.imageText}>Images</Text>
            {/*Images below */}
            {/* <View style = {ConfirmStyle.imageBox}>
                <Image style = {{height: 100, width: 100, margin:15, marginBottom: 0}}
                source = {{uri:url}}
                ></Image>
            </View> */}

           <ScrollView horizontal='true' style={{height:90, marginTop:20}}> 
            <View style = {ConfirmStyle.imageBox}>
            <Image style={{width: 310, height: 200, margin:2, marginBottom: 0, marginTop: 10}}  source = {{uri:url}}></Image>
            {/* <Image style={{width: 100, height: 100, margin:2, marginBottom: 0, marginTop: 10}}  source = {{uri:url}}></Image> */}
            </View>
            </ScrollView>




            {/*Date of pickup below */}
            <View style = {ConfirmStyle.pickupDate}>
                
                <Text style = {{ fontSize: 18, flex: 1, color:'#0ca3bc'}}>Date of pickup</Text>
                <Text style = {{color: '#066a87', fontSize: 16, flex: 1, marginTop:2}}>{obj.data.date}</Text>
            </View>

            {/*Pickup time below */}
            <View style = {ConfirmStyle.pickupTime}>
                <Text style = {{fontSize: 18, flex: 1, color:'#0ca3bc'}}>Pickup Time</Text>
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