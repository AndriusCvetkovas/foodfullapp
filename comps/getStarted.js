import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import Swiper from 'react-native-swiper';
import {Actions} from 'react-native-router-flux'

const styles = StyleSheet.create({
  comp:{
    flex:1,
  },
  wrapper: {
   
  },
  header:{
    fontFamily: 'Avenir',
    fontSize: 35,
    width:'90%',
    fontWeight:'700',
    color: '#3dbfd2',
    top:-20,
    paddingLeft:20
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
    backgroundColor: '#fff',
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
  slide4: {
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

export default class GetStarted extends Component {
  render() {
    return (
       <View style={styles.comp} >
         <View style = {{flex: 0.2, position: 'absolute', top: 670, zIndex: 2, textAlign: 'center', width: '100%'}}>
          <TouchableOpacity 
          onPress={()=>{Actions.login()}}
            >
              <Text style ={{ color: 'grey', top: 140,textAlign: 'center'}}
              >Skip</Text>
            </TouchableOpacity>
          </View>
       {/* PAGE ONE: ACCOUNT CREATED */}
        <Swiper style={styles.wrapper}
        nextButton={
            <Text style={[{color: 'white', fontFamily: 'avenir',  fontSize: 20,paddingBottom: 10}]}>Next</Text>
        }
        prevButton={
          <Text style = {{position: 'absolute'}}></Text>
        }
        buttonWrapperStyle= {{borderRadius:20, backgroundColor: '#3dbfd2', width: 100, height: 45, justifyContent: 'center', alignItems: 'center', top: 660, left: 155, right: 0 }}
        showsButtons={false} showsPagination={true} loop={false} dot={<View style={{backgroundColor: '#bcd1d3', width: 8, height: 8, borderRadius: 8, marginLeft: 5, marginRight: 5, marginTop: 3, marginBottom: 3, bottom: 80}} />}
        activeDot={<View style={{backgroundColor: '#3dbfd2', width: 8, height: 8, borderRadius: 8, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, bottom: 80}} />}>
        <View style={styles.slide1}>
        <Text style={styles.header}>Your account has been created!</Text>

        <LottieView
            source={require('../assets/lottieFiles/checkmark.json')}
            style={{justifyContent:'center', alignItems:'center',height:350, width:'100%', position:'absolute'}}
            autoPlay
            loop
        />

        <LottieView
            source={require('../assets/lottieFiles/welcome.json')}
            style={{justifyContent:'center', alignItems:'center',height:350, width:'100%'}}
            autoPlay
            loop
        />
          <Text style={styles.desc}>Thank you for joining foodfull and making a change in your community.</Text>
          

        </View>


      {/* PAGE TWO: DONATE */}
        <View style={styles.slide2}>
        <Text style={styles.subheader}>Donate Food</Text>
        <LottieView
            source={require('../assets/lottieFiles/make_donation.json')}
            style={{justifyContent:'center', alignItems:'center',height:320, width:'80%',top:-5, marginLeft:4.3}}
            autoPlay
            loop
        />
        <Text style={styles.desc}>Match with food banks around your location and send donations in one easy step</Text>
       
        </View>


      {/* PAGE THREE:  */}
        <View style={styles.slide3}>
          <Text style={styles.subheader}>Create a Schedule</Text>
          <LottieView
            source={require('../assets/lottieFiles/calendar.json')}
            style={{justifyContent:'center', alignItems:'center',height:350, width:'100%',top:-5, marginLeft:4.3}}
            autoPlay
            loop
        />
          <Text style={styles.desc}>Set up a date and time for your donation to be picked up</Text>
        </View>



        {/* PAGE THREE:  */}
        <View style={styles.slide4}>
          <Text style={styles.text}>And simple</Text>
          <TouchableOpacity style = {{borderRadius: 30,borderWidth: 1, width: 70, height: 40, top: 470, justifyContent: 'center', alignItems: 'center', zIndex: 2}}
          onPress={()=>Actions.login()}
          >
            <Text >Login</Text>
          </TouchableOpacity>
          <Text style={styles.subheader}>Track your progress</Text>
          <LottieView
            source={require('../assets/lottieFiles/donatephone.json')}
            style={{justifyContent:'center', alignItems:'center',height:350, width:'100%',top:-5, marginLeft:4.3}}
            autoPlay
            loop
        />
         <Text style={styles.desc}>Keep track of your donations and your ranking against other donators</Text>
        </View>
        

      </Swiper>
       </View> 
      
      

      
    )
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)