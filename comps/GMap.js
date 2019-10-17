import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import { PROVIDER_GOOGLE} from 'react-native-maps';

function GMap(){
    return(
        <MapView 
          provider={MapView.PROVIDER_GOOGLE}  
            style={styles.mapStyle}  
            zoomEnabled = {true}
            region={{ 
              latitude: 49.246292,          
              longitude: -123.116226,          
              latitudeDelta: 0.0922,          
              longitudeDelta: 0.0421        
            }}      
            showsUserLocation={true}      
            />
            );  
          };
          export default GMap;

          
         var styles = StyleSheet.create({
            mapStyle: {
              height: 450,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }
          })