import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import LottieView from 'lottie-react-native';
import Swiper from 'react-native-swiper';
import { black } from 'ansi-colors';

const styles = StyleSheet.create({
  comp:{
    flex:1,
  },
  wrapper: {
   
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
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
       <View style={styles.comp} >
       
        <Swiper style={styles.wrapper} showsButtons={false} showsPagination={true} loop={false}>
        <View style={styles.slide1}>
        <LottieView
            source={require('../assets/lottieFiles/testlottie.json')}
            style={{justifyContent:'center', alignItems:'center',height:450, width:450}}
            autoPlay
            loop
        />
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
        <LottieView
            source={require('../assets/lottieFiles/testlottie.json')}
            style={{justifyContent:'center', alignItems:'center',height:450, width:450}}
            autoPlay
            loop
        />
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
        <View style={styles.slide4}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
       </View> 
      
      

      
    )
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)