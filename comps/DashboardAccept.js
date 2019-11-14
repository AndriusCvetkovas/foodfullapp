import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import DashStyle from '../styles/dashboardAcceptStyle';
import {Actions} from 'react-native-router-flux';

function DashboardAccept() {
    return ( 
        <View style={DashStyle.main}>

        {/* BACKGROUND IMAGE AND DONATE BUTTON */}
        <View style={DashStyle.backgroundImg}>
            <Image style={{width:'100%',height:420, position:'absolute'}}
             source={require('../assets/img/dashboard_illustration2.png')}>
            </Image>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={DashStyle.header}>Looking for Donations?</Text>
                <TouchableOpacity style={DashStyle.searchButton}
                onPress={()=>Actions.mapaccept()}
                >
                    <Text style={DashStyle.searchButtonText}>Search</Text>
                </TouchableOpacity>
            </View>
        </View> 

          {/* DONATION REQUESTS*/}
           {/* Green circle with number needs to change according to notification # */}
        <View style={DashStyle.donations}>
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}>
                <View style={DashStyle.donationCircle}>
                    <Text style={DashStyle.circleText}>5</Text>
                </View>
                <View>
                    <Text style={DashStyle.titles}>Donation Requests</Text>
                </View>
                <Image style={{width:15,height:20, margin:10}}
                source={require('../assets/icon/next.png')}>
                </Image>
            </TouchableOpacity>
        </View>


        {/*UPCOMING SCHEDULE*/}
            {/* container to hold the notifications */}
        <View style={DashStyle.notifContainer}>
                <Text style={DashStyle.titles}>Upcoming Pick Ups</Text>
                 {/* Date with line */}
                <View style={{flexDirection:'row', alignItems:'center', marginBottom:10}}>
                    <Text style={DashStyle.dateTitle}>Today</Text>
                    <View style={DashStyle.line}></View>
                </View>

                <ScrollView style={{width:'90%'}}>
                    <View style={DashStyle.upcomingContainer}>
                        <View style={{marginBottom:20}}>
                            <View>
                                <View style={DashStyle.upcomingPickup}>
                                    <View style={DashStyle.greenCircle}></View>
                                    <View>
                                        <Text style={DashStyle.companyName}>Vancouver Food Bank</Text>
                                        <Text>3:00 pm</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{marginBottom:20}}>
                            <View>
                                <View style={DashStyle.upcomingPickup}>
                                    <View style={DashStyle.greenCircle}></View>
                                    <View>
                                        <Text style={DashStyle.companyName}>Vancouver Food Bank</Text>
                                        <Text>3:00 pm</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{marginBottom:20}}>
                            <View>
                                <View style={DashStyle.upcomingPickup}>
                                    <View style={DashStyle.greenCircle}></View>
                                    <View>
                                        <Text style={DashStyle.companyName}>Vancouver Food Bank</Text>
                                        <Text>3:00 pm</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{marginBottom:20}}>
                            <View>
                                <View style={DashStyle.upcomingPickup}>
                                    <View style={DashStyle.greenCircle}></View>
                                    <View>
                                        <Text style={DashStyle.companyName}>Vancouver Food Bank</Text>
                                        <Text>3:00 pm</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                </View>

            </ScrollView>
        
        </View>



        

    </View>
    )
};
export default DashboardAccept;

