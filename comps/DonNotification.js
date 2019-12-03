import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import DonNotifStyle from '../styles/donNotifStyle';
import donationStyle from '../styles/donationStyle';
import axios from 'axios';
import Modal from "react-native-modal";
import AcceptNFStyle from '../styles/AcceptNFStyle';
import AppHeaderStyle from '../styles/headerStyle';
import LottieView from 'lottie-react-native';
import Swiper from 'react-native-swiper'

function DonNotification() {
    const [showModal, setShowModal] = useState(false);
    var currentId = "";
    const getID = async () => {
        var json = await AsyncStorage.getItem('id');
        currentId = json;
        console.log("userID " + currentId);
        GetDonations();
    }

    const [dons, setDons] = useState([]);
    const [dd, setdd] = useState({});
    const GetDonations = async () => {
        var obj = {
            key: "donations_read",
            data: {
                user_id: currentId,
            }
        }
        var r = await axios.post(`https://foodfullapp.herokuapp.com/post`, obj);
        var json = JSON.parse(r.data.body);
        console.log(json.data);
        var d = json.data;
        setDons(d);
    }
    const CheckifDon = () => {
        if (dons == '') {
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center', top: '50%' }}>
                    <Text style={{ color: 'grey', fontFamily: 'avenir', fontSize: 20 }}>You don't have any notifications...</Text>
                </View>
            )
        }
    }
    useEffect(() => {
        getID();
    }, [])
    return (
        <View>
            {CheckifDon()}
            <Modal isVisible={showModal}
                coverScreen={false}
                animationIn='slideInUp'
                style={{ alignSelf: 'center', backgroundColor: 'transparent', height: 50, width: '95%', position: 'absolute', top: "40%"}}
                isVisible={showModal}
                onBackdropPress={() => setShowModal(!showModal)}
            >
                <View style ={{height: 500, alignItems: 'center'}}>
                <View style={AcceptNFStyle.main2}>
                {/*Donation info below */}

                <View style={AcceptNFStyle.donationInfoTop}>
                <Swiper  showsButtons={false}>
                    <Image style={AcceptNFStyle.DImage}
                    source = {{uri: `https://foodfull.s3-us-west-2.amazonaws.com/photo${currentId}.jpg`}}
                    >
                    </Image>
                    {/* <Image style={AcceptNFStyle.DImage}
                    source = {{uri: `https://foodfull.s3-us-west-2.amazonaws.com/photo${dd.image_url[1]}.jpg`}}
                    >
                    </Image>
                    <Image style={AcceptNFStyle.DImage}
                    source = {{uri: `https://foodfull.s3-us-west-2.amazonaws.com/photo${dd.image_url[1]}.jpg`}}
                    >
                    </Image>  */}
                </Swiper>


                </View>
                {/*Image text below */}
                <View style ={{flex: 1.5, padding: 5}}>
                <View style={AcceptNFStyle.TextDisplay}>
                            <Text style={AcceptNFStyle.Organization}>{dd.name}</Text>
                            {/* <Text style={AcceptNFStyle.address}>Donation Request</Text> */}
                    </View> 
                {/*Date of pickup below */}
                <View style={[AcceptNFStyle.pickupDate, {flex: 1.3}]}>
                    <Text style={{ color: '#066a87', fontSize: 16, flex: 2}} onPress={()=> alert('Address',dd.address)}>{dd.address}</Text>
                </View>
                <View style={AcceptNFStyle.pickupDate}>
                    <Text style={{ color: '#0ca3bc', fontSize: 18, flex: 1,fontWeight: "600" }}>Pickup Date</Text>
                    <Text style={{ color: '#066a87', fontSize: 16, flex: 1}}>{dd.date}</Text>
                </View>
                {/*Pickup time below */}
                <View style={AcceptNFStyle.pickupTime}>
                    <Text style={{ color: '#0ca3bc', fontSize: 18, flex: 1,fontWeight: "600" }}>Pickup Time</Text>
                    <Text style={{ color: '#066a87', fontSize: 16, flex: 1 }}>{dd.time}</Text>
                </View>
                {/*Description title below */}
                <Text
                    style={AcceptNFStyle.descriptionTitle}
                >Description</Text>
                {/*Description below */}
                <Text
                    style={AcceptNFStyle.description}
                >
                    {dd.description}
            </Text>
            </View>
            
                <TouchableOpacity style ={{position: 'absolute', top: 30, right: 30}}
                onPress={()=>{setShowModal(!showModal)}}>
                    <Image
                    
                    source={require('../assets/icon/x.png')}
                    style = {{width: 15, height: 15}}
                    />
                </TouchableOpacity>
            </View>
                </View>
            </Modal>
            <ScrollView style={{ height: '100%' }}>


                {
                    dons.map((d, i) => {
                        if (d.status == 1 || d.status == 0) {
                            var texta = 'Your donation is not yet accepted';
                            var colorz = '#ee9a23'
                        } else if (d.status == 2) {
                            texta = 'Foodbank accepted your donation!'
                            colorz = '#a5d826'
                        } else if (d.status == 4){
                            texta = 'Your donation was picked up!'
                            colorz = '#a5d826'
                        } else if (d.status == 5 || d.status == 3){
                            texta = 'Your donation was cancelled!'
                            colorz = 'red'
                        }else {
                            texta = 'SOMETHING WENT WRONG'
                            colorz = 'grey'
                        }


                        return (


                            <View style={[donationStyle.CardDisplay, { top: 50, }]}>
                                <View style={donationStyle.Images}>
                                <Image
                                style={{width: 90,
                                    height: 90,
                                    borderRadius: 15,}}
                                source={{uri: `https://foodfull.s3-us-west-2.amazonaws.com/photo${currentId}.jpg`}}
                                /> 
                                </View>
                                <View style={donationStyle.TextDisplay}>
                                    <View>
                                        <Text style={donationStyle.Organization} key={i}>{d.name}</Text>
                                    </View>
                                    <View>
                                        <Text style={[donationStyle.address, {fontSize: 16, fontWeight: '600', marginTop: 10}]}>{d.date}</Text>
                                        <Text style={[donationStyle.address, {fontSize: 16, fontWeight: '600'}]}>{d.time}</Text>
                                    </View>
                                    <View>
                                        <Text style={[donationStyle.optionText, {color: colorz}]}>{texta}</Text>
                                    </View>

                                </View>
                                <View style={donationStyle.TextDisplay}>
                                    <TouchableOpacity style={{ right: -120, top: -50, }}
                                        onPress={() => [setShowModal(!showModal), setdd(d)]}
                                    >
                                        <Image style={donationStyle.Dots} source={require("../assets/icon/dot_nav.png")} />
                                    </TouchableOpacity>
                                </View>


                            </View>
                        )
                    })
                }




            </ScrollView>


        </View>
    )
};
export default DonNotification;