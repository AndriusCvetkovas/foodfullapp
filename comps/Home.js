import React, { Component , useState} from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import Swiper from 'react-native-swiper';
import {Actions} from 'react-native-router-flux';
import HomeStyle from '../styles/HomeStyle';


function Home() { 
  const [show, setShow] = useState(false)
  if(show == true){
    return (
      null
    )
  }
    
    return (
       <View style={HomeStyle.comp} >

          <LottieView
            source={require('../assets/lottieFiles/homescreen')}
            style={{height:'100%', width:'100%', position:'absolute'}}
            autoPlay
            loop
           />

         <View style = {{flex: 0.2, position: 'absolute', top: 670, zIndex: 2, textAlign: 'center', width: '100%', justifyContent:'center', alignItems:'center'}}>

            <TouchableOpacity 
            onPress={()=>{Actions.login(), setShow(!show)}}
            style={{zIndex:1}}
              >
              {/* BUTTONS */}
                  <View style ={{ top: 30,backgroundColor:'#0ca3bc', width:350, height:60,padding:10, alignItems:'center', justifyContent:'center', borderRadius:15}}>  
                  <Text style={{fontSize:20, fontFamily:'Avenir', color:'#ffffff', fontWeight:'600'}}>Sign In</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity 
              onPress={()=>{Actions.signup(), setShow(!show)}}
              style={{height:60}}>
                  <View style ={{ top:50, width:350, height:60,padding:10, alignItems:'center', justifyContent:'center', borderRadius:15, borderColor:'#ffffff', borderWidth:2}}>  
                  <Text style={{fontSize:20, fontFamily:'Avenir', color:'#ffffff',}}>Create an Account</Text>
                  </View>
              </TouchableOpacity>
        </View>
      </View> 
      
      

      
    )
  }

export default Home;