/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View,Text,Image,ScrollView,TouchableOpacity} from 'react-native';
import donationStyle from '../styles/donationStyle';
//import axios from 'axios';

export default class Donations extends React.Component {
    // state = {
    //   posts: []
    // }
  
    /*componentDidMount() {
      axios.get(`http://localhost:3000`)
        .then(res => {
          const posts = res.data;
          this.setState({ posts });
        })
    }*/
  
    render() {
      
      return (
            <ScrollView>
           
                            <View style = {donationStyle.CardDisplay}>
                                <View style = {donationStyle.Images}>
                                    <Image
                                    style={donationStyle.ImageSize}
                                    source={require('../assets/img/logo.png')}
                                    />
                                </View>
                                <View style={donationStyle.TextDisplay}>
                                    <View>
                                        <Text style={donationStyle.Organization}> Safeway</Text>
                                    </View>
                                    <View>
                                        <Text style={donationStyle.address}> 4475 Parker Street</Text>
                                    </View>
                                    
                                </View>
                                <View style={donationStyle.TextDisplay}>
                                        <View style={donationStyle.option}>
                                            <TouchableOpacity
                                                style={donationStyle.BtnStyleBlueView}
                                                underlayColor='#000'
                                                color='000'>
                                                <Text style={donationStyle.btnText}>View</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                            </View>



                            <View style = {donationStyle.CardDisplay}>
                                <View style = {donationStyle.Images}>
                                    <Image
                                    style={donationStyle.ImageSize}
                                    source={require('../assets/img/logo.png')}
                                    />
                                </View>
                                <View style={donationStyle.TextDisplay}>
                                    <View>
                                        <Text style={donationStyle.Organization}> Safeway</Text>
                                    </View>
                                    <View>
                                        <Text style={donationStyle.address}> 4475 Parker Street</Text>
                                    </View>
                                    
                                </View>
                                <View style={donationStyle.TextDisplay}>
                                        <View style={donationStyle.option}>
                                            <TouchableOpacity
                                                style={donationStyle.BtnStyleBlueView}
                                                underlayColor='#000'
                                                color='000'>
                                                <Text style={donationStyle.btnText}>View</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                            </View>




                            <View style = {donationStyle.CardDisplay}>
                                <View style = {donationStyle.Images}>
                                    <Image
                                    style={donationStyle.ImageSize}
                                    source={require('../assets/img/logo.png')}
                                    />
                                </View>
                                <View style={donationStyle.TextDisplay}>
                                    <View>
                                        <Text style={donationStyle.Organization}> Safeway</Text>
                                    </View>
                                    <View>
                                        <Text style={donationStyle.address}> 4475 Parker Street</Text>
                                    </View>
                                    
                                </View>
                                <View style={donationStyle.TextDisplay}>
                                        <View style={donationStyle.option}>
                                            <TouchableOpacity
                                                style={donationStyle.BtnStyleBlueView}
                                                underlayColor='#000'
                                                color='000'>
                                                <Text style={donationStyle.btnText}>View</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                            </View>





                            <View style = {donationStyle.CardDisplay}>
                                <View style = {donationStyle.Images}>
                                    <Image
                                    style={donationStyle.ImageSize}
                                    source={require('../assets/img/logo.png')}
                                    />
                                </View>
                                <View style={donationStyle.TextDisplay}>
                                    <View>
                                        <Text style={donationStyle.Organization}> Safeway</Text>
                                    </View>
                                    <View>
                                        <Text style={donationStyle.address}> 4475 Parker Street</Text>
                                    </View>
                                    
                                </View>
                                <View style={donationStyle.TextDisplay}>
                                        <View style={donationStyle.option}>
                                            <TouchableOpacity
                                                style={donationStyle.BtnStyleBlueView}
                                                underlayColor='#000'
                                                color='000'>
                                                <Text style={donationStyle.btnText}>View</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                            </View>



                            <View style = {donationStyle.CardDisplay}>
                                <View style = {donationStyle.Images}>
                                    <Image
                                    style={donationStyle.ImageSize}
                                    source={require('../assets/img/logo.png')}
                                    />
                                </View>
                                <View style={donationStyle.TextDisplay}>
                                    <View>
                                        <Text style={donationStyle.Organization}> Safeway</Text>
                                    </View>
                                    <View>
                                        <Text style={donationStyle.address}> 4475 Parker Street</Text>
                                    </View>
                                    
                                </View>
                                <View style={donationStyle.TextDisplay}>
                                        <View style={donationStyle.option}>
                                            <TouchableOpacity
                                                style={donationStyle.BtnStyleBlueView}
                                                underlayColor='#000'
                                                color='000'>
                                                <Text style={donationStyle.btnText}>View</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                            </View>
                        
            </ScrollView>      
          );
    }
  }



