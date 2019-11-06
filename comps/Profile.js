import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import ProfileStyle from '../styles/profileStyle';

function Profile(){
    return(
        //Main view
        <View
        style = {ProfileStyle.mainView}
        >
            {/* Image view */}
            <View
            style={ProfileStyle.imageViewStyle}
            >
                <Image
                source={require('../assets/img/safeway.jpg')}
                style={ProfileStyle.imageStyle}
                >
                </Image>
            </View>

            {/* Info view */}
            <View
            style={ProfileStyle.infoStyle}
            >
                <TouchableOpacity style = {{position: 'absolute', top: 20, right: 20}}>
                    <Image style ={{width: 20, height: 20, backgroundColor: 50 }}></Image>
                </TouchableOpacity>
                {/* Store name/title below */}
                <Text
                style={ProfileStyle.titleStyle}
                >Safeway Extra</Text>
                {/* Stat view below */}
                <View
                style={ProfileStyle.statBox}
                >
                    <View
                    style={ProfileStyle.innerStatBox1}
                    >
                        <Image 
                        source={require('../assets/icon/donating_active.png')}
                        style={{width: 50, height: 50, padding: 20, flex: 0.2}}
                        />
                        <View style = {ProfileStyle.innerTextBox}>
                            <Text style={{fontSize: 16, textAlign: 'center'}}>1100 kg</Text>
                            <Text style={{textAlign: 'center'}}>of Food</Text>
                        </View>
                    </View>
                    <View style={ProfileStyle.innerStatBox1}>
                    <Image 
                        source={require('../assets/icon/donating_active.png')}
                        style={{width: 50, height: 50, padding: 20, flex: 0.2}}
                        />
                        <View style = {ProfileStyle.innerTextBox}>
                            <Text style={{fontSize: 16, textAlign: 'center'}}>40</Text>
                            <Text style={{textAlign: 'center'}}>Donations</Text>
                        </View>
                    </View>   
                </View>
                <View style ={ProfileStyle.infoInnerBox}>
                    {/* Address below */}
                    <View style = {ProfileStyle.addressBox}>
                        <Text style ={{fontSize:11, color: '#aaaaaa'}}>Address</Text>
                        <Text>2465 Willingdon Ave</Text>
                    </View>
                    {/* Email below */}
                    <View style = {ProfileStyle.addressBox}>
                        <Text style ={{fontSize:11, color: '#aaaaaa'}}>Email</Text>
                        <Text>management@safeway.com</Text>
                    </View>
                    {/* Phone below */}
                    <View style = {ProfileStyle.addressBox}>
                        <Text style ={{fontSize:11, color: '#aaaaaa'}}>Phone number</Text>
                        <Text>604-931-0110</Text>
                    </View>
                </View>
            </View>

            {/* Button view */}
            <View style = {ProfileStyle.buttonView}>
                <TouchableOpacity style ={ProfileStyle.buttonStyle}>
                    <Image
                    style={{flex: 0.04,width: 20, height: 20, backgroundColor: 'grey'}}
                    ></Image>
                    <Text style={{flex: 0.8, textAlign: 'center', color: '#06a2bc', fontSize: 17}}>Leaderboard</Text>
                    <Image
                    source= {require('../assets/icon/next.png')}
                    style={{flex: 0.03,width: 20, height: 20}}
                    ></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Profile;