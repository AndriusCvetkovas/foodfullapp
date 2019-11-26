import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, AsyncStorage, Animated } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Geolocation from 'react-native-geolocation-service';
import GMapStyle from '../styles/mapStyle';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Info from './DInfoMap';
import AcceptedInfo from './DConfMap';
import AppContent from './AppContent';
import apiKey from '../apiKey/apiKey';
import axios from 'axios';
import Modal from 'react-native-modal';


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
const [h, setH] = useState(true);
const [hh] = useState(new Animated.Value(200))
if(h == false){
  Animated.timing(
    hh,
    {
      toValue: 300,
      duration: 1000
    }
  ).start();
}else {
  Animated.timing(
    hh,
    {
      toValue: 200,
      duration: 1000
    }
  ).start();
}
const [la,setLa] = useState(49.246292)
  const [lo,setLo] = useState(-123.116226);
  const [dd, setdd] = useState([]);
  
  const [showModal, setShowModal]= useState(false);
  var modalInitContent = (<View><Text>eee</Text></View>);

    if (showModal === true){
        modalInitContent = (<Info 
          dd = {dd}
        />
        );    
      }
        

  return (
    <View style={{justifyContent: 'center'}}>
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        style={GMapStyle.mapStyle}
        zoomEnabled={true}
        region={{
          latitude: la,
          longitude: lo,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
        >
        {users.map((d, i) => {
          return (
            <MapView.Marker
              id={d.id}
              coordinate={{
                latitude: d.lat,
                longitude: d.long,
              }}
              title={d.name}
              description={d.address}
              image={require('../assets/icon/map.png')}
              selected={true}
            />
          );
        })}
      </MapView>
      <Animated.ScrollView horizontal={true} style={[GMapStyle.viewStyle, {height: hh}]}
      showsHorizontalScrollIndicator={false}
      
      >
        {
          users.map((d, i)=>{
            return(
          <TouchableOpacity style={[GMapStyle.infoStyle]}
          onPress={()=>setH(!h)}
          >
            <View style={[GMapStyle.innerInfo, ]}>
              <Image
                style={{height: 75, width: 75, borderRadius: 75}}
                source={require('../assets/img/safeway.jpg')}></Image>
              <View style={[GMapStyle.innerInner, {top: 30}]}>
                <Text style={GMapStyle.innerTitle}>{d.name}</Text>
                <Text style={GMapStyle.innerAddress} key={i}>
                  {d.address}
                </Text>
                <View style= {{left: -70, top: 20, overflow: 'hidden', height: 70}}>
                  
                  <Text>{d.time}</Text>
                  <Text>{d.date}</Text>
                  <Text>
                  Donation Notes:
                  </Text>
                  <Text style ={{color: 'grey', width: 150}}>{d.description} ssssssssssssssssssssssss</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity style={GMapStyle.innerButton}
            
            onPress={()=>{setShowModal(!showModal), setdd(d)}}>
              <Text
                style={{
                  color: '#06a2bc',
                  fontFamily: 'avenir',
                  fontWeight: '600',
                  fontSize: 16,
                }}>
                Select
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
          )})
          }
      </Animated.ScrollView>
      <TouchableOpacity style={GMapStyle.backBut}
      onPress={()=> Actions.tabbar1()}>
        <Image
          source={require('../assets/icon/next.png')}
          style={{
            left: -2,
            width: 15,
            height: 25,
            transform: [{rotateY: '180deg'}],
          }}></Image>
      </TouchableOpacity>
      <Modal isVisible={showModal}
            coverScreen={true}
            animationIn='slideInUp'
            style = {{height: 700,width: 380}}
            isVisible = {showModal}
            onBackdropPress={() => setShowModal(!showModal)}
            >
               {modalInitContent}
               <TouchableOpacity style ={{position: 'absolute', top: 240, right: 60}}
                onPress={()=>{setShowModal(!showModal)}}>
                    <Image
                    
                    source={require('../assets/icon/x.png')}
                    style = {{width: 15, height: 15}}
                    />
                    </TouchableOpacity>
            </Modal>
    </View>
  );
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
//       </MapView>
//       <ScrollView>
//       {
//           users.map((d, i)=>{
//             return (
//             <TouchableOpacity
//               style={GMapStyle.viewStyle}
//               >
//               <View style={GMapStyle.innerInfoView}>
//                 <Text style={GMapStyle.infoInnerTitle} key={i}>{d.name}</Text>
//                 <Text style={[GMapStyle.infoInnerAddress, {fontSize: 16}]} key={i}>Donation Notes:{d.description}</Text>
//               </View>
//               <Text style={GMapStyle.infoInnerDistance}>4.6 km</Text>
//               <TouchableOpacity style={GMapStyle.infoInnerButton}
//               onPress={()=>Actions.info({description: d.description, names: d.name, img: d.image_url, time: d.time, date:d.date, address:d.address, id: d.id})}
//               >
//                 <Text style={{ color: 'white' }}>Claim</Text>
//               </TouchableOpacity>
//             </TouchableOpacity>
//             )
//           })
//       }
//       </ScrollView>

//     </View>
//   );
// };
export default GMapAccept;