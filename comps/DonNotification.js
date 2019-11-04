import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import DonNotifStyle from '../styles/donNotifStyle';
import donationStyle from '../styles/donationStyle';
function DonNotification(){
    return(
        <View style={DonNotifStyle.mainView}>
            <View>
                    
                            <View style = {donationStyle.CardDisplay}>
                                <View style = {donationStyle.Images}>
                                    <Image
                                    style={donationStyle.ImageSize}
                                    
                                    />
                                </View>
                                <View style={donationStyle.TextDisplay}>
                                    <View>
                                        <Text style={donationStyle.Organization}></Text>
                                    </View>
                                    <View>
                                        <Text style={donationStyle.address}></Text>
                                    </View>
                                    
                                </View>
                                <View style={donationStyle.TextDisplay}>
                                        <View style={donationStyle.option}>
                                            <TouchableOpacity
                                                style={donationStyle.BtnStyleBlueView}
                                                underlayColor='#000'
                                                color='000'>
                                                <Text style={donationStyle.btnText}>View</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                            </View>
                </View>
        </View>
    )
};
export default DonNotification;