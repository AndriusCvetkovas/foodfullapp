
import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import donationStyle from '../../styles/donationStyle';
import axios from 'axios';
import Modal from "react-native-modal";
import AcceptNFStyle from '../../styles/AcceptNFStyle';
import Swiper from 'react-native-swiper';
function Donations() {
    // MODAL VIEW 
    const [showModal, setShowModal] = useState(false);




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
    const [dd, setdd] = useState({});
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
        var r = await axios.post(`https://foodfullapp.herokuapp.com/post`, obj);
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
        var r = await axios.post(`https://foodfullapp.herokuapp.com/post`, obj);
        var json = JSON.parse(r.data.body);
        console.log(json.data);

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
    }, []);
    return (

        <View style={{backgroundColor:'#f4f4f4'}}>
            {CheckifDon()}

            <ScrollView style={{ height: '100%' }}>

                {
                    dons.map((d, i) => {
                        return (

                            <View style={[donationStyle.CardDisplay, {marginTop:2}]}>
                                <View style={donationStyle.Images}>
                                    <Image
                                        style={donationStyle.ImageSize}
                                        source={{uri: `https://foodfull.s3-us-west-2.amazonaws.com/avatar0.jpg`}}
                                    />
                                </View>
                                <View style={donationStyle.TextDisplay}>
                                    <View>
                                        <Text style={donationStyle.Organization} key={i} >{d.name}</Text>
                                    </View>
                                    <View>
                                        <Text style={donationStyle.address}>{d.address}</Text>
                                    </View>

                                </View>
                                <View style={donationStyle.TextDisplay}>
                                    <View style={donationStyle.option}>

                                        <TouchableOpacity
                                           style={{left:95, top:-33}}
                                            underlayColor='#000'
                                            color='000'
                                            onPress={() => [setShowModal(!showModal), setdd(d), console.log(dd)]}>
                                            {/* <Text style={donationStyle.btnText}>View</Text> */}
                                            <Image style={donationStyle.Dots} source={require("../../assets/icon/options.png")} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                {/* <TouchableOpacity style ={{position: 'absolute', top: 30, right: 30}}
                                    onPress={()=>{setShowModal(!showModal)}}>
                                        <Image
                                        
                                        source={require('../assets/icon/x.png')}
                                        style = {{width: 15, height: 15}}
                                        />
                                    </TouchableOpacity> */}
                            </View>
                        )
                    })
                }
            </ScrollView>
            
            <Modal isVisible={showModal}
            coverScreen={false}
            animationIn='slideInUp'
            style = {{backgroundColor: 'transparent', height: 50,width: '95%', position: 'absolute', top: "40%", alignSelf:'center'}}
            isVisible = {showModal}
            onBackdropPress={() => setShowModal(!showModal)}
            >
                <View style ={{height: 550, alignItems: 'center'}}>
                <View style={AcceptNFStyle.main2}>
                {/*Donation info below */}

                <View style={AcceptNFStyle.donationInfoTop}>
                {/* <Swiper  showsButtons={false}> */}
                    <Image style={AcceptNFStyle.DImage}
                    source = {{uri: `https://foodfull.s3-us-west-2.amazonaws.com/photo${dd.user_id}.jpg`}}
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
                {/* </Swiper> */}


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
                    <Text style={{ color: '#0ca3bc', fontSize: 18, flex: 1,fontWeight: "800", fontFamily:'Avenir' }}>Pickup Date</Text>
                    <Text style={{ color: '#066a87', fontSize: 16, flex: 1}}>{dd.date}</Text>
                </View>
                {/*Pickup time below */}
                <View style={AcceptNFStyle.pickupTime}>
                    <Text style={{ color: '#0ca3bc', fontSize: 18, flex: 1,fontWeight: "800", fontFamily:'Avenir' }}>Pickup Time</Text>
                    <Text style={{ color: '#066a87', fontSize: 16, flex: 1 }}>{dd.time}</Text>
                </View>
                {/*Description title below */}
                <Text
                    style={[AcceptNFStyle.descriptionTitle,{fontWeight:'800', top:5}]}
                >Description</Text>
                {/*Description below */}
                <Text
                    style={[AcceptNFStyle.description,{top:5}]}
                >
                    {dd.description}
            </Text>
            </View>
            <TouchableOpacity
                            onPress={() => { Update2(dd.id), setShowModal(!showModal), getID() }}
                            title="Accept"
                            style={AcceptNFStyle.button}>
                            <Text
                                style={{ color: '#0ca3bc', fontSize: 16, fontWeight: '500' }}
                            >Accept Donation</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { Update3(dd.id), setShowModal(!showModal), getID() }}
                            title="Accept"
                            style={AcceptNFStyle.button2}>
                            <Text
                                style={{ color: 'red', fontSize: 16, fontWeight: '500' }}
                            >Decline Donation</Text>
                        </TouchableOpacity>
                <TouchableOpacity style ={{position: 'absolute', top: 30, right: 30}}
                onPress={()=>{setShowModal(!showModal)}}>
                    <Image
                    
                    source={require('../../assets/icon/x.png')}
                    style = {{width: 15, height: 15}}
                    />
                </TouchableOpacity>
            </View>
                </View>
            </Modal>
        </View>
    );
}
export default Donations


