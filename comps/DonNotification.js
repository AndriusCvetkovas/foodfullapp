import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import DonNotifStyle from '../styles/donNotifStyle';
import donationStyle from '../styles/donationStyle';
import axios from 'axios';
import Modal from "react-native-modal";
import AcceptNFStyle from '../styles/AcceptNFStyle'
function DonNotification() {
    const [showModal, setShowModal]= useState(false);
    var currentId = "";
    const getID = async () => {
        var json = await AsyncStorage.getItem('id');
        currentId = json;
        console.log("userID " + currentId);
        GetDonations();
    }

    const [dons, setDons] = useState([]);
    const GetDonations = async () => {
        var obj = {
            key: "donations_read",
            data: {
                user_id: currentId
            }
        }
        var r = await axios.post(`http://localhost:3001/post`, obj);
        var json = JSON.parse(r.data.body);
        //console.log(json.data);
        var d = json.data;
        setDons(d);
    }
    useEffect(()=>{
        getID();
    }, [])
    return (
        <ScrollView>
            <Modal isVisible={showModal}
            coverScreen={false}
            animationIn='slideInUp'
            style = {{backgroundColor: 'transparent', height: 50,width: '95%', position: 'absolute', top: 300, right: 0}}
            isVisible = {showModal}
            onBackdropPress={() => setShowModal(!showModal)}
            >
                <View style ={{height: 500, alignItems: 'center'}}>
                <View style={AcceptNFStyle.main2}>
                {/*Donation info below */}

                <View style={AcceptNFStyle.donationInfoTop}>
                    <View style={AcceptNFStyle.Images}>
                        <Text style={AcceptNFStyle.Date}>14</Text>
                        <Text style={AcceptNFStyle.Month}>Jun</Text>
                    </View>

                    <View style={AcceptNFStyle.TextDisplay}>
                            <Text style={AcceptNFStyle.Organization}>name</Text>
                            <Text style={AcceptNFStyle.address}>Donation Request</Text>
                    </View>

                </View>
                {/*Image text below */}

                {/*Date of pickup below */}
                <View style={AcceptNFStyle.pickupDate}>
                    <Text style={{ color: '#0ca3bc', fontSize: 18, flex: 1 }}>Loaction</Text>
                    <Text style={{ color: '#066a87', fontSize: 16, flex: 1}}>address</Text>
                </View>
                {/*Pickup time below */}
                <View style={AcceptNFStyle.pickupTime}>
                    <Text style={{ color: '#0ca3bc', fontSize: 18, flex: 1 }}>Pickup Time</Text>
                    <Text style={{ color: '#066a87', fontSize: 16, flex: 1 }}>3:00 pm - 7:00 pm</Text>
                </View>
                {/*Description title below */}
                <Text
                    style={AcceptNFStyle.descriptionTitle}
                >Description</Text>
                {/*Description below */}
                <Text
                    style={AcceptNFStyle.description}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            </Text>
                <TouchableOpacity

                    title="Accept"
                    style={AcceptNFStyle.button}>
                    <Text
                        style={{ color: '#0ca3bc', fontSize: 16, fontWeight: '500' }}
                    >Accept Donation</Text>
                </TouchableOpacity>
                <TouchableOpacity

                    title="Accept"
                    style={AcceptNFStyle.button2}>
                    <Text
                        style={{ color: 'red', fontSize: 16, fontWeight: '500' }}
                    >Decline Donation</Text>
                </TouchableOpacity>
            </View>
                </View>
            </Modal>


{
                dons.map((d, i) => {
                    if(d.status == 1){
                        var texta = 'Pending...';
                        var colorz = '#ee9a23'
                    }else if (d.status == 2) {
                        texta = 'Accepted...'
                        colorz = '#a5d826'
                    }else {
                        texta = 'Declined...'
                        colorz = 'red'
                    }
                    
                    return (
                        <View style={donationStyle.CardDisplay}>
                            <View style={donationStyle.Images}>
                            <Image
                                style={donationStyle.ImageSize}
                                source={require('../assets/img/safeway.jpg')}
                                />
                            </View>
                            <View style={donationStyle.TextDisplay}>
                                <View>
                                    <Text style={donationStyle.Organization} key={i}>{d.name}</Text>
                                </View>
                                <View>
                                    <Text style={donationStyle.address}>{d.address}</Text>
                                </View>

                            </View>
                            <View style={donationStyle.TextDisplay}>
                            <Text style={[donationStyle.accpText, {color: colorz}]}>{texta}</Text>
                                <View style={donationStyle.option}>
                                    <TouchableOpacity
                                        style={donationStyle.BtnStyleBlueView}
                                        underlayColor='#000'
                                        color='000'
                                        onPress={()=>setShowModal(!showModal)}>
                                        <Text style={donationStyle.btnText}>View</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )
                })
            }



        
        </ScrollView>
    )
};
export default DonNotification;