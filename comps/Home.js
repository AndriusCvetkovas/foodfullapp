import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';
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
    fontSize: 28,
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
    backgroundColor: 'darkblue',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'slategrey'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkgreen'
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

         <View style = {{flex: 0.2, position: 'absolute', top: 670, zIndex: 2, textAlign: 'center', width: '100%', justifyContent:'center', alignItems:'center'}}>

            <TouchableOpacity 
            onPress={()=>{Actions.login()}}
            style={{zIndex:1}}
              >
              {/* BUTTONS */}
                  <View style ={{ top: 30,backgroundColor:'#0ca3bc', width:350, height:60,padding:10, alignItems:'center', justifyContent:'center', borderRadius:10}}>  
                  <Text style={{fontSize:20, fontFamily:'Avenir', color:'#ffffff', fontWeight:'600'}}>Sign In</Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity 
              onPress={()=>{Actions.login()}}
              style={{height:60}}>
                  <View style ={{ top:50, width:350, height:60,padding:10, alignItems:'center', justifyContent:'center', borderRadius:10, borderColor:'#ffffff', borderWidth:2}}>  
                  <Text style={{fontSize:20, fontFamily:'Avenir', color:'#ffffff',}}>Create an Account</Text>
                  </View>
              </TouchableOpacity>
           
        </View>

        { /* LOGO STAYS ON EACH PAGE */}
          <View style = {{flex: 0.2, position: 'absolute', top: 100, zIndex: 2, textAlign: 'center', width: '100%',  justifyContent:'center',
            alignItems:'center'}}>
              <Text style={styles.header}
              >Foodfull</Text>
          </View>

       {/* PAGE ONE */}
        <Swiper style={styles.wrapper}
        nextButton={
            <Text style={[{color: 'white', fontFamily: 'avenir',  fontSize: 20,paddingBottom: 10}]}>Next</Text>
        }
        prevButton={
            <Text style = {{position: 'absolute'}}></Text>
        }
        buttonWrapperStyle= {{borderRadius:20, backgroundColor: '#3dbfd2', width: 100, height: 45, justifyContent: 'center', alignItems: 'center', top: 660, left: 155, right: 0 }}
        showsButtons={false} showsPagination={true} loop={true} 
        
        // DOTS
        dot={<View style={{backgroundColor: '#bcd1d3', width: 8, height: 8, borderRadius: 8, marginLeft: 5, marginRight: 5, marginTop: 3, marginBottom: 3, bottom:200 }} />}

        activeDot={<View style={{backgroundColor: '#3dbfd2', width: 8, height: 8, borderRadius: 8, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, bottom:200 }} />}

        autoplay
        autoplayTimeout={2.9}
        >
        <View style={styles.slide1}>
        <LottieView
            source={require('../assets/lottieFiles/welcome.json')}
            style={{justifyContent:'center', alignItems:'center',height:'100%', width:'100%', position:'absolute', bottom:0}}
            autoPlay
            loop
        />
        </View>


      {/* PAGE TWO*/}
        <View style={styles.slide2}>
        <LottieView
            source={require('../assets/lottieFiles/donatephone.json')}
            style={{justifyContent:'center', alignItems:'center',height:350, width:'100%', position:'absolute', bottom:80}}
            autoPlay
            loop
        />
        </View>


      {/* PAGE THREE*/}
        <View style={styles.slide3}>
        <LottieView
            source={require('../assets/lottieFiles/welcome.json')}
            style={{justifyContent:'center', alignItems:'center',height:350, width:'100%', position:'absolute', bottom:80}}
            autoPlay
            loop
        />
        </View>


      </Swiper>
       </View> 
      
      

      
    )
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)