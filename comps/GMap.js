import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  AsyncStorage,
} from 'react-native';
import MapView, {Marker, Callout, Animated} from 'react-native-maps';
import {Actions} from 'react-native-router-flux';
import Geolocation from 'react-native-geolocation-service';
import GMapStyle from '../styles/mapStyle';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Info from './DInfoMap';
import AcceptedInfo from './DConfMap';
import AppContent from './AppContent';
import apiKey from '../apiKey/apiKey';
import axios from 'axios';

import Confirmation from './Confirmation';

function GMap() {
  var type = '';
  //GET USER TYPE
  const getType = async () => {
    var json = await AsyncStorage.getItem('type');
    type = json;
    console.log(type);
    CheckType();
  };

  //CHECK WHAT TYPE USER HAS
  const CheckType = () => {
    console.log('user' + type);
    if (type == 1) {
      alert('err');
    } else {
      GetUsers0();
    }
  };
  //function to get foodbanks
  const GetUsers0 = async () => {
    var obj = {
      key: 'users_read',
      data: {
        type: 1,
      },
    };
    var r = await axios.post(`http://localhost:3001/post`, obj);
    var json = JSON.parse(r.data.body);
    console.log(json);
    var d = json.data;
    console.log(d);
    setUsers(d);
    setLat(lat.push(d[i].lat));
    setLong(long.push(d[i].long));
    setName(name.push(d[i].name));
    setAddress(address.push(d[i].address));
  };

  const [users, setUsers] = useState([]);
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  useEffect(() => {
    getType();
  }, []);

  return (
    <View style={{justifyContent: 'center'}}>
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        style={GMapStyle.mapStyle}
        zoomEnabled={true}
        region={{
          latitude: 49.246292,
          longitude: -123.116226,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}>
        {users.map((d, i) => {
          return (
            <Marker
              id={d.id}
              coordinate={{
                latitude: d.lat,
                longitude: d.long,
              }}
              title={d.name}
              description={d.address}
              image={require('../assets/icon/map.png')}
            />
          );
        })}
      </MapView>
      <ScrollView horizontal={true} style={GMapStyle.viewStyle}>
        {
          users.map((d, i)=>{
            return(
          <TouchableOpacity style={GMapStyle.infoStyle}>
            <View style={GMapStyle.innerInfo}>
              <Image
                style={{height: 75, width: 75, borderRadius: 75}}
                source={require('../assets/img/safeway.jpg')}></Image>
              <View style={GMapStyle.innerInner}>
                <Text style={GMapStyle.innerTitle}>{d.name}</Text>
                <Text style={GMapStyle.innerAddress} key={i}>
                  {d.address}
                </Text>
              </View>
            </View>

            <TouchableOpacity style={GMapStyle.innerButton}>
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
      </ScrollView>
      <TouchableOpacity style={GMapStyle.backBut}
      onPress={()=> Actions.postdonation()}>
        <Image
          source={require('../assets/icon/next.png')}
          style={{
            left: -2,
            width: 15,
            height: 25,
            transform: [{rotateY: '180deg'}],
          }}></Image>
      </TouchableOpacity>
    </View>
  );
}

//   <View>
//     <MapView
//       provider={MapView.PROVIDER_GOOGLE}
//       style={GMapStyle.mapStyle}
//       zoomEnabled={true}
//       region={{
//         latitude: 49.246292,
//         longitude: -123.116226,
//         latitudeDelta: 0.5,
//         longitudeDelta: 0.5
//       }}
//       showsUserLocation={true}
//       showsCompass={true}
//       showsMyLocationButton={true}
//       showsScale={true}

//     >
//       {
//         users.map((d, i)=>{
//           return <Marker
//           id={d.id}
//           coordinate={{
//             latitude: d.lat,
//             longitude: d.long
//           }}
//           title={d.name}
//           description={d.address}
//           image={require('../assets/icon/map.png')}
//           />
//         })
//       }
//     </MapView>
//     <ScrollView>
//     {
//         users.map((d, i)=>{
//           return (
//           <TouchableOpacity
//             style={GMapStyle.viewStyle}
//             >
//             <View style={GMapStyle.innerInfoView}>
//               <Text style={GMapStyle.infoInnerTitle}>{d.name}</Text>
//               <Text style={GMapStyle.infoInnerAddress} key={i}>{d.address}</Text>
//             </View>
//             <Text style={GMapStyle.infoInnerDistance}>4.6 km</Text>
//             <TouchableOpacity style={GMapStyle.infoInnerButton}
//             onPress={()=>Actions.postdonation({addr: d.name,
//             ids: d.id, stat: 1})}
//             >
//               <Text style={{ color: 'white' }}>Pick</Text>
//             </TouchableOpacity>
//           </TouchableOpacity>
//           )
//         })
//     }
//     </ScrollView>
//   </View>
// );
//};
export default GMap;
