import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, AsyncStorage} from 'react-native';
import ProfileStyle from '../../styles/profileStyle';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';

function Profile() {
  var currentId = '';

  //USER INFORMATION

  const [userName, setUserName] = useState();
  const [userAddress, setUserAddress] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPhone, setUserPhone] = useState();
  //GET current user id
  const getID = async () => {
    var json = await AsyncStorage.getItem('id');
    currentId = json;
    console.log('userID ' + currentId);
    GetUser();
  };

  //GRAB USER INFORMATION
  const GetUser = async () => {
    var obj = {
      key: 'users_read',
      data: {
        id: currentId,
      },
    };
    var r = await axios.post(`https://foodfullapp.herokuapp.com/post`, obj);
    var json = JSON.parse(r.data.body);
    console.log(json);
    var d = json.data;
    setUserName(d[0].name);
    setUserAddress(d[0].address);
    setUserEmail(d[0].email);
    setUserPhone(d[0].phone);
    setUserType(d[0].type);
  };

  //CLEAR SESSION INFO
  const DeleteData = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {}
  };
  const Logout = () => {
    DeleteData();
    Actions.login();
  };
  useEffect(() => {
    getID();
  }, []);
  return (
    //Main view
    <View style={ProfileStyle.mainView}>
      {/* Blue background */}
      <View style={ProfileStyle.background}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={require('../../assets/img/blue_background.png')}
        />
      </View>

      {/* Image view */}
      <View style={ProfileStyle.imageViewStyle}>
        <Image
          source={require('../../assets/img/safeway.jpg')}
          style={ProfileStyle.imageStyle}></Image>
      </View>

      {/* Info view */}
      <View style={ProfileStyle.infoStyle}>
        <TouchableOpacity style={{position: 'absolute', top: 20, right: 20}}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../../assets/icon/edit.png')}></Image>
        </TouchableOpacity>

        {/* Store name/title below */}
        <Text style={ProfileStyle.titleStyle}>{userName}</Text>
        {/* Stat view below */}
        <View style={ProfileStyle.statBox}>
          {/* WEIGHT */}
          <View style={ProfileStyle.innerStatBox1}>
            <Image
              source={require('../../assets/icon/weight.png')}
              style={{width: 45, height: 35, marginBottom: 10, padding: 20}}
            />
            <View style={ProfileStyle.innerTextBox}>
              <Text style={ProfileStyle.calculations}>1100 kg</Text>
              <Text style={ProfileStyle.calcText}>of Food</Text>
            </View>
          </View>
          {/* NUMBER OF DONATIONS */}
          <View style={ProfileStyle.innerStatBox1}>
            <Image
              source={require('../../assets/icon/donating_active.png')}
              style={{width: 45, height: 35, padding: 20, marginBottom: 10}}
            />
            <View style={ProfileStyle.innerTextBox}>
              <Text style={[ProfileStyle.calculations, {color: '#F5982F'}]}>
                40
              </Text>
              <Text style={ProfileStyle.calcText}>Donations</Text>
            </View>
          </View>
        </View>

        <View style={ProfileStyle.infoInnerBox}>
          {/* Address below */}
          <View style={ProfileStyle.addressBox}>
            <Text style={ProfileStyle.titles}>Address</Text>
            <Text style={ProfileStyle.info}>{userAddress}</Text>
          </View>
          {/* Email below */}
          <View style={ProfileStyle.addressBox}>
            <Text style={ProfileStyle.titles}>Email</Text>
            <Text style={ProfileStyle.info}>{userEmail}</Text>
          </View>
          {/* Phone below */}
          <View style={ProfileStyle.addressBox}>
            <Text style={ProfileStyle.titles}>Phone number</Text>
            <Text style={ProfileStyle.info}>{userPhone}</Text>
          </View>
        </View>
      </View>

      {/* Button view */}
      <View style={ProfileStyle.buttonView} show={false}>
        <TouchableOpacity
          style={ProfileStyle.buttonStyle}
          onPress={() => Actions.leaderboard()}>
          <Image
            style={{flex: 0.04, width: 25, height: 15}}
            source={require('../../assets/icon/leaderboard.png')}></Image>
          <Text
            style={{
              flex: 0.8,
              textAlign: 'center',
              color: '#06a2bc',
              fontSize: 20,
              fontFamily: 'avenir',
            }}>
            Leaderboard
          </Text>
          <Image
            source={require('../../assets/icon/next.png')}
            style={{flex: 0.03, width: 20, height: 20}}></Image>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={ProfileStyle.signOutBut}
          onPress={() => Logout()}>
          <Text
            style={{
              textAlign: 'center',
              color: '#719799',
              fontSize: 20,
              fontFamily: 'avenir',
            }}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Profile;
