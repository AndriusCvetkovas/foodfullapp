import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import DonNotifStyle from '../styles/donNotifStyle';
import donationStyle from '../styles/donationStyle';
import axios from 'axios';
import Modal from "react-native-modal";
import AcceptNFStyle from '../styles/AcceptNFStyle';
import AppHeaderStyle from '../styles/headerStyle';
import LottieView from 'lottie-react-native';
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
    const [dd, setdd]=useState({});
    const GetDonations = async () => {
        var obj = {
            key: "donations_read",
            data: {
                user_id: currentId,
                status: 2
            }
        }
        var r = await axios.post(`http://localhost:3001/post`, obj);
        var json = JSON.parse(r.data.body);
        console.log(json.data);
        var d = json.data;
        setDons(d);
    }
    const CheckifDon = () => {
        if(dons == ''){
            return (
                <View style ={{alignItems: 'center', justifyContent: 'center', top: '50%'}}>
                    <Text style ={{color: 'grey', fontFamily: 'avenir', fontSize: 20}}>You don't have any notifications...</Text>
                </View>
            )
        }
    }
    useEffect(()=>{
        getID();
    }, [])
    return (
        <View>
            {CheckifDon()}
            {/* <LottieView
            source={require('../assets/lottieFiles/avocado.json')}
            style={{justifyContent:'center', alignItems:'center',height:200, width:200, top: 50}}
        /> */}
            <Modal isVisible={showModal}
            coverScreen={false}
            animationIn='slideInUp'
            style = {{backgroundColor: 'transparent', height: 50,width: '95%', position: 'absolute', top: "40%", right: 0,bottom:0, zIndex: 1}}
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
                            <Text style={AcceptNFStyle.Organization}>{dd.name}</Text>
                            <Text style={AcceptNFStyle.address}>Donation Request</Text>
                    </View>

                </View>
                {/*Image text below */}

                {/*Date of pickup below */}
                <View style={AcceptNFStyle.pickupDate}>
                    <Text style={{ color: '#0ca3bc', fontSize: 18, flex: 1 }}>Loaction</Text>
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
        <ScrollView style ={{height: '100%'}}>
            

{
                dons.map((d, i) => {
                    if(d.status == 1){
                        var texta = 'Your donation is not yet accepted';
                        var colorz = '#ee9a23'
                    }else if (d.status == 2) {
                        texta = 'Foodbank accepted your donation!'
                        colorz = '#a5d826'
                    }
                    
                    
                    return (
                        <View style={[donationStyle.CardDisplay, {top: 50,}]}>
                            <View style={donationStyle.Images}>
                            <Image
                                style={{height: 60, width: 70}}
                                source={require('../assets/icon/donating.png')}
                                />
                            </View>
                            <View style={donationStyle.TextDisplay}>
                                <View>
                                    <Text style={donationStyle.Organization} key={i}>{texta}</Text>
                                </View>
                                <View>
                                    <Text style={donationStyle.address}>{d.date+" " + " "+d.time}</Text>
                                </View>

                            </View>
                            <View style={donationStyle.TextDisplay}>
                                <TouchableOpacity style = {{right: -120, top: -20, }}
                                onPress={()=> [setShowModal(!showModal), setdd(d)]}
                                >
                                    <Image style={donationStyle.Dots} source={require("../assets/icon/dot_nav.png")} />
                                </TouchableOpacity> 
                            {/* <Text style={[donationStyle.accpText, {color: colorz}]}>{texta}</Text> */}
                                <View style={donationStyle.option}>
                                    {/* <TouchableOpacity
                                        style={donationStyle.BtnStyleBlueView}
                                        underlayColor='#000'
                                        color='000'
                                        onPress={()=>{[setShowModal(!showModal),setdd(d)]}}>
                                        <Text style={donationStyle.btnText}>View</Text>
                                    </TouchableOpacity> */}
                                </View>
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