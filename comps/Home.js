import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import Swiper from 'react-native-swiper';
import {Actions} from 'react-native-router-flux'

const styles = StyleSheet.create({
  comp:{
    flex:1,
    justifyContent:'center', 
    alignItems:'center',

  },
  wrapper: {
   
  },
  header:{
    fontFamily: 'Avenir',
    fontSize: 25,
    fontWeight:'700',
    color: '#3dbfd2',
    top:0,
  },
  subheader:{
    fontFamily: 'Avenir',
    fontSize: 35,
    width:'90%',
    fontWeight:'700',
    color: '#3dbfd2',
    top:-30,
    textAlign:'center',
  },
  desc:{
    fontFamily: 'Avenir',
    fontSize: 20,
    width:'90%',
    fontWeight:'500',
    color: '#3dbfd2',
    paddingLeft:20
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  nextButton: {
    flex: 0.15,
    backgroundColor: '#3dbfd2',
    width: 100,
    justifyContent:'center', 
    alignItems:'center',
    borderRadius: 30
  }
})

export default class Home extends Component {
  render() {
    return (
       <View style={styles.comp} >

          <LottieView
            source={require('../assets/lottieFiles/homescreen')}
            style={{height:'100%', width:'100%', position:'absolute'}}
            autoPlay
            loop
           />

         <View style = {{flex: 0.2, position: 'absolute', top: 670, zIndex: 2, textAlign: 'center', width: '100%', justifyContent:'center', alignItems:'center'}}>

            <TouchableOpacity 
            onPress={()=>{Actions.login()}}
            style={{zIndex:1}}
              >
              {/* BUTTONS */}
                  <View style ={{ top: 30,backgroundColor:'#0ca3bc', width:350, height:60,padding:10, alignItems:'center', justifyContent:'center', borderRadius:15}}>  
                  <Text style={{fontSize:20, fontFamily:'Avenir', color:'#ffffff', fontWeight:'600'}}>Sign In</Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity 
              onPress={()=>{Actions.signup()}}
              style={{height:60}}>
                  <View style ={{ top:50, width:350, height:60,padding:10, alignItems:'center', justifyContent:'center', borderRadius:15, borderColor:'#ffffff', borderWidth:2}}>  
                  <Text style={{fontSize:20, fontFamily:'Avenir', color:'#ffffff',}}>Create an Account</Text>
                  </View>
              </TouchableOpacity>

           
        </View>
       
       </View> 
      
      

      
    )
  }
}

// AppRegistry.registerComponent('myproject', () => SwiperComponent)