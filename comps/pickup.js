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
  }
  const GetDonationsAcc = async () => {
    var obj = {
      key: "donations_read",
      data: {
        destination_id: currentId,
        status: 2
      }
    }
    var r = await axios.post(`https://foodfullapp.herokuapp.com/post`, obj);
    var jsons = JSON.parse(r.data.body);
    var d = jsons.data;
    console.log(d);
    setDons(d);
    console.log(d)
  }

  function closeModal(){
    setShowModal(false);
  }
  const [dons, setDons] = useState([]);
  const [donsName, setDonsName] = useState();
  // const [donsTime, setDonsTime] = useState();
  // const [donsAddress, setDonsAddress] = useState();
  // const [donsStatus, setDonsStatus] = useState();
  // const [text, setText] = useState();
  const [dd, setdd]= useState([])
  const [showModal, setShowModal]= useState(false);

  
  useEffect(() => {
    getID();
  }, []);
  return (
    <View>
      <Modal
      isVisible={showModal}
      coverScreen={false}
      animationIn='slideInUp'
      style = {{backgroundColor: 'transparent', height: 700,width: 380, position: "absolute"}}
      isVisible = {showModal}
      onBackdropPress={() => console.log('BackDrop Closes the Modal')}>
        <PickedUpComfirm obj={{hide: closeModal, getPendings: getID}} dd ={dd} />
      </Modal>
    <ScrollView>
      {
        dons.map((d, i) => {
          if (d.status == 2) {
            var texta = 'Pickup Pending...'
            var colorz = '#ee9a23'
        }else if (d.status == 3) {
          var texta = 'Picked Up...'
          var colorz = 'Green'
      }else  {
            texta = 'Declined...'
            colorz = 'red'
        }
          return (
<View style = {donationStyle.comp}>
        <View>
          <View style = {donationStyle.CardDisplay}>
              <View style = {donationStyle.Images}>
                  <Image
                  source = {require('../assets/img/food.png')}
                  style ={{height: 100, width: 100, borderRadius: 100}}/>
              </View>
              <View style={donationStyle.TextDisplay}>
                  <View>
                      <Text style={donationStyle.Organization}>{d.name}</Text>
                  </View>
                  <View>
                    <Text style={donationStyle.address}>{d.address}</Text>
                  </View>
                  <View>
                    <Text style={donationStyle.time}>{d.date +" "+d.time}</Text>
                  </View>
              </View>

              <View style={donationStyle.option}>
                  <View>
                    <Text style={[donationStyle.optionText, {color: colorz}]}>{texta}</Text>
                  </View>
              </View>
              <TouchableOpacity
              onPress={()=>{setShowModal(!showModal), setdd(d)}}
              >
                <Image style={donationStyle.Dots} source={require("../assets/icon/dot_nav.png")} />
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