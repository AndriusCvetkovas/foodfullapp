import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import ProfileStyle from '../styles/profileStyle';

function Profile(){
    return( 
        //Main view
        <View
        style = {ProfileStyle.mainView}
        >

            <View style={ProfileStyle.background}>
            </View>


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
                    <Image style ={{width: 20, height: 20}}
                    source={require('../assets/icon/edit.png')}
                    ></Image>
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
                        source={require('../assets/icon/weight.png')}
                        style={{width: 50, height: 45, padding: 20}}
                        />
                        <View style = {ProfileStyle.innerTextBox}>
                            <Text style={{fontSize: 16, textAlign: 'center', fontFamily:'Avenir', fontWeight:'800', color:'#A4D638'}}>1100 kg</Text>
                            <Text style={{textAlign: 'center', fontFamily: 'DidactGothic-Regular', fontSize: 15}}>of Food</Text>
                        </View>
                    </View>
                    
                    <View style={ProfileStyle.innerStatBox1}>
                    <Image 
                        source={require('../assets/icon/donating_active.png')}
                        style={{width: 50, height: 45, padding: 20}}
                        />
                        <View style = {ProfileStyle.innerTextBox}>
                            <Text style={{fontSize: 16, textAlign: 'center', fontFamily:'Avenir', fontWeight:'800', color:'#F5982F'}}>40</Text>
                            <Text style={{textAlign: 'center', fontFamily: 'DidactGothic-Regular', fontSize: 15}}>Donations</Text>
                        </View>
                    </View>   
                </View>

                <View style ={ProfileStyle.infoInnerBox}>
                    {/* Address below */}
                    <View style = {ProfileStyle.addressBox}>
                        <Text style ={{fontSize:12, color: '#aaaaaa'}}>Address</Text>
                        <Text style = {{fontSize: 15, fontFamily: 'DidactGothic-Regular'}}>2465 Willingdon Ave</Text>
                    </View>
                    {/* Email below */}
                    <View style = {ProfileStyle.addressBox}>
                        <Text style ={{fontSize:12, color: '#aaaaaa'}}>Email</Text>
                        <Text style = {{fontSize: 15, fontFamily: 'DidactGothic-Regular'}}>management@safeway.com</Text>
                    </View>
                    {/* Phone below */}
                    <View style = {ProfileStyle.addressBox}>
                        <Text style ={{fontSize:12, color: '#aaaaaa'}}>Phone number</Text>
                        <Text style = {{fontSize: 15, fontFamily: 'DidactGothic-Regular'}}>604-931-0110</Text>
                    </View>
                </View>
            </View>

            {/* Button view */}
            <View style = {ProfileStyle.buttonView}>
                <TouchableOpacity style ={ProfileStyle.buttonStyle}>
                    <Image
                    style={{flex: 0.04, width:25, height:15}}
                    source= {require('../assets/icon/leaderboard.png')}
                    ></Image>
                    <Text style={{flex: 0.8, textAlign: 'center', color: '#06a2bc', fontSize: 20, fontFamily: 'avenir'}}>Leaderboard</Text>
                    <Image
                    source= {require('../assets/icon/next.png')}
                    style={{flex: 0.03,width: 20, height: 20}}
                    ></Image>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style = {ProfileStyle.signOutBut}>
                    <Text style={{textAlign: 'center', color: '#06a2bc', fontSize: 20, fontFamily: 'avenir'}}>Sign Out</Text>
                </TouchableOpacity>
            </View>



        </View>
    )
}
export default Profile;