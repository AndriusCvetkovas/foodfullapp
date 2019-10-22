import React, {useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import GMapStyle from '../styles/mapStyle';
import Info from './DInfoMap';
function GMap(){
    
  async function getPos(){
    //console.log(Geolocation)
    var info = await Geolocation.getCurrentPosition((data)=>{
      console.log(data);
    });
  }

  useEffect(()=>{
    getPos();
  }, []);

  getPos();
  
    return(
      <View>
        <MapView 
          provider={MapView.PROVIDER_GOOGLE}  
          style={GMapStyle.mapStyle}  
          zoomEnabled = {true}
          region={{ 
            latitude: 49.246292,          
            longitude: -123.116226,          
            latitudeDelta: 0.0922,          
            longitudeDelta: 0.0421        
          }}      
          showsUserLocation={true}      
        />
        <ScrollView>
          <View
          style = {GMapStyle.viewStyle}
          >
            <Text>Hi</Text>
          </View>
          <View
          style = {GMapStyle.viewStyle}
          >
            <Text>hi</Text>
          </View>
          <View
          style = {GMapStyle.viewStyle}
          >
            <Text>hi</Text>
          </View>
          <View
          style = {GMapStyle.viewStyle}
          >
            <Text>hi</Text>
          </View>
        </ScrollView>
        <Info/>
      </View>
            );  
          };
        export default GMap;