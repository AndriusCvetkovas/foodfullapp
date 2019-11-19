import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import PickUpComfirmSty from '../styles/PickUpComfirmSty';
import buttonStyle from '../styles/buttonStyle';
import {Actions} from 'react-native-router-flux';


function DonNotificationAccepted(){
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
                      <Text style={PickUpComfirmSty.Organization}>Food Bank BC</Text>
                  </View>
                  <View>
                    <Text style={PickUpComfirmSty.accpTxt}>Accepted</Text>
                  </View>
                  <View>
                   
                  </View>
              </View>
              
            </View>
            {/*Image text below */}
           
            {/*Images below */}
            <ScrollView horizontal='true' style={{height:90, marginTop:20}}>
                <View style = {PickUpComfirmSty.imageBox2}>
                <Image style={{width: 310, height: 200, margin:2, marginBottom: 0, marginTop: 10}} source={require('../assets/img/wholefoods2.png')}
                                    />
                    <Image style = {{width: 310, height: 200, margin:2, marginBottom: 0, marginTop: 10, backgroundColor: 'grey'}}></Image>
                    <Image style = {{width: 310, height: 200, margin:2, marginBottom: 0, marginTop: 10, backgroundColor: 'grey'}}></Image>
                    <Image style = {{width: 310, height: 200, margin:2, marginBottom: 0, marginTop: 10, backgroundColor: 'grey'}}></Image>
                </View>
            </ScrollView>
           
            {/*Date of pickup below */}
  
            {/*Pickup time below */}
            <View style = {PickUpComfirmSty.pickupTime}>
                <Text style = {{color: '#0ca3bc', fontSize: 18, flex: 1}}>Pickup Time</Text>
                <Text style = {{color: '#066a87', fontSize: 16, flex: 1, marginTop:5}}>3:00 pm - 7:00 pm</Text>
            </View>
            {/*Description title below */}
            <Text
            style = {PickUpComfirmSty.descriptionTitle2}
            >Description</Text>
            {/*Description below */}
            <Text
            style = {PickUpComfirmSty.description2}
            >
            soup cans: chicken noodle and mushroom
            produce: apples and bananas
            bakery items: buns and loaves of bread 
            </Text>
           
            </View>
        </View>
    )
};
export default DonNotificationAccepted;