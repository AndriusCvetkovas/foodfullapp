import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import ConfirmStyle from '../styles/confirmStyle';
import buttonStyle from '../styles/buttonStyle';
import LottieView from 'lottie-react-native';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';

function Confirmation({obj, setShowModal}){
    var url = obj.data.image_url[0].uri;
    console.log(obj);
    const SendDonationInfo = async () => {
        var r = await axios.post(`http://localhost:3001/post`, obj);
        console.log(r);
    }
    const Confirm = () =>{
        SendDonationInfo();
        setShowModal(false);
        Actions.donationposted();
    }
    
    return(
        <View style = {ConfirmStyle.main}>
            <View style = {ConfirmStyle.main2}>
            {/*Donation info below */}
            <View style = {ConfirmStyle.donationInfoTop}>
                <Text style={ConfirmStyle.header}>Confirm Donation</Text>
            </View>

            <View style={{flex:1.5}}>
                {/* <LottieView
              source={require('../assets/lottieFiles/location.json')}
              style={{justifyContent:'center', alignItems:'center',height:55, width:55, position:'absolute', top:-6, left:13, zIndex:1}}
              autoPlay
              loop
            /> */}
               <LottieView
              source={require('../assets/lottieFiles/checkmark2.json')}
              style={{justifyContent:'center', alignItems:'center',height:50, width:50, position:'absolute', top:25, left:13, zIndex:1}}
              autoPlay
              loop
            />
            <Image style = {{height: 120, width: 120, top:10}}
                source={require('../assets/img/confirm_donation.png')} 
                />
            </View>
            {/* Image text below */}
            {/* <Text style = {ConfirmStyle.imageText}>Images</Text> */}

            {/*Images below: took away based on user testing */}
            {/* <View style = {ConfirmStyle.imageBox}>
                <Image style = {{height: 100, width: 100, margin:15, marginBottom: 0}}
                source = {{uri:url}}
                ></Image>
            </View> */}

            {/*Date of pickup below */}
            <View style={{flex:2, marginTop:0}}>
                <View style = {ConfirmStyle.pickupDate}>
                    <Text style = {ConfirmStyle.titles}>Date of pickup</Text>
                    <Text style = {{color: '#066a87', fontSize: 16, flex: 1}}>{obj.data.date}</Text>
                </View>

                {/*Pickup time below */}
                <View style = {ConfirmStyle.pickupTime}>
                    <Text style = {ConfirmStyle.titles}>Pickup Time</Text>
                    <Text style = {{color: '#066a87', fontSize: 16, flex: 1}}>{obj.data.time}</Text>
                </View>

                {/*Description title below */}
                    <Text style = {[ConfirmStyle.titles,{marginTop:10}]}
                    >Description:</Text>
                    {/*Description below */}
                    <ScrollView style = {{borderColor: 'grey', borderWidth: 0.5, padding: 5, borderRadius: 10}}>
                        <Text
                        style = {ConfirmStyle.description}
                        >
                            {obj.data.description}
                        </Text>
                    </ScrollView>
            </View>

            {/* Button */}
            <TouchableOpacity
            title="Accept"
            style = {[buttonStyle.button, {width: 200}]}
            onPress={()=> Confirm()}>
                <Text
                style = {{color: 'white', fontSize: 16, fontWeight: '500'}}
                >Confirm</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
};
export default Confirmation;