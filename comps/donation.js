/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import donationStyle from '../styles/donationStyle';
import axios from 'axios';
import Donate from './donate';
import Modal from "react-native-modal";
import AcceptDonationNF from './AcceptDonationNF';
import AcceptNFStyle from '../styles/AcceptNFStyle';
import buttonStyle from '../styles/buttonStyle';
function Donations() {
    // MODAL VIEW 
    const [showModal, setShowModal]= useState(false);




    //COMMUNICATION
    var currentId = "";
    const getID = async () => {
        var json = await AsyncStorage.getItem('id');
        currentId = json;
        console.log("userID " + currentId);
        GetDonations();
    }

    const [dons, setDons] = useState([]);
    const [donsName, setDonsName] = useState([]);
    const [donsAddress, setDonsAddress] = useState();
    const [dd, setdd]=useState({});
    
    const GetDonations = async () => {
        var obj = {
            key: "donations_read",
            data: {
                destination_id: currentId,
                status: 1
            }
        }
        var r = await axios.post(`http://localhost:3001/post`, obj);
        var json = JSON.parse(r.data.body);
        //console.log(json.data);
        var d = json.data;
        setDons(d);
    }
    const Update2 = async (thisId) => {
        var obj = {
            key: "donations_update",
            data: {
                id: thisId,
                status: 2
            }
        }
        var r = await axios.post(`http://localhost:3001/post`, obj);
        var json = JSON.parse(r.data.body);
        console.log(json.data);
        
    }
    const Update3 = async (thisId) => {
        var obj = {
            key: "donations_update",
            data: {
                id: thisId,
                status: 3
            }
        }
        var r = await axios.post(`http://localhost:3001/post`, obj);
        var json = JSON.parse(r.data.body);
        console.log(json.data);
        
    }

    useEffect(() => {
        getID();
    }, []);
    return (

        <View>
            
        <ScrollView style ={{height: '100%'}}>

            {
                dons.map((d, i) => {
                    return (
                       
                            <View style = {donationStyle.CardDisplay}>
                                <View style = {donationStyle.Images}>
                                    <Image
                                    style={donationStyle.ImageSize}
                                    source={require('../assets/img/safeway.jpg')}
                                    />
                                </View>
                                <View style={donationStyle.TextDisplay}>
                                    <View>
                                        <Text style={donationStyle.Organization} >{d.name}</Text>
                                    </View>
                                    <View>
                                        <Text style={donationStyle.address}>{d.address}</Text>
                                    </View>
                                    
                                </View>
                                <View style={donationStyle.TextDisplay}>
                                        <View style={donationStyle.option}>
                                        
                                            <TouchableOpacity
                                                style={donationStyle.BtnStyleBlueView}
                                                underlayColor='#000'
                                                color='000'
                                                    onPress={()=>[setShowModal(!showModal), setdd(d),console.log(dd)]}>
                                                <Text style={donationStyle.btnText}>View</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                            </View>
                    )
                })
            }
        </ScrollView>
        <Modal isVisible={showModal}
            coverScreen={false}
            animationIn='slideInUp'
            style = {{backgroundColor: 'transparent', height: 500,width: 380, position: "absolute"}}
            isVisible = {showModal}
            onBackdropPress={() => setShowModal(!showModal)}
            >
                <View style ={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <View style={AcceptNFStyle.main2}>
                {/*Donation info below */}

                <View style={AcceptNFStyle.donationInfoTop}>
                    <View style={AcceptNFStyle.Images}>
                    <Text style={AcceptNFStyle.Month}>Date</Text>
                        <Text style={AcceptNFStyle.Month}>{dd.date}</Text>
                    </View>

                    <View style={AcceptNFStyle.TextDisplay}>
                    <Text style={AcceptNFStyle.Organization}>{dd.name}</Text>
                            <Text style={AcceptNFStyle.address}>Donation Request</Text>
                    </View>

                </View>
                {/*Image text below */}

                {/*Date of pickup below */}
                <View style={AcceptNFStyle.pickupDate}>
                    <Text style={{ color: '#0ca3bc', fontSize: 18, flex: 1 }}>Location</Text>
                    <Text style={{ color: '#066a87', fontSize: 16, flex: 1}}>{dd.address}</Text>
                </View>
                {/*Pickup time below */}
                <View style={AcceptNFStyle.pickupTime}>
                    <Text style={{ color: '#0ca3bc', fontSize: 18, flex: 1 }}>Pickup Time</Text>
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
                <TouchableOpacity
                    onPress={()=>{Update2(dd.id), setShowModal(!showModal),getID()}}
                    title="Accept"
                    style={AcceptNFStyle.button}>
                    <Text
                        style={{ color: '#0ca3bc', fontSize: 16, fontWeight: '500' }}
                    >Accept Donation</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{Update3(dd.id), setShowModal(!showModal),getID()}}
                    title="Accept"
                    style={AcceptNFStyle.button2}>
                    <Text
                        style={{ color: 'red', fontSize: 16, fontWeight: '500' }}
                    >Decline Donation</Text>
                </TouchableOpacity>
            </View>
                </View>
            </Modal>
        </View>
    );
}
export default Donations


