import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  Switch,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import donateStyle from '../styles/donateStyle';
import donationStyle from '../styles/donationStyle';
import {Actions} from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import Confirmation from './Confirmation';
import Modal from 'react-native-modal';
var id = '';
var receiverId = 0;
var statu = 0;
function Donate({addr, ids, stat, tt}) {
  var text = addr;
  receiverId = ids;

  if (stat != null) {
    statu = stat;
  }
  if (text == null) {
    text = '';
  }
  console.log(id);
  const [chooseOrg, setChooseOrg] = useState(false);
  const [imageDefault, setArrayImages] = useState([]);
  const options = {
    title: 'Select Donation Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  var orgInput = null;

  //IMAGE UPLOAD
  function uploadMyImage() {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        var arr = imageDefault.map(o => {
          return o;
        });
        arr.push(source);
        setArrayImages(arr);
        console.log(arr);
        setSelectedUrl(arr);
      }
    });
  }

  var pdcolor = '#3dbfd2',
    cocolor = '#606060',
    coweight = '600';

  if (chooseOrg === true) {
    var pdcolor = '#b7b7b7',
      pdline = 'line-through',
      pddecoration = 'solid',
      cocolor = '#3dbfd2';
    coweight = '800';

    orgInput = (
      <KeyboardAvoidingView enabled>
        <View style={{margin: 5}}>
          <TextInput
            onFocus={() => Actions.map()}
            style={{
              height: 40,
              borderColor: '#EDEDEF',
              borderWidth: 1,
              borderRadius: 30,
              backgroundColor: '#eee',
              marginBottom: 10,
              padding: 10,
              width: '98%',
            }}
            placeholder="Please locate users in the map">
            {text}
          </TextInput>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              style={donateStyle.mapSearchButton}
              underlayColor="#000"
              color="white"
              onPress={() => Actions.map()}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{width: 15, height: 20, left: -20}}
                  source={require('../assets/icon/map.png')}
                />
                <Text
                  style={{
                    fontSize: 18,
                    fontfamily: 'Avenir',
                    fontWeight: '600',
                    color: '#06a2bc',
                  }}>
                  View Map
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  } else {
  }

  //SELECTIONS
  const [selectedDate, setSelectedDate] = useState();
  const [selectedUrl, setSelectedUrl] = useState();
  const [selectedDescription, setSelectedDescription] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [status, setStatus] = useState(0);
  //GET USER ID

  const getID = async () => {
    var json = await AsyncStorage.getItem('id');
    id = json;
    console.log(id);
  };

  //SEND INFORMATION TO DATABASE
  const obj = {
    key: 'donations_create',
    data: {
      date: selectedDate,
      time: selectedTime,
      image_url: selectedUrl,
      weight: 0,
      description: selectedDescription,
      user_id: id,
      destination_id: receiverId,
      status: statu,
    },
  };

  console.log(obj.data.user_id);
  const changePage = () => {
    if (receiverId != 0) {
      setStatus(1);
      setShowModal(!showModal);
      //Actions.confirmdonation({ text: obj })
    } else if (receiverId != 0 && text == null) {
      alert('Please enter receiver');
    } else {
      Actions.confirmdonation({text: obj});
    }
  };
  useEffect(() => {
    getID();
  }, []);

  useEffect(() => {
    setSelectedDate('');
    setSelectedTime('');
    setSelectedDescription('');
    Actions.refresh({key: 'postdonation'});
  }, [tt]);

  const [showModal, setShowModal] = useState(false);
  var modalInitContent = (
    <View>
      <Text>eee</Text>
    </View>
  );

  if (showModal === true) {
    modalInitContent = <Confirmation obj={obj} />;
  }
  return (
    <KeyboardAvoidingView
      style={donateStyle.container}
      behavior="padding"
      enabled>
      <ScrollView>
        <View>
          <View style={donateStyle.padding}>
            {/* ADD A PHOTO */}
            <Text style={donateStyle.pageHeader}>Make a Donation</Text>
            <Text style={donateStyle.headers}>Add up to 3 Photos</Text>
            <ScrollView horizontal="true">
              <View style={donateStyle.ImagePad}>
                <TouchableOpacity onPress={() => uploadMyImage()}>
                  <View style={donateStyle.uploadPictureButton}>
                    <Text style={donateStyle.addImagePlus}>+</Text>
                  </View>
                </TouchableOpacity>
                {imageDefault.map((obj, i) => {
                  return (
                    <Image
                      key={i}
                      source={obj}
                      style={{
                        height: 100,
                        width: 100,
                        borderRadius: 10,
                        marginLeft: 5,
                      }}
                    />
                  );
                })}
                {/* <Image source={avatarSource} style={{height:100, width:100, borderRadius: 10}} /> */}
              </View>
            </ScrollView>
          </View>
          <View>
            <View>
              <Text style={donateStyle.headers}>Date of Pick up</Text>
            </View>
            <View style={donateStyle.comp}>
              <DatePicker
                style={{width: '100%'}}
                date={selectedDate}
                mode="date"
                value={selectedDate}
                placeholder="select date"
                format="YYYY-MMM-DD"
                minDate="2019-11-21"
                maxDate="2040-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    width: 0,
                    height: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    width: 100,
                    borderRadius: 50,
                  },
                }}
                onDateChange={val => {
                  setSelectedDate(val);
                }}
              />
            </View>
          </View>

          <View>
            <View>
              <Text style={donateStyle.headers}>Time</Text>
            </View>
            <View style={donateStyle.comp}>
              <DatePicker
                style={{width: '100%'}}
                date={selectedTime}
                mode="time"
                placeholder="Pick a time"
                format="HH:mm"
                value={selectedTime}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                minuteInterval={30}
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    width: 0,
                    height: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    width: 100,
                    borderRadius: 50,
                  },
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={newTime => {
                  setSelectedTime(newTime);
                }}
              />
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={donateStyle.headers}>Description</Text>
              <Text style={donateStyle.note}>
                Please add notes or details about your food donation
              </Text>
            </View>
            <TextInput
              style={{
                height: 80,
                borderColor: '#ddd',
                borderWidth: 1,
                borderRadius: 15,
                backgroundColor: '#eee',
                padding: 20,
              }}
              numberOfLines={4}
              multiline
              onChangeText={text => setSelectedDescription(text)}>
              {selectedDescription}
            </TextInput>
          </View>

          {/* Public Donation Header */}
          <View>
            <Text
              style={[
                donateStyle.pdheader,
                {
                  color: pdcolor,
                  textDecorationLine: pdline,
                  textDecorationStyle: pddecoration,
                },
              ]}>
              {' '}
              Public Donation
            </Text>
          </View>

          {/* Choose Organization */}
          <View style={[donateStyle.padding, donateStyle.row]}>
            <Text
              style={[
                donateStyle.lftItems,
                {color: cocolor, fontWeight: coweight},
              ]}>
              Choose an Organization
            </Text>
            <Switch
              style={donateStyle.rgttems}
              value={chooseOrg}
              onValueChange={() => setChooseOrg(!chooseOrg)}
            />
          </View>

          {orgInput}
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={donateStyle.DonateBtn}
            underlayColor="#000"
            color="white"
            onPress={changePage}>
            <Text style={donateStyle.btnText}>Donate</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal
        isVisible={showModal}
        coverScreen={true}
        animationIn="slideInUp"
        style={{height: 700, width: 380}}
        isVisible={showModal}
        onBackdropPress={() => setShowModal(!showModal)}>
        {modalInitContent}
        <TouchableOpacity
          style={{position: 'absolute', top: 80, right: 50}}
          onPress={() => {
            setShowModal(!showModal);
          }}>
          <Image
            source={require('../assets/icon/x.png')}
            style={{width: 15, height: 15, top: 100, right: 10}}
          />
        </TouchableOpacity>
      </Modal>
    </KeyboardAvoidingView>
  );
}

export default Donate;
