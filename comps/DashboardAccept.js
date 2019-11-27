import React, {useState, useEffect} from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import DashStyle from '../styles/dashboardAcceptStyle';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';

function DashboardAccept({navigation}) {
    
    var currentId = "";

    const [numDon, setNumDon] = useState('0');

    //RECEIVE CURRENT USER ID FROM ASYNC STORAGE
    const getID = async () =>{
        var json = await AsyncStorage.getItem('id');
        currentId = json;
        console.log("userID "+currentId);
        GetDonations();
        GetDonationsAcc();
    }

    //READ THE DIRECT USER DONATIONS
    const GetDonations = async () => {
        var obj = {
        key: "donations_read",
        data: {
            destination_id: currentId,
            status: 1
        }
        }
        var r = await axios.post(`https://foodfullapp.herokuapp.com/post`, obj);
        var json = JSON.parse(r.data.body);
        //console.log(json.data);
        var arr = json.data;
        setNumDon(arr.length);
    }

    //READ THE DIRECT USER DONATIONS ACCEPTED
    const [dons, setDons] = useState([]);
    
    const GetDonationsAcc = async () => {
        var obj = {
        key: "donations_read",
        data: {
            destination_id: currentId,
            status: 2
        }
        }
        var r = await axios.post(`https://foodfullapp.herokuapp.com/post`, obj);
        var jsons = JSON.parse(r.data.body);
        var d = jsons.data;
        console.log(d);
        setDons(d);
        // setDonsName(donsName.push(d[i].name));
        // setDonsTime(donsTime.push(d[i].time));
        console.log(donsName)
    }
    const [donsName, setDonsName] = useState();
    const [donsTime, setDonsTime] = useState();
    
    useEffect(()=>{
        getID();
    }, []);
    useEffect(()=>{
        getID();
    },[navigation.state.params])
    return ( 
        <View style={DashStyle.main}>

        {/* BACKGROUND IMAGE AND DONATE BUTTON */}
        <View style={DashStyle.backgroundImg}>
            <Image style={{width:'100%',height:400, position:'absolute'}}
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
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}
            onPress={()=> Actions.notification1()}
            >
                <View style={DashStyle.donationCircle}>
                    <Text style={DashStyle.circleText}>{numDon}</Text>
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
                    <View>
                        {
                            dons.map((d, i)=>{
                                return (
                                    
                                    <View style={{marginBottom:20}}>
                                        <View>
                                            <View style={DashStyle.upcomingPickup}>
                                                <View style={DashStyle.greenCircle}></View>
                                                <View>
                                                    <Text style={DashStyle.companyName}key={i}>{d.name}</Text>
                                                    <Text >{d.time}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })
                        }
                </View>

            </ScrollView>
        
        </View>



        

    </View>
    )
};
export default DashboardAccept;

