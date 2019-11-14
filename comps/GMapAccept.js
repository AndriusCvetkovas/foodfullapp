import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import MapView, { Marker, Callout, Animated } from 'react-native-maps';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Geolocation from 'react-native-geolocation-service';
import GMapStyle from '../styles/mapStyle';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Info from './DInfoMap';
import AcceptedInfo from './DConfMap';
import AppContent from './AppContent';
import apiKey from '../apiKey/apiKey';
import axios from 'axios';



function GMapAccept() {

//GET DONATIONS
  const GetDonation = async () =>{
    var obj = {
      key: "donations_read",
      data: {
        status: 0
      }
      
    }
    var p = await axios.post(`http://localhost:3001/post`, obj)
    var json = JSON.parse(p.data.body);
    console.log(json);
    var d = json.data;
    console.log(d);
    setUsers(d);
        setLat(lat.push(d[i].lat));
        setLong(long.push(d[i].long));
        setDescription(description.push(d[i].description));
        setName(name.push(d[i].name));
        setImage(img.push(d[i].image_url));
    }
  const [users, setUsers] = useState([]);
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [description, setDescription] = useState();
  const [img, setImage] = useState();
  const [name, setName]= useState();
useEffect(()=> {
  GetDonation()
}, [])
  return (
    <View>
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        style={GMapStyle.mapStyle}
        zoomEnabled={true}
        region={{
          latitude: 49.246292,
          longitude: -123.116226,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5
        }}
        showsUserLocation={true}
        showsCompass={true}
        showsMyLocationButton={true}
        showsScale={true}

      >
        {
          users.map((d, i)=>{
            return <Marker
            id={d.id}
            coordinate={{
              latitude: d.lat,
              longitude: d.long
            }}
            title={d.name}
            description={d.description}
            ><Callout>
              <Image
              source={d.image_url}
              style={{width: 100, height: 100}}
              ></Image>
          <Text>{d.description}</Text>
              </Callout></Marker>
          })
        }
        
        {/* <Marker
          coordinate={{
            latitude: lat,
            longitude: long
          }}
          title={name}
          description={name}
          autoFocus={false}
        >
          <Callout>
            <Image source={{uri:`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${img}&key=${apiKey}`}}
            style = {{width: 300, height: 50}}>
            </Image>
            <Text style = {{fontSize: 20, padding: 20}}>{name}</Text>
            <Text>{address}</Text>
            <TouchableOpacity style={GMapStyle.infoInnerButton}>
              <Text style={{ color: '#06a2bc' }} 
              onPress={()=>getPost()}>Select</Text>
            </TouchableOpacity>
          </Callout>
        </Marker> */}
        {/* <GooglePlacesAutocomplete
          placeholder='Search'
          minLength={2} // minimum length of text to search
          autoFocus={false}
          returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
          keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
          listViewDisplayed='auto'    // true/false/undefined
          fetchDetails={true}
          renderDescription={row => row.description} // custom description render
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            console.log(data, details);
            setLat(details.geometry.location.lat);
            setLong(details.geometry.location.lng);
            setName(details.name);
            setImage(details.photos[0].photo_reference)
            setAddress(details.formatted_address)
          }}

          getDefaultValue={() => ''}

          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: apiKey,
            language: 'en', // language of the results
            types: 'establishment' // default: 'geocode'
          }}

          styles={{
            textInputContainer: {
              borderBottomWidth: 0,
              borderTopWidth: 0,
              backgroundColor: 'transparent'
            },
            textInput: {
              marginLeft: 10,
              height: 50

            },
            description: {
              fontWeight: 'bold'
            },
            listView: {
              backgroundColor: 'rgba(255,255,255, .8)',
              top: 13,
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            }
          }}

          currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
          currentLocationLabel="Current location"
          nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          GooglePlacesSearchQuery={{
            // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
            rankby: 'distance'
          }}

          GooglePlacesDetailsQuery={{
            // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
            fields: 'formatted_address',
          }}

          filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

          debounce={2000} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms
        /> */}
      </MapView>
      <ScrollView>
      {
          users.map((d, i)=>{
            return (
            <TouchableOpacity
              style={GMapStyle.viewStyle}
              >
              <View style={GMapStyle.innerInfoView}>
                <Text style={GMapStyle.infoInnerTitle}>{d.name}</Text>
                <Text style={[GMapStyle.infoInnerAddress, {fontSize: 16}]} key={i}>Donation Notes:{d.description}</Text>
              </View>
              <Text style={GMapStyle.infoInnerDistance}>4.6 km</Text>
              <TouchableOpacity style={GMapStyle.infoInnerButton}
              onPress={()=>Actions.info({description: d.description, names: d.name, img: d.image_url, time: d.time, date:d.date, address:d.address, id: d.id})}
              >
                <Text style={{ color: 'white' }}>Claim</Text>
              </TouchableOpacity>
            </TouchableOpacity>
            )
          })
      }
      </ScrollView>

    </View>
  );
};
export default GMapAccept;