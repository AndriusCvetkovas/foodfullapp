import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import GMapStyle from '../styles/mapStyle';
import buttonStyle from '../styles/buttonStyle';
import {Actions} from 'react-native-router-flux';


function MsgCancelDonation(props){
    return(
        <View
        style = {GMapStyle.infoBox}
        >
            {/*Title box below*/} 
            <View
            style = {{marginTop: 50}}>
                <Text
                style = {GMapStyle.CancelledText}
                >Pick Up Cancelled</Text>
            </View>
            {/*Image box below*/} 
           
            {/*Date box below*/} 
            <View
            style = {GMapStyle.messageBox}
            >
                <Text style = {{height:70,marginTop: 40, fontFamily: 'DidactGothic-Regular', fontSize: 15}}>You have cancelled this donation from Safeway Extra.
They will be informed that you are no longer picking
up this donation.</Text>
                <Text style = {{color: '#0ca3bc'}}></Text>
            </View>
            <View
            style = {{flexDirection: 'row', width: "80%", flex: 0.4}}
            >
                <Text style = {{flex: 1, color: '#0ca3bc', fontFamily: 'Avenir', fontSize: 18}}>Location:</Text>
                <Text style = {{flex: 1, fontFamily: 'DidactGothic-Regular', fontSize: 15}}>6666 Iona</Text>
            </View>
            {/*Time box below*/} 
            <View style = {{flexDirection: 'row', width: "80%", flex: 0.4}}>
                <Text style = {{color: '#0ca3bc', flex: 1, fontFamily: 'DidactGothic-Regular', fontSize: 15}}>Pickup time:</Text>
                <Text
                style = {{color: "black", flex: 1, fontFamily: 'DidactGothic-Regular', fontSize: 15}}
                >
                    1:20pm
                </Text>
            </View>
            
            {/*Button below*/}
            <TouchableOpacity
            onPress = {()=>Actions.notification1()}
            
            title="Accept"
            style = {buttonStyle.button}>
                <Text
                style = {{color: 'white', fontWeight: '500', fontFamily: 'avenir', fontSize: 16}}
                >View Donations</Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress = {()=>Actions.dashboard1()}
            title="Accept"
            style = {buttonStyle.button2}>
                <Text
                style = {{color: '#0ca3bc', fontWeight: '500', fontFamily: 'avenir', fontSize: 16}}
                >Search for Donations</Text>
            </TouchableOpacity>

            <TouchableOpacity style ={{position: 'absolute', top: -5, right: 5}}
                onPress={props.obj.closeMd} 
                >
                    <Image

                    source={require('../assets/icon/x.png')}
                    style = {{width: 15, height: 15}}
                    />
            </TouchableOpacity>
        </View>
    );
};
export default MsgCancelDonation;