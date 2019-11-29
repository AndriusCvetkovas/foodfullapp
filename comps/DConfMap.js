import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import MsgNfStyles from '../styles/MsgNfStyles';
import buttonStyle from '../styles/buttonStyle';
import {Actions} from 'react-native-router-flux';

function AcceptedInfo({address, time, date, names}) {
    var addr = address;
    var t = time;
    var d = date;
    var n = names;
    return (
        <View
            style={MsgNfStyles.infoBox}
        >
            {/*Title box below*/}
            <View
                style={{ marginTop: 50 }}>
                <Text
                    style={MsgNfStyles.donatorTitle}
                >Claimed</Text>
            </View>
            {/*Image box below*/}
            <View
                style={MsgNfStyles.imageBox}
            >
                <Image
                    style={MsgNfStyles.checkmarkImage}
                    source={require('../assets/icon/checkmark.png')}
                />
            </View>
            {/*Date box below*/}
            <View
                style={MsgNfStyles.messageBox}
            >
                <Text style={{ marginTop: 15, fontFamily: 'DidactGothic-Regular', fontSize: 15 }}>You have claimed this donation from {n}</Text>
                <Text style={{ color: '#0ca3bc' }}></Text>
            </View>
            <View
                style={{ flexDirection: 'row', width: "80%", flex: 0.4, alignItems: 'center' }}
            >
                <Text style={{ flex: 1, color: '#0ca3bc', flex: 1, fontFamily: 'Avenir', fontSize: 18 }}>Location:</Text>
                <Text style={{ flex: 1, fontFamily: 'DidactGothic-Regular', fontSize: 15 }}>{addr}</Text>
            </View>
            {/*Time box below*/}
            <View style={{ flexDirection: 'row', width: "80%", flex: 0.4, alignItems: 'center' }}>
                <Text style={{ color: '#0ca3bc', flex: 1, flex: 1, fontFamily: 'Avenir', fontSize: 18 }}>Pickup time:</Text>
                <Text
                    style={{ color: "black", flex: 1, fontFamily: 'DidactGothic-Regular', fontSize: 15 }}
                >
                    {d} {t}
                </Text>
            </View>

            {/*Button below*/}
            <TouchableHighlight
                title="Accept"
                style={buttonStyle.button}
                onPress={()=>Actions.mapaccept()}>
                <Text
                    style={{ color: 'white', fontWeight: '500', fontFamily: 'avenir', fontSize: 16 }}
                >Claim another Donation</Text>
            </TouchableHighlight>
            <TouchableHighlight
                title="Accept"
                style={buttonStyle.button2}
                onPress={()=> Actions.notification1({pickup: 1})}>
                <Text
                    style={{ color: '#0ca3bc', fontWeight: '500', fontFamily: 'avenir', fontSize: 16 }}
                >View pickups</Text>
            </TouchableHighlight>
        </View>
    );
};
export default AcceptedInfo;