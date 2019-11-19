import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import PickUpComfirmSty from '../styles/PickUpComfirmSty';
import buttonStyle from '../styles/buttonStyle';
import {Actions} from 'react-native-router-flux';


function PickedUpComfirm(){
    return(
        <View style = {PickUpComfirmSty.main}>
            <View style = {PickUpComfirmSty.main2}>
            {/*Donation info below */}
           
            <View style = {PickUpComfirmSty.donationInfoTop}>
            <View style = {PickUpComfirmSty.Images}>
                  <Text style={PickUpComfirmSty.Date}>14</Text>
                  <Text style={PickUpComfirmSty.Month}>Jun</Text>
              </View>

              <View style={PickUpComfirmSty.TextDisplay}>
                  <View>
                      <Text style={PickUpComfirmSty.Organization}>Safeway Extra</Text>
                  </View>
                  <View>
                    <Text style={PickUpComfirmSty.address}>Pending</Text>
                  </View>
                  <View>
                   
                  </View>
              </View>
              
            </View>
            {/*Image text below */}
           
            {/*Images below */}
            <ScrollView horizontal='true' style={{height:1}}>
                <View style = {PickUpComfirmSty.imageBox}>
                    <Image style = {{width: 100, height: 100, margin:2, marginBottom: 0, backgroundColor: 'grey'}}></Image>
                    <Image style = {{width: 100, height: 100, margin:2, marginBottom: 0, backgroundColor: 'grey'}}></Image>
                    <Image style = {{width: 100, height: 100, margin:2, marginBottom: 0, backgroundColor: 'grey'}}></Image>
                    <Image style = {{width: 100, height: 100, margin:2, marginBottom: 0, backgroundColor: 'grey'}}></Image>
                    <Image style = {{width: 100, height: 100, margin:2, marginBottom: 0, backgroundColor: 'grey'}}></Image>
                </View>
            </ScrollView>
           
            {/*Date of pickup below */}
            <View style = {PickUpComfirmSty.pickupDate}>
                <Text style = {{ color: '#0ca3bc',fontSize: 18, flex: 1}}>Pickup loaction</Text>
                <Text style = {{color: '#066a87', fontSize: 16, flex: 1, marginTop:18}}>20014 Coquitlam V3C 5W8</Text>
            </View>
            {/*Pickup time below */}
            <View style = {PickUpComfirmSty.pickupTime}>
                <Text style = {{color: '#0ca3bc', fontSize: 18, flex: 1}}>Pickup Time</Text>
                <Text style = {{color: '#066a87', fontSize: 16, flex: 1, marginTop:5}}>3:00 pm - 7:00 pm</Text>
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
                style = {{color: '#0ca3bc', fontSize: 16, fontWeight: '500'}}
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
        </View>
    )
};
export default PickedUpComfirm;