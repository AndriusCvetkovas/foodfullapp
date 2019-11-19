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
    var r = await axios.post(`http://localhost:3001/post`, obj);
    var jsons = JSON.parse(r.data.body);
    var d = jsons.data;
    console.log(d);
    setDons(d);
    setDonsName(donsName.push(d[i].name));
    setDonsTime(donsTime.push(d[i].time));
    setDonsAddress(donsAddress.push(d[i].address));
    console.log(donsName)
    setDonsStatus(donsStatus.push(d[i].status));
  }
  const [dons, setDons] = useState([]);
  const [donsName, setDonsName] = useState();
  const [donsTime, setDonsTime] = useState();
  const [donsAddress, setDonsAddress] = useState();
  const [donsStatus, setDonsStatus] = useState();
  const [text, setText] = useState();

  
  useEffect(() => {
    getID();
  }, [])
  return (
    <ScrollView>
      {
        dons.map((d, i) => {
          return (
<View style = {donationStyle.comp}>
        <View>
          <View style = {donationStyle.CardDisplay}>
              <View style = {donationStyle.Images}>
                  <Text style={donationStyle.Date}>{d.date.slice(5)}</Text>
              </View>
              <View style={donationStyle.TextDisplay}>
                  <View>
                      <Text style={donationStyle.Organization}>{d.name}</Text>
                  </View>
                  <View>
                    <Text style={donationStyle.address}>{d.address}</Text>
                  </View>
                  <View>
                    <Text style={donationStyle.time}>{d.time}</Text>
                  </View>
              </View>

              <View style={donationStyle.option}>
                  <View>
                      <Text style={donationStyle.optionText}>Pending</Text>
                  </View>
              </View>
              <TouchableOpacity>
                <Image style={donationStyle.Dots} source={require("../assets/icon/dot_nav.png")} />
              </TouchableOpacity>
          </View>
          
        </View>
        
    </View>
          )
        })
      }


    </ScrollView>

  );
}


export default Pickup;