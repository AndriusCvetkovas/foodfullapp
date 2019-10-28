import React, {useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import GMapStyle from '../styles/mapStyle';
import Info from './DInfoMap';
import AcceptedInfo from './DConfMap';
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
                
        >
          <Marker
            coordinate ={{latitude: 49.246292,
            longitude: -123.116226
            }}
            title ={'Location 1'}
            description= {'Foodbank'}
           />
        </MapView>
        
        <ScrollView>
          <View
          style = {GMapStyle.viewStyle}
          >
            <Text>Location 1</Text>
          </View>
          <View
          style = {GMapStyle.viewStyle}
          >
            <Text>Location 2</Text>
          </View>
          <View
          style = {GMapStyle.viewStyle}
          >
            <Text>Location 3</Text>
          </View>
          <View
          style = {GMapStyle.viewStyle}
          >
            <Text>Location 4</Text>
          </View>
        </ScrollView>
        {/*<AcceptedInfo />*/}
      </View>
            );  
          };
        export default GMap;