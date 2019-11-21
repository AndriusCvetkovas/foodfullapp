import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native';
import Swiper from 'react-native-swiper';
import { black } from 'ansi-colors';

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
    backgroundColor: '#92BBD9'
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default class GetStarted extends Component {
  render() {
    return (
       <SafeAreaView style={styles.comp} >

       {/* PAGE ONE: ACCOUNT CREATED */}
        <Swiper style={styles.wrapper} showsButtons={false} showsPagination={true} loop={false} dot={<View style={{backgroundColor: '#bcd1d3', width: 8, height: 8, borderRadius: 8, marginLeft: 5, marginRight: 5, marginTop: 3, marginBottom: 3}} />}
        activeDot={<View style={{backgroundColor: '#3dbfd2', width: 8, height: 8, borderRadius: 8, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}>
        <View style={styles.slide1}>
        <Text style={styles.header}>Your account has been created!</Text>
        <LottieView
            source={require('../assets/lottieFiles/welcome.json')}
            style={{justifyContent:'center', alignItems:'center',height:350, width:'100%'}}
            autoPlay
            loop
        />
          <Text style={styles.desc}>Thank you for joining foodfull and making a change in your own community.</Text>

        </View>


      {/* PAGE TWO: DONATE */}
        <View style={styles.slide2}>
        <Text style={styles.subheader}>Donate</Text>
        <LottieView
            source={require('../assets/lottieFiles/donate.json')}
            style={{justifyContent:'center', alignItems:'center',height:350, width:'100%',top:-5, marginLeft:4.3}}
            autoPlay
            loop
        />
        </View>


      {/* PAGE THREE:  */}
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>



        {/* PAGE THREE:  */}
        <View style={styles.slide4}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
       </SafeAreaView> 
      
      

      
    )
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)