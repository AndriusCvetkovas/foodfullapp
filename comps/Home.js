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
              onPress={()=>{Actions.signup()}}
              style={{height:60}}>
                  <View style ={{ top:50, width:350, height:60,padding:10, alignItems:'center', justifyContent:'center', borderRadius:10, borderColor:'#ffffff', borderWidth:2}}>  
                  <Text style={{fontSize:20, fontFamily:'Avenir', color:'#ffffff',}}>Create an Account</Text>
                  </View>
              </TouchableOpacity>
           
        </View>

        { /* LOGO STAYS ON EACH PAGE */}
          <View style = {{flex: 0.2, position: 'absolute', top: 80, zIndex: 2, textAlign: 'center', width: '100%',  justifyContent:'center',
            alignItems:'center', flexDirection:'row'}}>
            <Image source={require('../assets/icon/logo.png')} 
            style={{width:30, height:35, marginRight:15, top:-3}}/>
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
        showsButtons={false} showsPagination={true} loop={true} paginationClickable={true}
        
        // DOTS
        dot={<View style={{backgroundColor: '#bcd1d3', width: 10, height: 10, borderRadius: 10, marginLeft: 5, marginRight: 5, marginTop: 3, marginBottom: 3, bottom:200 }} />}

        activeDot={<View style={{backgroundColor: '#3dbfd2', width: 10, height: 10, borderRadius: 10, marginLeft: 5, marginRight: 5, marginTop: 3, marginBottom: 3, bottom:200 }} />}

        autoplay
        autoplayTimeout={3.2}
        
        >
        <View style={styles.slide1}>
          <View style={{justifyContent:'center', alignItems:'center', position:'absolute', top:180, zIndex:1}}>
              <Text style={{fontFamily:'Avenir', fontSize:20, color:'#91e55a', fontWeight:'800'}}>BE PART OF A</Text>

              <Text style={{fontFamily:'Avenir', fontSize:40, color:'#3dbfd2', width:300, textAlign:'center', fontWeight:'800',}}>Hunger-Free Community</Text>
          </View>
          <Image 
          source={require('../assets/img/1.png')}
          style={{width:'100%', height:'100%'}}
          />
          {/* <LottieView
              source={require('../assets/lottieFiles/welcome.json')}
              style={{justifyContent:'center', alignItems:'center',height:'100%', width:'100%', position:'absolute', bottom:0}}
              autoPlay
              loop
          /> */}
        </View>


      {/* PAGE TWO*/}
        <View style={styles.slide2}>
            <View style={{justifyContent:'center', alignItems:'center', position:'absolute', top:180, zIndex:1}}>
                  <Text style={{fontFamily:'Avenir', fontSize:20, color:'#91e55a', fontWeight:'800'}}>PUT AN END TO</Text>

                  <Text style={{fontFamily:'Avenir', fontSize:40, color:'#3dbfd2', width:300, textAlign:'center', fontWeight:'800',}}>Food Waste</Text>
            </View>
            <Image 
            source={require('../assets/img/2.png')}
            style={{width:'100%', height:'100%',}}
              />
            {/* <LottieView
                source={require('../assets/lottieFiles/donatephone.json')}
                style={{justifyContent:'center', alignItems:'center',height:350, width:'100%', position:'absolute', bottom:80}}
                autoPlay
                loop
            /> */}
        </View>



      {/* PAGE THREE*/}
        <View style={styles.slide3}>
            <View style={{justifyContent:'center', alignItems:'center', position:'absolute', top:180, zIndex:1}}>
                  <Text style={{fontFamily:'Avenir', fontSize:20, color:'#91e55a', fontWeight:'800'}}>SOMETHING HERE</Text>

                  <Text style={{fontFamily:'Avenir', fontSize:40, color:'#3dbfd2', width:300, textAlign:'center', fontWeight:'800',}}>Make a Change</Text>
            </View>
            <Image 
            source={require('../assets/img/3.png')}
            style={{width:'100%', height:'100%', top:0}}
              />
            {/* <LottieView
                source={require('../assets/lottieFiles/welcome.json')}
                style={{justifyContent:'center', alignItems:'center',height:350, width:'100%', position:'absolute', bottom:80}}
                autoPlay
                loop
            /> */}
        </View>


      </Swiper>
       </View> 
      
      

      
    )
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)