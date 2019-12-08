import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import buttonStyle from '../../styles/buttonStyle';
import {Router, Scene, Actions} from 'react-native-router-flux';
import axios from 'axios';
import AcceptNFStyle from '../../styles/AcceptNFStyle';
import Swiper from 'react-native-swiper';
//for DateTimePicker run yarn add @react-native-community/datetimepicker and pod install

function Info({dd, setShowModal}) {
  var desc = dd.description;
  var namer = dd.names;
  var times = dd.time;
  var dates = dd.date;
  var addresss = dd.address;
  var dId = dd.id;
  var uid = dd.user_id;
  console.log(namer);
  var currentId = 0;
  const getID = async () => {
    var json = await AsyncStorage.getItem('id');
    currentId = json;
    console.log('userID ' + currentId);
  };

  const Claim = async () => {
    var obj = {
      key: 'donations_update',
      data: {
        id: dId,
        status: 2,
        destination_id: currentId,
      }
    };
    var r = await axios.post(`https://foodfullapp.herokuapp.com/post`, obj);
    var json = JSON.parse(r.data.body);
    console.log(r);
    setShowModal(false);
    Actions.conf({address: addresss, time: times, date: dates, names: namer});
  };
  //const [time, setTime] = useState("20:20");

  useEffect(() => {
    getID();
  }, []);
  return (
    <View style ={{height: 500, alignItems: 'center'}}>
                <View style={AcceptNFStyle.main2}>
                {/*Donation info below */}

                <View style={AcceptNFStyle.donationInfoTop}>
                {/* <Swiper  showsButtons={false}> */}
                    <Image style={AcceptNFStyle.DImage}
                    source = {{uri: `https://foodfull.s3-us-west-2.amazonaws.com/photo${uid}.jpg`}}
                    >
                    </Image>
                    {/* <Image style={AcceptNFStyle.DImage}
                    source = {{uri: `https://foodfull.s3-us-west-2.amazonaws.com/photo${dd.image_url[1]}.jpg`}}
                    >
                    </Image>
                    <Image style={AcceptNFStyle.DImage}
                    source = {{uri: `https://foodfull.s3-us-west-2.amazonaws.com/photo${dd.image_url[1]}.jpg`}}
                    >
                    </Image>  */}
                {/* </Swiper> */}


                </View>
                {/*Image text below */}
                <View style ={{flex: 1.5, padding: 5}}>
                <View style={AcceptNFStyle.TextDisplay}>
                            <Text style={AcceptNFStyle.Organization}>{dd.name}</Text>
                            {/* <Text style={AcceptNFStyle.address}>Donation Request</Text> */}
                    </View> 
                {/*Date of pickup below */}
                <View style={[AcceptNFStyle.pickupDate, {flex: 1.3}]}>
                    <Text style={{ color: '#066a87', fontSize: 16, flex: 2}} onPress={()=> alert('Address',dd.address)}>{dd.address}</Text>
                </View>
                <View style={AcceptNFStyle.pickupDate}>
                    <Text style={{ color: '#0ca3bc', fontSize: 18, flex: 1,fontWeight: "600" }}>Pickup Date</Text>
                    <Text style={{ color: '#066a87', fontSize: 16, flex: 1}}>{dd.date}</Text>
                </View>
                {/*Pickup time below */}
                <View style={AcceptNFStyle.pickupTime}>
                    <Text style={{ color: '#0ca3bc', fontSize: 18, flex: 1,fontWeight: "600" }}>Pickup Time</Text>
                    <Text style={{ color: '#066a87', fontSize: 16, flex: 1 }}>{dd.time}</Text>
                </View>
                {/*Description title below */}
                <Text
                    style={AcceptNFStyle.descriptionTitle}
                >Description</Text>
                {/*Description below */}
                <Text
                    style={AcceptNFStyle.description}
                >
                    {dd.description}
            </Text>
            </View>
            <TouchableOpacity
        onPress={() => Claim()}
        title="Accept"
        style={buttonStyle.button}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'avenir',
            fontSize: 16,
            fontWeight: '500',
          }}>
          Claim Donation
        </Text>
      </TouchableOpacity>
              <TouchableOpacity style ={{position: 'absolute', top: 30, right: 30}}
              onPress={()=>{setShowModal(false)}}>
                  <Image
                  
                  source={require('../../assets/icon/x.png')}
                  style = {{width: 15, height: 15}}
                  />
              </TouchableOpacity>
            </View>
                </View>
      
  );
}
export default Info;
