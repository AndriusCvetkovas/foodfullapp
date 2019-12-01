import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import PickUpComfirmSty from '../styles/PickUpComfirmSty';
import buttonStyle from '../styles/buttonStyle';
import {Actions} from 'react-native-router-flux';
import Swiper from 'react-native-swiper'

function PickedUpComfirm(){
    return(
        <View style = {PickUpComfirmSty.main}>
            <View style = {PickUpComfirmSty.main2}>
            {/*Donation info below */}
           
            <View style = {PickUpComfirmSty.donationInfoTop}>
            <Swiper  showsButtons={true}>
                    <View style={PickUpComfirmSty.PImage}>
                        <Text>Hello Swiper</Text>
                    </View>
                    <View>
                        <Text>Beautiful</Text>
                    </View>
                    <View>
                        <Text>simple</Text>
                    </View>
                    
                </Swiper>
              
            </View>
            {/*Image text below */}
        
           
            {/*Date of pickup below */}
            <View style = {PickUpComfirmSty.NameOrg}>
                <Text style = {{ color: '#0ca3bc', fontSize: 25, flex: 1, fontWeight: "600",padding:5}}>SafeWay</Text>
     
            </View>
            <View style = {PickUpComfirmSty.pickupDate}>
                <Text style = {{ color: '#0ca3bc',color: '#066a87', fontSize: 16, flex: 1,padding:5}}>1154 Hansrd Street, Coquitlam V34 5WC</Text>
     
            </View>
            {/*Pickup time below */}
            <View style = {PickUpComfirmSty.pickupTime}>
                <Text style = {{color: '#0ca3bc', fontSize: 18, flex: 1, padding:5}}>Pickup Time</Text>
                <Text style = {{color: '#066a87', fontSize: 16, flex: 1, }}>3:00 pm - 7:00 pm</Text>
            </View>
            {/*Description title below */}
            <Text
            style = {PickUpComfirmSty.descriptionTitle}
            >Description</Text>
            {/*Description below */}
            <Text
            style = {PickUpComfirmSty.description}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
            </Text>
            <TouchableOpacity
            
            title="Accept"
            style = {PickUpComfirmSty.button}>
                <Text
                style = {{color: '#a5d826', fontSize: 16, fontWeight: '500', padding:5}}
                >Picked Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
            
            title="Accept"
            style = {PickUpComfirmSty.button2}>
                <Text
                style = {{color: 'red', fontSize: 16, fontWeight: '500'}}
                >Cancel Pickup</Text>
            </TouchableOpacity>
            
            </View>
            <TouchableOpacity style ={{position: 'absolute', top: 70, right: 50}}
                // onPress={()=>{setShowModal(!showModal)}}
                >
                    <Image
                    
                    source={require('../assets/icon/x.png')}
                    style = {{width: 15, height: 15}}
                    />
                    </TouchableOpacity>
        </View>
    )
};
export default PickedUpComfirm;