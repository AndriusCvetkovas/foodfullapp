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
                        source={require('../assets/img/logo.png')}
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
                        source={require('../assets/img/logo.png')}
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
                        source={require('../assets/img/logo.png')}
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
                        source={require('../assets/img/logo.png')}
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
                        source={require('../assets/img/logo.png')}
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