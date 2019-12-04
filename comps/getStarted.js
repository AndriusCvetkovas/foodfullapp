import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';
import getstartedStyle from '../styles/getstartedStyle';
 
export default class GetStarted extends Component {

  render() {
    return (
      <View style={getstartedStyle.comp} >
        <View style={getstartedStyle.buttoncontainer}>
          <TouchableOpacity
            onPress={() => { Actions.login() }}
            style={getstartedStyle.button}
          >
            <Text style={{ color: 'grey', top: 0,  fontSize: 18,}}
            >Skip</Text>
          </TouchableOpacity>
        </View>

        {/* PAGE ONE: ACCOUNT CREATED */}
        <Swiper style={getstartedStyle.wrapper}
          nextButton={
            <Text style={[{ color: 'white', fontFamily: 'avenir', fontSize: 20, paddingBottom: 10 }]}>Next</Text>
          }
          prevButton={
            <Text style={{ position: 'absolute' }}></Text>
          }
          buttonWrapperStyle={{ borderRadius: 20, backgroundColor: '#3dbfd2', width: 100, height: 45, justifyContent: 'center', alignItems: 'center', top: 660, left: 155, right: 0 }}
          showsButtons={false} showsPagination={true} loop={false} dot={<View style={{ backgroundColor: '#bcd1d3', width: 9, height: 9, borderRadius: 9, marginLeft: 5, marginRight: 5, marginTop: 3, marginBottom: 3, bottom: 80 }} />}
          activeDot={<View style={{ backgroundColor: '#3dbfd2', width: 9, height: 9, borderRadius: 9, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, bottom: 80 }} />}>

          <View style={getstartedStyle.slide1}>
            <Text style={getstartedStyle.header}>Your account has been created!</Text>

            <LottieView
              source={require('../assets/lottieFiles/checkmark.json')}
              style={{ height: 300, width: '100%', position: 'absolute', top: 38, right: -40, }}
              autoPlay
              loop
            />

            <LottieView
              source={require('../assets/lottieFiles/welcome.json')}
              style={getstartedStyle.animation}
              autoPlay
              loop
            />
            <Text style={getstartedStyle.desc}>Thank you for joining foodfull and making a change.</Text>

          </View>


          {/* PAGE TWO: DONATE */}
          <View style={getstartedStyle.slide1}>
            <Text style={getstartedStyle.subheader}>Make a Donation</Text>

            <LottieView
              source={require('../assets/lottieFiles/makedonation.json')}
              style={getstartedStyle.animation}
              autoPlay
              loop
            />
            <Text style={getstartedStyle.desc}>Select a food bank of your choice, or post your donation to the public.</Text>
          </View>


          {/* PAGE THREE:  */}
          <View style={getstartedStyle.slide1}>
            <Text style={getstartedStyle.subheader}>Set Your Schedule</Text>

            <LottieView
              source={require('../assets/lottieFiles/calendar2.json')}
              style={[getstartedStyle.animation, { flex: 3, zIndex: 2 }]}
              autoPlay
              loop
            />
            <LottieView
              source={require('../assets/lottieFiles/circle.json')}
              style={{ justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', position: 'absolute' }}
              autoPlay
              loop
            />
            <Text style={[getstartedStyle.desc, { top: -98 }]}>Create your availability and keep track of your donations.</Text>
          </View>


          {/* PAGE FOUR:  */}
          <View style={getstartedStyle.slide4}>
            <TouchableOpacity style={getstartedStyle.loginbut}
              onPress={() => Actions.login()}
            >
              <Text style={getstartedStyle.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={getstartedStyle.subheader}>Help the Community</Text>

            <LottieView
              source={require('../assets/lottieFiles/givingfood.json')}
              style={getstartedStyle.animation}
              autoPlay
              loop
            />
            <Text style={getstartedStyle.desc}>Once your donation is picked up you're all done!</Text>
          </View>

        </Swiper>
      </View>
    )
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)