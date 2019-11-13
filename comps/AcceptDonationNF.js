import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import AcceptNFStyle from '../styles/AcceptNFStyle';
import buttonStyle from '../styles/buttonStyle';
import { Actions } from 'react-native-router-flux';


function AcceptDonationNF() {
    return (
        <View style={AcceptNFStyle.main}>
            <View style={AcceptNFStyle.main2}>
                {/*Donation info below */}

                <View style={AcceptNFStyle.donationInfoTop}>
                    <View style={AcceptNFStyle.Images}>
                        <Text style={AcceptNFStyle.Date}>14</Text>
                        <Text style={AcceptNFStyle.Month}>Jun</Text>
                    </View>

                    <View style={AcceptNFStyle.TextDisplay}>
                        <View>
                            <Text style={AcceptNFStyle.Organization}>Whole Foods</Text>
                        </View>
                        <View>
                            <Text style={AcceptNFStyle.address}>Donation Request</Text>
                        </View>
                        <View>

                        </View>
                    </View>

                </View>
                {/*Image text below */}

                {/*Date of pickup below */}
                <View style={AcceptNFStyle.pickupDate}>
                    <Text style={{ color: '#0ca3bc', fontSize: 18, flex: 1 }}>Loaction</Text>
                    <Text style={{ color: '#066a87', fontSize: 16, flex: 1, marginTop: 18 }}>20014 Williondon V5G 5W8</Text>
                </View>
                {/*Pickup time below */}
                <View style={AcceptNFStyle.pickupTime}>
                    <Text style={{ color: '#0ca3bc', fontSize: 18, flex: 1 }}>Pickup Time</Text>
                    <Text style={{ color: '#066a87', fontSize: 16, flex: 1, marginTop: 18 }}>3:00 pm - 7:00 pm</Text>
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
    )
};
export default AcceptDonationNF;