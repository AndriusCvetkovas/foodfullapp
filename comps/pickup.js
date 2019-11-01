/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View,Text,ScrollView,Image,TouchableOpacity} from 'react-native';
import donationStyle from '../styles/donationStyle';




function Pickup() {
  return (
    <ScrollView>
      <View style = {donationStyle.comp}>
        <View>
          <View style = {donationStyle.CardDisplay}>
              <View style = {donationStyle.Images}>
                  <Text style={donationStyle.Date}>14</Text>
                  <Text style={donationStyle.Month}>Jun</Text>
              </View>
              <View style={donationStyle.TextDisplay}>
                  <View>
                      <Text style={donationStyle.Organization}>Whole Foods</Text>
                  </View>
                  <View>
                    <Text style={donationStyle.address}>2465 Willingdon Ave</Text>
                  </View>
                  <View>
                    <Text style={donationStyle.time}>3:00PM to 7:00PM</Text>
                  </View>
              </View>

              <View style={donationStyle.option}>
                  <View>
                      <Text style={donationStyle.optionText}>Pending ...</Text>
                  </View>
              </View>
          </View>
        </View>
    </View>



    <View style = {donationStyle.comp}>
        <View>
          <View style = {donationStyle.CardDisplay}>
              <View style = {donationStyle.Images}>
                  <Text style={donationStyle.Date}>14</Text>
                  <Text style={donationStyle.Month}>Jun</Text>
              </View>
              <View style={donationStyle.TextDisplay}>
                  <View>
                      <Text style={donationStyle.Organization}>Safeway Extra</Text>
                  </View>
                  <View>
                    <Text style={donationStyle.address}>2465 Willingdon Ave</Text>
                  </View>
                  <View>
                    <Text style={donationStyle.time}>5:00PM</Text>
                  </View>
              </View>

              <View style={donationStyle.option}>
                  <View>
                      <Text style={donationStyle.optionText}>Pending ....</Text>
                  </View>
              </View>
          </View>
        </View>
    </View>



    <View style = {donationStyle.comp}>
        <View>
          <View style = {donationStyle.CardDisplay}>
              <View style = {donationStyle.Images}>
                  <Text style={donationStyle.Date}>14</Text>
                  <Text style={donationStyle.Month}>Jun</Text>
              </View>
              <View style={donationStyle.TextDisplay}>
                  <View>
                      <Text style={donationStyle.Organization}>Whole Foods</Text>
                  </View>
                  <View>
                    <Text style={donationStyle.address}>2465 Willingdon Ave</Text>
                  </View>
                  <View>
                    <Text style={donationStyle.time}>3:00PM to 7:00PM</Text>
                  </View>
              </View>

              <View style={donationStyle.option}>
                  <View>
                      <Text style={donationStyle.optionText}>Pending ...</Text>
                  </View>
              </View>
          </View>
        </View>
    </View>


    <View style = {donationStyle.comp}>
        <View>
          <View style = {donationStyle.CardDisplay}>
              <View style = {donationStyle.Images}>
                  <Text style={donationStyle.Date}>14</Text>
                  <Text style={donationStyle.Month}>Jun</Text>
              </View>
              <View style={donationStyle.TextDisplay}>
                  <View>
                      <Text style={donationStyle.Organization}>Whole Foods</Text>
                  </View>
                  <View>
                    <Text style={donationStyle.address}>2465 Willingdon Ave</Text>
                  </View>
                  <View>
                    <Text style={donationStyle.time}>3:00PM to 7:00PM</Text>
                  </View>
              </View>

              <View style={donationStyle.option}>
                  <View>
                      <Text style={donationStyle.optionText}>Pending ....</Text>
                  </View>
              </View>
          </View>
        </View>
    </View>
    </ScrollView>
    
  );
}


export default Pickup;
