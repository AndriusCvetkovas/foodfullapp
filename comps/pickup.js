/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import donationStyle from '../styles/donationStyle';
import axios from 'axios';
import Modal from "react-native-modal";
import PickedUpComfirm from './PickedUpComfirm';

function Pickup() {
  var currentId = "";
  const getID = async () => {
    var json = await AsyncStorage.getItem('id');
    currentId = json;
    console.log("userID " + currentId);
    GetDonationsAcc();
    GetDonationsAcc2();
  }
  const GetDonationsAcc = async () => {
    var obj = {
      key: "donations_read",
      data: {
        destination_id: currentId,
        status: 2,
      }
    }
    var r = await axios.post(`https://foodfullapp.herokuapp.com/post`, obj);
    var jsons = JSON.parse(r.data.body);
    var d = jsons.data;
    console.log(d);
    setDons(d);
    console.log(d)
  }
  const GetDonationsAcc2 = async () => {
    var obj = {
      key: "donations_read",
      data: {
        destination_id: currentId,
        status: 4,
      }
    }
    var r = await axios.post(`https://foodfullapp.herokuapp.com/post`, obj);
    var jsons = JSON.parse(r.data.body);
    var d2 = jsons.data;
    console.log(d2);
    setDons2(d2);
    console.log(d2)
  }

  function closeModal(){
    setShowModal(false);
  }
  const [dons, setDons] = useState([]);
  const [dons2, setDons2] = useState([]);
  const [dd, setdd]= useState([])
  const [showModal, setShowModal]= useState(false);

  
  useEffect(() => {
    getID();
  }, []);
  return (
    <View style={{backgroundColor:'#f4f4f4'}}>
      <Modal
      isVisible={showModal}
      coverScreen={false}
      animationIn='slideInUp'
      style = {{backgroundColor: 'transparent', height: 700,width: 380, position: "absolute"}}
      isVisible = {showModal}
      onBackdropPress={() => setShowModal(!showModal)}>
        <PickedUpComfirm obj={{hide: closeModal, getPendings: getID}} setShowModal={setShowModal} dd ={dd} setShowModal/>
      </Modal>
    <ScrollView>
      {
        dons.map((d, i) => {
          if (d.status == 2) {
            var texta = 'Pickup Pending'
            var colorz = '#ee9a23'
            var dotcolor = '#ee9a23'
        }else if (d.status == 4) {
          var texta = 'Picked Up'
          var colorz = '#7cce1d'
          var dotcolor = '#7cce1d'
      }
          return (
<View style = {[donationStyle.comp, {top:20}]}>
        <View style = {{marginTop: -18}}>
          <View style = {donationStyle.CardDisplay}>
              <View style = {donationStyle.Images}>
                  <Image
                  source = {{uri: `https://foodfull.s3-us-west-2.amazonaws.com/photo${d.user_id}.jpg`}}
                  style ={{height: 95, width: 95, borderRadius: 15}}/>
              </View>
              <View style={donationStyle.TextDisplay}>
                  <View>
                      <Text style={[donationStyle.Organization,{ top:-23,left:-2}]} key={i}>{d.name}</Text>
                  </View>
                  {/* <View>
                    <Text style={donationStyle.address}>{d.address}</Text>
                  </View> */}
                  <View>
                    <Text style={[donationStyle.time,{left:-5}]}>{d.date +" "+d.time}</Text>
                  </View>
              </View>
              <TouchableOpacity style={{right:-80, height:40}}
              onPress={()=>{setShowModal(!showModal), setdd(d)}}
              >
                <Image style={[donationStyle.Dots]} source={require("../assets/icon/options.png")} />
              </TouchableOpacity>
          </View>
          
        </View>
        <View style={donationStyle.option}>
                  <View>
                    <Text style={[donationStyle.optionText, {color: colorz, top:-40, left:130}]}>*{texta}</Text>
                  </View>
              </View>
    </View>
          )
        })
      }
      {
        dons2.map((d2, i) => {
          if (d2.status == 2) {
            var texta = 'Pickup Pending'
            var colorz = '#ee9a23'
        }else if (d2.status == 4) {
          var texta = 'Picked Up'
          var colorz = '#7cce1d'
      }else  {
            texta = 'Declined'
            colorz = 'red'
        }
          return (
<View style = {[donationStyle.comp, {top:0}]}>
        <View style={{marginTop:2}}>
          <View style = {donationStyle.CardDisplay}>
              <View style = {donationStyle.Images}>
                  <Image
                  source = {{uri: `https://foodfull.s3-us-west-2.amazonaws.com/photo${d2.user_id}.jpg`}}
                  style ={{height: 95, width: 95, borderRadius: 15}}/>
              </View>
              <View style={donationStyle.TextDisplay}>
                  <View>
                      <Text style={[donationStyle.Organization,{ top:-20, left:3}]} key={i}>{d2.name}</Text>
                  </View>
                  {/* <View>
                    <Text style={donationStyle.address}>{d2.address}</Text>
                  </View> */}
                  <View>
                    <Text style={[donationStyle.time,{left:3}]}>{d2.date +"   "+d2.time}</Text>
                  </View>
              </View>

              <View style={donationStyle.option}>
                  <View>
                    <Text style={[donationStyle.optionText, {color: colorz, top:98, left:-135}]}>* {texta}</Text>
                  </View>
              </View>
              <TouchableOpacity
              style={{height:40}}
              onPress={()=>{setShowModal(!showModal), setdd(d2)}}
              >
                <Image style={donationStyle.Dots} source={require("../assets/icon/options.png")} />
              </TouchableOpacity>
          </View>
          
        </View>
        
    </View>
          )
        })
      }
    </ScrollView>
    </View>

  );
}


export default Pickup;