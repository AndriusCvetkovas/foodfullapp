import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import DonNotifStyle from '../styles/donNotifStyle';
import donationStyle from '../styles/donationStyle';
function DonNotification() {
    return (
        <ScrollView>

            <View style={donationStyle.CardDisplay}>
                <View style={donationStyle.Images}>
                <Image
                     style={donationStyle.ImageSize}
                    source={require('../assets/img/wholefoods2.png')}
                 />
                </View>
                <View style={donationStyle.TextDisplay}>
                    <View>
                        <Text style={donationStyle.Organization}> Wholefoods</Text>
                    </View>
                    <View>
                        <Text style={donationStyle.address}> 2375 Lakers Street</Text>
                    </View>

                </View>
                <View style={donationStyle.TextDisplay}>
                    <View style={donationStyle.option}>
                    <Text style={donationStyle.accpText}>Accepted</Text>
                        <TouchableOpacity
                            style={donationStyle.BtnStyleBlueView}
                            underlayColor='#000'
                            color='000'>
                            <Text style={donationStyle.btnText}>View</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>



            <View style={donationStyle.CardDisplay}>
                <View style={donationStyle.Images}>
                <Image
                     style={donationStyle.ImageSize}
                    source={require('../assets/img/safeway.jpg')}
                 />
                </View>
                <View style={donationStyle.TextDisplay}>
                    <View>
                        <Text style={donationStyle.Organization}> Safeway</Text>
                    </View>
                    <View>
                        <Text style={donationStyle.address}> 4475 Dewney Street</Text>
                    </View>

                </View>
                <View style={donationStyle.TextDisplay}>
                    <View style={donationStyle.option}>
                    <Text style={donationStyle.accpText}>Accepted</Text>
                        <TouchableOpacity
                            style={donationStyle.BtnStyleBlueView}
                            underlayColor='#000'
                            color='000'>
                            <Text style={donationStyle.btnText}>View</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>




            <View style={donationStyle.CardDisplay}>
                <View style={donationStyle.Images}>
                <Image
                     style={donationStyle.ImageSize}
                    source={require('../assets/img/wholefoods.jpg')}
                 />
                </View>
                <View style={donationStyle.TextDisplay}>
                    <View>
                        <Text style={donationStyle.Organization}> Safeway</Text>
                    </View>
                    <View>
                        <Text style={donationStyle.address}> 1175 Kuaka Street</Text>
                    </View>

                </View>
                <View style={donationStyle.TextDisplay}>
                    <View style={donationStyle.option}>
                    <Text style={donationStyle.DeclinedText}>Declined</Text>
                        <TouchableOpacity
                            style={donationStyle.BtnStyleBlueView}
                            underlayColor='#000'
                            color='000'>
                            <Text style={donationStyle.btnText}>View</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>





            <View style={donationStyle.CardDisplay}>
                <View style={donationStyle.Images}>
                <Image
                     style={donationStyle.ImageSize}
                    source={require('../assets/img/safeway.jpg')}
                 />
                </View>
                <View style={donationStyle.TextDisplay}>
                    <View>
                        <Text style={donationStyle.Organization}> Safeway</Text>
                    </View>
                    <View>
                        <Text style={donationStyle.address}> 4475 Parker Street</Text>
                    </View>

                </View>
                <View style={donationStyle.TextDisplay}>
                    <View style={donationStyle.option}>
                    <Text style={donationStyle.accpText}>Accepted</Text>
                        <TouchableOpacity
                            style={donationStyle.BtnStyleBlueView}
                            underlayColor='#000'
                            color='000'>
                            <Text style={donationStyle.btnText}>View</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>



            <View style={donationStyle.CardDisplay}>
                <View style={donationStyle.Images}>
                <Image
                     style={donationStyle.ImageSize}
                    source={require('../assets/img/saveon.jpg')}
                 />
                </View>
                <View style={donationStyle.TextDisplay}>
                    <View>
                        <Text style={donationStyle.Organization}> Saveon</Text>
                    </View>
                    <View>
                        <Text style={donationStyle.address}> 4475 Luke Street</Text>
                    </View>

                </View>
                <View style={donationStyle.TextDisplay}>
                    <View style={donationStyle.option}>
                    <Text style={donationStyle.DeclinedText}>Declined</Text>
                        <TouchableOpacity
                            style={donationStyle.BtnStyleBlueView}
                            underlayColor='#000'
                            color='000'>
                            <Text style={donationStyle.btnText}>View</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
};
export default DonNotification;