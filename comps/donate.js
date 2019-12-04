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
  Alert
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import donateStyle from '../styles/donateStyle';
import donationStyle from '../styles/donationStyle';
import {Actions} from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import Confirmation from './Confirmation';
import Modal from 'react-native-modal';
//import base64toblob from 'base64toblob';
import RNFetchBlob from 'rn-fetch-blob';

var id = '';
var receiverId = 0;
function Donate({addr, ids, tt, dType}) {
  var donationType = dType;
  var tts = tt;
  console.log('don type: ', donationType);


  if(donationType === 0){

  }
  var text = addr;

  receiverId = ids;

  if (text == null) {
    text = '';
  }

  console.log(id);
  const [chooseOrg, setChooseOrg] = useState(false);
  const [imageDefault, setArrayImages] = useState();
  const options = {
    title: 'Select Donation Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
      maxWidth: 500,
      maxHight: 500
    },
  };

  var orgInput = null;

  //IMAGE UPLOAD
  const [image, setImage] = useState()
  function uploadMyImage() {
    ImagePicker.showImagePicker(options, async(response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log("source", source);
        //send image name over to your db pics/imagename.jpg
        var r = await axios.post("https://foodfullapp.herokuapp.com/post", {key:"image_upload", data: {id}})
        //get url
        var url = JSON.parse(r.data.body).data.url;
        var uri = response.uri.replace("file://", "");
        console.log("uri2", uri);
        console.log("url",url);
        //upload with this - done
        var r2 = await RNFetchBlob.fetch('PUT', url, {
          "Accept":"image/*",
          "Content-Type":"image/*"
        }, RNFetchBlob.wrap(uri));
        

        //get url back - one of the properties has the path
        //gtg let me know how it works thanks a lot! will keep you posted!
        //sorry i made it so difficult.
        console.log("r2", r2);
        setImage(`https://foodfull.s3-us-west-2.amazonaws.com/photo${id}.jpg`);
        //arr.push(r2.respInfo.redirects[0]);

        return false;
      }
    });
  }
var title ='Public Donation';
  if (donationType === 1) {
    var pdcolor = '#b7b7b7',
      pdline = 'line-through',
      pddecoration = 'solid',
      cocolor = '#3dbfd2';
    coweight = '800';
    title = 'Private Donation';



    orgInput = (
      
      <KeyboardAvoidingView enabled>
        <Text
              style={[
                donateStyle.lftItems,
                {color: cocolor, fontWeight: coweight},
              ]}>
              Choose an Organization:
        </Text>
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
                    fontFamily: 'Avenir',
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
      image_url: image,
      weight: 0,
      description: selectedDescription,
      user_id: id,
      destination_id: receiverId,
      status: donationType,
    },
  };

  console.log(obj.data.user_id);
  const changePage = () => {
      setShowModal(!showModal);
  };
  useEffect(() => {
    getID();
  }, []);

  useEffect(() => {
    setSelectedDate('');
    setSelectedTime('');
    setSelectedDescription('');
    Actions.refresh({key: 'postdonation'});
  }, []);

  const [showModal, setShowModal] = useState(false);
  var modalInitContent = (
    <View>
      <Text></Text>
    </View>
  );

  if (showModal === true) {
    modalInitContent = <Confirmation obj={obj} setShowModal={setShowModal} />;
  }
  return (
    <KeyboardAvoidingView
      style={donateStyle.container}
      behavior="padding"
      enabled>
      <ScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 12,
          left: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex:2
        }}
        onPress={() => Actions.choosedonation()}>
        <Image
          source={require('../assets/icon/next.png')}
          style={
            {width: 25, height: 30, 
            transform: [{rotateY: '180deg'}],
          }}></Image>
        <Text></Text>
      </TouchableOpacity>
        <View>
          <View style={donateStyle.padding}>
            {/* ADD A PHOTO */}
            <Text style={donateStyle.pageHeader}>{title}</Text>
            <Text style={donateStyle.headers}>Add up to 3 Photos</Text>
            <ScrollView horizontal="true">
              <View style={donateStyle.ImagePad}>
                <TouchableOpacity onPress={() => uploadMyImage()}>
                  <View style={donateStyle.uploadPictureButton}>
                    <Text style={donateStyle.addImagePlus}>+</Text>
                  </View>
                </TouchableOpacity>
                    <Image
                      source={{uri: `${image}`}}
                      style={{
                        height: 100,
                        width: 100,
                        borderRadius: 10,
                        marginLeft: 5,
                      }}
                    />
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

            
        {/* Public Donation Header */}
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
              <Text style={[donateStyle.headers, {flex: 1, marginTop: 30}]}>Description</Text>
              <TouchableOpacity style= {{flex:0.12,marginTop: 30}}
              onPress={()=> Alert.alert('Please add notes or details about your food donation','')}>
                <Image
                source = {require('../assets/icon/question.png')}
                style= {{width: 25, height: 25,top: -5, marginRight: 10}}
                >
                </Image>
              </TouchableOpacity>
            </View>
            <TextInput
              style={{
                height: 140,
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
        <View>
          {orgInput}
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
      <TouchableOpacity
          style={donateStyle.DonateBtn}
          underlayColor="#000"
          color="white"
          onPress={() => 
            {if(image == null || selectedDate == null || selectedTime == null || setSelectedDescription == null){
              alert("Please fill in all the inputs")
            }else {
              changePage();
          }}}
          >
          <Text style={donateStyle.btnText}>Donate</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

export default Donate;
