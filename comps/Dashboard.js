import React, {useEffect, useState} from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import DashStyle from '../styles/dashboardStyle';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';


function Dashboard({navigation}) {
    var currentId= 0;
    //RECEIVE CURRENT USER ID FROM ASYNC STORAGE
    const getID = async () =>{
        var json = await AsyncStorage.getItem('id');
        currentId = json;
        console.log("userID "+currentId);
        GetDonations();
    }
    const [dons, setDons] = useState([]);
    const [name, setName] = useState();
    const [user, setUser] = useState([]);
    const GetDonations = async () => {
        var obj = {
        key: "donations_read",
        data: {
            user_id: currentId,
            status: 2,
        }
        }
        var r = await axios.post(`http://localhost:3001/post`, obj);
        var json = JSON.parse(r.data.body);
        console.log(json.data, json.receivers);
        var d = json.data;
        setUser(json.receivers);
        setDons(d);
        
    
        
    }
    //GET ACCEPTOR NAME
    const GetName = async (id) => {
        var obj = {
        key: "users_read",
        data: {
            id: id
        }
        }
        var b = await axios.post(`http://localhost:3001/post`, obj);
        var json = JSON.parse(b.data.body);
        console.log(json.data);
        var bb = json.data;
        setName(bb);
    }
    const [n, setn] = useState();
    
    useEffect(()=>{
        getID();
    }, []);
    useEffect(()=>{
        getID();
    },[navigation.state.params]);
    useEffect(()=> {
        if(dons == ''){
            setn('You have no pickups')
        }else {
            setn('Today')
        }
    }, [GetDonations])
    return (
        <View style={DashStyle.main}>

            {/* BACKGROUND IMAGE AND DONATE BUTTON */}
            <View style={DashStyle.backgroundImg}>
                <Image style={{ width: '100%', height: 420, position: 'absolute' }}
                    source={require('../assets/img/dashboard_illustration.png')}>
                </Image>

                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={DashStyle.header}>Let's Make a Change</Text>
                    <TouchableOpacity
                        style={DashStyle.donateButton}
                        onPress={() => Actions.postdonation()}>
                        <Text style={DashStyle.donateButtonText}>Donate</Text>
                    </TouchableOpacity>
                </View>
            </View>


            {/*LEADERBOARD/"YOU ARE IN 2ND PLACE"*/}
            <View style={DashStyle.leaderBoardMain}>
                <View style={DashStyle.your}>
                    <View style={DashStyle.innerLeadB}>
                        <View>
                            <Image
                                style={{ width: 95, height: 95, borderRadius: 100, backgroundColor: "#aaaaaa", left: -8 }}
                                source={require('../assets/img/safeway.jpg')}
                            ></Image>
                        </View>
                        <View style={{ margin: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: '#01657c', fontSize: 20, marginBottom: 5, fontFamily: 'Avenir', fontWeight: '600' }}>You are in </Text>
                                <Text style={{ color: '#0ca3bc', fontSize: 23, marginBottom: 5, fontFamily: 'Avenir', fontWeight: '800' }}>2nd </Text>
                                <Text style={{ color: '#01657c', fontSize: 20, marginBottom: 5, fontFamily: 'Avenir', fontWeight: '600' }}>place</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#0ca3bc', fontSize: 18, marginRight: 15 }}>40 Donations</Text>
                                <Text style={{ color: '#A4D638', fontSize: 18, fontFamily: 'Avenir', fontWeight: '800' }}>1100 Kg</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                        onPress={()=>Actions.leaderboard()}
                        >
                            <Image style={{ width: 15, height: 20, position: 'absolute', top: -10 }}
                                source={require('../assets/icon/next.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


            {/*UPCOMING SCHEDULE*/}
            {/* container to hold the notifications */}
            <View style={DashStyle.notifContainer}>
                <Text style={DashStyle.title}>Upcoming Pickups</Text>
                <ScrollView style={{ width: '90%' }}>
                    {/* Date with line */}
                    <View style={{ left: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                        <Image
                        source={require('../assets/icon/donating.png')}
                        style={{width: 200, height: 170, position: 'absolute', top: 50, opacity: 0.05, }}
                        ></Image>
                        <View style={[DashStyle.line, {marginRight: 20}]}></View>
                        <Text style={[DashStyle.dateTitle]}>{n}</Text>
                        <View style={DashStyle.line}></View>
                    </View>

                    {
                        dons.map((d, i)=>{
                                //GetName(d.destination_id); user[destination_id].name || ""
                                var uname = user[d.destination_id].name || "";
                                
                                //console.log(uname)


                            return (
                                    
                                <View style={{ marginBottom: 10 }}>
                                    <View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={DashStyle.dateCircle}>
                                            </View>
                                            <View>
                                                <Text style={{ fontSize: 20, fontFamily: 'avenir', fontWeight: '500' } } key={i}>{uname}</Text>
                                                <Text>{d.time}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }

                    {/* Date with line */}

                </ScrollView>
            </View>



        </View>
    )
};
export default AppContent;
