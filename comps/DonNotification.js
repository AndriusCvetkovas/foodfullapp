import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import DonNotifStyle from '../styles/donNotifStyle';
import donationStyle from '../styles/donationStyle';
import axios from 'axios';
function DonNotification() {
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

{
                dons.map((d, i) => {
                    return (
                        <View style={donationStyle.CardDisplay}>
                            <View style={donationStyle.Images}>
                                <Image
                                    style={donationStyle.ImageSize}
                                    source={require('../assets/img/logo.png')}
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