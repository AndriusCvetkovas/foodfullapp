import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, AsyncStorage, Animated, InteractionManager } from 'react-native';
import MapView, { Marker, Callout} from 'react-native-maps';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Geolocation from 'react-native-geolocation-service';
import GMapStyle from '../styles/mapStyle';
import Info from './DInfoMap';
import AcceptedInfo from './DConfMap';
import AppContent from './AppContent';
import apiKey from '../apiKey/apiKey';
import axios from 'axios';
import Modal from 'react-native-modal';



function GMapAccept() {

  var map = React.createRef();
//GET DONATIONS
  const GetDonation = async () =>{
    var obj = {
      key: "donations_read",
      data: {
        status: 0
      }
    }
    var p = await axios.post(`https://foodfullapp.herokuapp.com/post`, obj)
    var json = JSON.parse(p.data.body);
    console.log(json);
    var d = json.data;
    console.log(d);
    setUsers(d);
        // setLat(lat.push(d[i].lat));
        // setLong(long.push(d[i].long));
        // setDescription(description.push(d[i].description));
        // setName(name.push(d[i].name));
        // setImage(img.push(d[i].image_url));
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
const [la,setLa] = useState(49);
const [lo,setLo] = useState();
const [h, setH] = useState(true);
const [hh] = useState(new Animated.Value(200))
const [showImage, setShowImage] = useState(true)


  const [dd, setdd] = useState([]);
  
  const [showModal, setShowModal]= useState(false);
  var modalInitContent = (<View><Text>eee</Text></View>);

    if (showModal === true){
        modalInitContent = (<Info 
          dd = {dd}
          setShowModal={setShowModal}
        />
        );    
      }
      
  return (
    <View style={{justifyContent: 'center'}}>
      <MapView
      ref ={map}
        provider={MapView.PROVIDER_GOOGLE}
        style={GMapStyle.mapStyle}
        zoomEnabled={true}
        showsUserLocation={true}

        region={{
          latitude: 49.2,
          longitude: -123.116226,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
        >
        {users.map((d, i) => {
          
          return (
            <MapView.Marker
              id={d.id}
              key={i}
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
            if(showImage == true){
              var imageContent = (<Image
                source = {{uri: `https://foodfull.s3-us-west-2.amazonaws.com/photo${d.user_id}.jpg`}}
                style = {{width: 375, flex: 3, top:-20, alignSelf:'center'}}>
                </Image>)
            }
            console.log(d.image_url)
            return(
          <TouchableOpacity style={GMapStyle.infoStyle}
          onPress={()=>{
            if(hh._value == 200){
              Animated.timing(
                hh,
                {
                  toValue: 400,
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
            InteractionManager.runAfterInteractions(()=>{
              map.current.animateToRegion(
                {
                  latitude: d.lat,
                  longitude: d.long,
                  latitudeDelta: 0.1,
                  longitudeDelta: 0.1
                },1000
              )
            })
            }
        }
          
          >
            <Text style={[GMapStyle.innerTitle, {top: -20}]}>{d.name}</Text>
            {imageContent}
            <View style={[GMapStyle.innerInfo ]} >
              {/* <Image
                style={{height: 75, width: 75, borderRadius: 75}}
                source={{uri: `https://foodfull.s3-us-west-2.amazonaws.com/avatar0.jpg`}}></Image> */}
              <View style={[GMapStyle.innerInner, {top: 130, left: -25}]}>
                
                <Text style={[GMapStyle.innerAddress,{top: 0, color: '#06a2bc', fontSize: 16}]} key={i}>
                  {d.address}
                </Text>
                <View style= {{left: 0, top: 20, overflow: 'hidden', height: 250}}>
                  
                  <Text>{d.time}</Text>
                  <Text>{d.date}</Text>
                  <Text>
                  Donation Notes:
                  </Text>
                  <Text style ={{color: 'grey', width: 150}}>{d.description}</Text>
                  
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
            </Modal>
    </View>
  );
}
       
export default GMapAccept;