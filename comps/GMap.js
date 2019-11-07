import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Geolocation from 'react-native-geolocation-service';
import GMapStyle from '../styles/mapStyle';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Info from './DInfoMap';
import AcceptedInfo from './DConfMap';
import AppContent from './AppContent';
import apiKey from '../apiKey/apiKey';
function GMap() {

  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [name, setName] = useState("");
  const [img, setImage] = useState('');
  const [address, setAddress]= useState('');
  async function getPos() {
    //console.log(Geolocation)
    var position = await Geolocation.getCurrentPosition((data) => {
      console.log(data);
    });
  }

  useEffect(() => {
    getPos();
  }, []);


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
        <Marker
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
        </Marker>
        <GooglePlacesAutocomplete
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
        />
      </MapView>

      <ScrollView>
        <View
          style={GMapStyle.viewStyle}
        >
          <View style={GMapStyle.innerInfoView}>
            <Text style={GMapStyle.infoInnerTitle}>Safeway Extra</Text>
            <Text style={GMapStyle.infoInnerAddress}>1100 British Ave</Text>
          </View>
          <Text style={GMapStyle.infoInnerDistance}>4.6 km</Text>
          <TouchableOpacity style={GMapStyle.infoInnerButton}>
            <Text style={{ color: '#06a2bc' }}>View</Text>
          </TouchableOpacity>
        </View>

        <View
          style={GMapStyle.viewStyle}
        >
          <View style={GMapStyle.innerInfoView}>
            <Text style={GMapStyle.infoInnerTitle}>Safeway Extra</Text>
            <Text style={GMapStyle.infoInnerAddress}>1100 British Ave</Text>
          </View>
          <Text style={GMapStyle.infoInnerDistance}>4.6 km</Text>
          <TouchableOpacity style={GMapStyle.infoInnerButton}>
            <Text style={{ color: '#06a2bc' }}>View</Text>
          </TouchableOpacity>
        </View>

        <View
          style={GMapStyle.viewStyle}
        >
          <View style={GMapStyle.innerInfoView}>
            <Text style={GMapStyle.infoInnerTitle}>Safeway Extra</Text>
            <Text style={GMapStyle.infoInnerAddress}>1100 British Ave</Text>
          </View>
          <Text style={GMapStyle.infoInnerDistance}>4.6 km</Text>
          <TouchableOpacity style={GMapStyle.infoInnerButton}>
            <Text style={{ color: 'white' }}>View</Text>
          </TouchableOpacity>
        </View>

        <View
          style={GMapStyle.viewStyle}
        >
          <View style={GMapStyle.innerInfoView}>
            <Text style={GMapStyle.infoInnerTitle}>Safeway Extra</Text>
            <Text style={GMapStyle.infoInnerAddress}>1100 British Ave</Text>
          </View>
          <Text style={GMapStyle.infoInnerDistance}>4.6 km</Text>
          <TouchableOpacity style={GMapStyle.infoInnerButton}>
            <Text style={{ color: '#06a2bc' }}>View</Text>
          </TouchableOpacity>
        </View>

        <View
          style={GMapStyle.viewStyle}
        >
          <View style={GMapStyle.innerInfoView}>
            <Text style={GMapStyle.infoInnerTitle}>Safeway Extra</Text>
            <Text style={GMapStyle.infoInnerAddress}>1100 British Ave</Text>
          </View>
          <Text style={GMapStyle.infoInnerDistance}>4.6 km</Text>
          <TouchableOpacity style={GMapStyle.infoInnerButton}>
            <Text style={{ color: '#06a2bc' }}>View</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </View>
  );
};
export default GMap;