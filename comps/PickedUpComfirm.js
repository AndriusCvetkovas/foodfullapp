import React, { useState, useEffect } from 'react';
import { TextInput, View, Text, Image, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import PickUpComfirmSty from '../styles/PickUpComfirmSty';
import buttonStyle from '../styles/buttonStyle';
import { Actions } from 'react-native-router-flux';
import AcceptedInfo from '../comps/NotifPickComfirm';
import PickUpStyle from '../styles/pickUpStyle';
import MsgCancelDonation from '../comps/MsgCancelDonation';
import GMapStyle from '../styles/mapStyle';
import axios from 'axios';
import AcceptNFStyle from '../styles/AcceptNFStyle'
import Swiper from 'react-native-swiper';

import LottieView from 'lottie-react-native';



function PickedUpComfirm(props) {
    var d = props.dd;
    console.log(props.setShowModal)
    //COMMUNICATION


    var currentId = "";
    const getID = async () => {
        var json = await AsyncStorage.getItem('id');
        currentId = json;
        console.log("userID " + currentId);
        GetDonationsPendings();
    }

    const [dd, setdd] = useState({});

    const GetDonationsPendings = async () => {
        var obj = {
            key: "donations_read",
            data: {
                destination_id: currentId,
                status: 2
            }
        }
        var r = await axios.post(`https://foodfullapp.herokuapp.com/post`, obj);
        var json = JSON.parse(r.data.body);
        //console.log(json.data);
        var d = json.data;
        console.log(d)
    }
    var image = `https://foodfull.s3-us-west-2.amazonaws.com/photo${d.user_id}.jpg`

    const Update4 = async (thisId) => {
        var obj = {
            key: "donations_update",
            data: {
                id: thisId,
                status: 4
            }
        }
        var r = await axios.post(`https://foodfullapp.herokuapp.com/post`, obj);
        var json = JSON.parse(r.data.body);
        console.log(json.data);
        console.log('Your Status is now: ' + obj.data.status);
    }
    const Update5 = async (thisId) => {
        var obj = {
            key: "donations_update",
            data: {
                id: thisId,
                status: 5
            }
        }
        var r = await axios.post(`https://foodfullapp.herokuapp.com/post`, obj);
        var json = JSON.parse(r.data.body);
        console.log(json.data);
        console.log('Your Status is now: ' + obj.data.status);
    }




    var inputValueInit = null;
    const [inputValue, onChangeText] = React.useState(inputValueInit);
    var acceptedInfoContent = (
        <View style={PickUpComfirmSty.main}>
            <View style={PickUpComfirmSty.main2}></View>
            <View
                style={PickUpStyle.infoBox}
            >
                {/*Title box below*/}
                <View>
                    <Text
                        style={PickUpStyle.donatorTitle}
                    >Picked Up</Text>
                </View>
                {/*Image box below*/}
                <View
                    style={[PickUpStyle.imageBox, {top: -170}]}
                >
                    <LottieView
                source={require('../assets/lottieFiles/checkmark.json')}
                style={{alignSelf: 'center',height:550, width:'90%',}}
                autoPlay
                loop
            />
                </View>
                {/*Date box below*/}
                <View


                    style={PickUpStyle.messageBox}
                >
                    <Text>You have picked up your donation from Safeway Extra</Text>
                    <Text style={{ color: '#0ca3bc' }}></Text>
                </View>
                <View
                    style={{ flexDirection: 'row', width: "80%", flex: 0.2 }}
                >
                    <Text style={{ flex: 1, color: '#0ca3bc', fontWeight: '800' }}>How much food you have recieved?</Text>

                </View>
                {/*Time box below*/}
                <View style={{ flexDirection: 'row', width: "80%", flex: 0.4, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#0ca3bc', flex: 1, fontWeight: '800' }}>Weight:</Text>

                    <TextInput
                        style={[PickUpStyle.InputSty, {width: 150}]}
                        onChangeText={(text) => onChangeText(text)}
                        value={inputValue}
                    />
                </View>

                {/*Button below*/}
                <TouchableOpacity
                    onPress={() => { Update4(d.id), [setdd(d)], props.obj.hide(), props.obj.getPendings() }}
                    title="Accept"
                    style={[PickUpStyle.buttonS, {top: 20}]}>
                    <Text
                        style={{ color: 'white' }}
                    >Confirm Pickup</Text>
                </TouchableOpacity>

                <TouchableOpacity style ={{position: 'absolute', top: -30, right: 20}}
                    onPress={props.obj.hide}
                >
                    <Image

                        source={require('../assets/icon/x.png')}
                        style={{ width: 15, height: 15 }}
                    />
                </TouchableOpacity>

            </View>
        </View>

    );


    var cancelPickUp = (
        <View style={[PickUpComfirmSty.main, {height: 500, top: 0}]}>

            <View style={[PickUpComfirmSty.main2]}>
                <View
                    style={[GMapStyle.infoBox, {height:  '100%', width: '100%', backgroundColor: 'transparent'}]}
                >
                    {/*Title box below*/}
                    <View
                        style={{ marginTop: 50}}>
                        <Text
                            style={{color: "#0ca3bc", fontSize: 18, fontFamily: 'Avenir', fontWeight: '600'}}
                        >Pick Up Cancelled</Text>
                    </View>
                    {/*Image box below*/}

                    {/*Date box below*/}
                    <View
                        style={{width: '80%', }}
                    >
                        <Text style={{ height: 200, top: 50, fontFamily: 'DidactGothic-Regular', fontSize: 15, flex: 0}}>You have cancelled this donation from Safeway Extra.
                            They will be informed that you are no longer picking
                            up this donation.
                </Text>
                        <Text style={{ color: '#0ca3bc' }}></Text>
                    </View>
                    <View
                        style={{ flexDirection: 'row', width: "80%", flex: 0.4 }}
                    >
                        <Text style={{ flex: 1, color: '#0ca3bc', fontFamily: 'Avenir', fontSize: 18 }}>Location:</Text>
                        <Text style={{ flex: 1, fontFamily: 'DidactGothic-Regular', fontSize: 15 }}>{d.address}</Text>
                    </View>
                    {/*Time box below*/}
                    <View style={{ flexDirection: 'row', width: "80%", flex: 0.4 }}>
                        <Text style={{ color: '#0ca3bc', flex: 1, fontFamily: 'DidactGothic-Regular', fontSize: 15 }}>Pickup time:</Text>
                        <Text
                            style={{ color: "black", flex: 1, fontFamily: 'DidactGothic-Regular', fontSize: 15 }}
                        >
                            {d.time}
                </Text>
                    </View>

                    {/*Button below*/}
                    <TouchableOpacity
                        onPress={
                            props.obj.hide,
                            console.log("Olala")
                        }
                        title="Accept"
                        style={[buttonStyle.button]}>
                        <Text
                            style={{ color: 'white', fontWeight: '500', fontFamily: 'avenir', fontSize: 16 }}
                        >View Donations</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { props.obj.hide },
                            console.log('Modal Has been Closed')
                        
                        }

                        title="Accept"
                        style={[buttonStyle.button2, {marginBottom: 100}]}>
                        <Text
                            style={{ color: '#0ca3bc', fontWeight: '500', fontFamily: 'avenir', fontSize: 16 }}
                        >Search for Donations</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ position: 'absolute', top: 0, right: 25 }}
                        onPress={props.obj.hide}
                    >
                        <Image

                            source={require('../assets/icon/x.png')}
                            style={{ width: 15, height: 15 }}
                        />
                    </TouchableOpacity>
                </View>


            </View>

        </View>


    );

    var pickedUpModal = (
        <View style ={{height: 500, alignItems: 'center'}}>
                <View style={AcceptNFStyle.main2}>
                {/*Donation info below */}

                <View style={AcceptNFStyle.donationInfoTop}>
                <Swiper  showsButtons={false}>
                    <Image style={[AcceptNFStyle.DImage]}
                    source = {{uri: image}}
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
                            <Text style={AcceptNFStyle.Organization}>{d.name}</Text>
                            {/* <Text style={AcceptNFStyle.address}>Donation Request</Text> */}
                    </View> 
                {/*Date of pickup below */}
                <View style={[AcceptNFStyle.pickupDate]}>
                    <Text style={{ color: '#066a87', fontSize: 16, flex: 2}} onPress={()=> alert('Address',d.address)}>{d.address}</Text>
                </View>
                <View style={AcceptNFStyle.pickupDate}>
                    <Text style={{ color: '#0ca3bc', fontSize: 18, flex: 1,fontWeight: "600" }}>Pickup Date</Text>
                    <Text style={{ color: '#066a87', fontSize: 16, flex: 1}}>{d.date}</Text>
                </View>
                {/*Pickup time below */}
                <View style={AcceptNFStyle.pickupTime}>
                    <Text style={{ color: '#0ca3bc', fontSize: 18, flex: 1,fontWeight: "600" }}>Pickup Time</Text>
                    <Text style={{ color: '#066a87', fontSize: 16, flex: 1 }}>{d.time}</Text>
                </View>
                {/*Description title below */}
                <Text
                    style={AcceptNFStyle.descriptionTitle}
                >Description</Text>
                {/*Description below */}
                <Text
                    style={AcceptNFStyle.description}
                >
                    {d.description}
            </Text>
            </View>
            <TouchableOpacity
                            onPress={()=>{setPickedUpContent(acceptedInfoContent), Update4(d.id)}}
                            title="Accept"
                            style={AcceptNFStyle.button}>
                            <Text
                                style={{ color: '#0ca3bc', fontSize: 16, fontWeight: '500' }}
                            >Picked Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{setPickedUpContent(cancelPickUp), Update5(d.id)}}
                            title="Accept"
                            style={AcceptNFStyle.button2}>
                            <Text
                                style={{ color: 'red', fontSize: 16, fontWeight: '500' }}
                            >Decline Donation</Text>
                        </TouchableOpacity>
                <TouchableOpacity style ={{position: 'absolute', top: 30, right: 30}}
                onPress={()=>{props.obj.hide()}} >
                    <Image
                    
                    source={require('../assets/icon/x.png')}
                    style = {{width: 15, height: 15}}
                    />
                </TouchableOpacity>
            </View>
                </View>
    )

    const [pickedUpContent, setPickedUpContent] = useState(pickedUpModal);

    useEffect(() => {
        getID();
    }, []);

    return (
        <View>
            {pickedUpContent}
        </View>


    )
};
export default PickedUpComfirm;