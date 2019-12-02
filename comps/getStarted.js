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
    paddingLeft:20,
    zIndex:2,
    flex:1,
    top:175
  },
  subheader:{
    fontFamily: 'Avenir',
    fontSize: 35,
    width:'90%',
    fontWeight:'700',
    color: '#3dbfd2',
    top:200,
    textAlign:'center',
    flex:1,
  },
  desc:{
    fontFamily: 'Avenir',
    fontSize: 25,
    width:'95%',
    fontWeight:'500',
    color: '#3dbfd2',
    paddingLeft:20,
    flex:1,
    paddingTop:20
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
            style={{height:300, width:'100%', position:'absolute', top:38, right:-40,}}
            autoPlay
            loop
        />

        <LottieView
            source={require('../assets/lottieFiles/welcome.json')}
            style={{justifyContent:'center', alignItems:'center',height:350, width:'100%', flex:1.2}}
            autoPlay
            loop
        />
          <Text style={styles.desc}>Thank you for joining foodfull and making a change.</Text>
        
        </View>


      {/* PAGE TWO: DONATE */}
      <View style={styles.slide1}>
        <Text style={styles.subheader}>Make a Donation</Text>

        <LottieView
            source={require('../assets/lottieFiles/makedonation.json')}
            style={{justifyContent:'center', alignItems:'center',height:300, width:350, flex:1.2}}
            autoPlay
            loop
        />
          <Text style={styles.desc}>Select a food bank of your choice, or post your donation to the public</Text>
        </View>


      {/* PAGE THREE:  */}
      <View style={styles.slide1}>
        <Text style={styles.subheader}>Set Your Schedule</Text>

        <LottieView
            source={require('../assets/lottieFiles/test2.json')}
            style={{justifyContent:'center', alignItems:'center',height:350, width:'100%', flex:1.2}}
            autoPlay
            loop
        />
          <Text style={styles.desc}>Match with food banks around you and send donations in one easy step</Text>
        </View>


        {/* PAGE FOUR:  */}
        <View style={styles.slide4}>
          <TouchableOpacity style = {{borderRadius: 30, width: 180, height: 40, position:'absolute',bottom:-40, justifyContent: 'center', alignItems: 'center', zIndex: 2, backgroundColor:'#06a2bc'}}
          onPress={()=>Actions.login()}
          >
            <Text style={{color:'#ffffff'}} >Login</Text>
          </TouchableOpacity>

          <Text style={styles.subheader}>Track your progress</Text>

        <LottieView
            source={require('../assets/lottieFiles/welcome.json')}
            style={{justifyContent:'center', alignItems:'center',height:350, width:'100%', flex:1.2}}
            autoPlay
            loop
        />
          <Text style={styles.desc}>Keep track of your donations and become the top donator!</Text>
        </View>
        
      </Swiper>
       </View> 
      
      

      
    )
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)