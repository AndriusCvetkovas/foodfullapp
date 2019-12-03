import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, AsyncStorage,Button , TextInput ,TouchableHighlight } from 'react-native';
import ProfileStyle from '../../styles/profileStyle';
import EditStyles from '../../styles/EditStyles';
import { Actions} from 'react-native-router-flux';
import axios from 'axios';
import Modal from "react-native-modal";
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';

 function Profile() {
    const [showModal, setShowModal]= useState(false);
    var currentId = '';
    

    //USER INFORMATION

    const [userName, setUserName] = useState();
    const [userAddress, setUserAddress] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userPhone, setUserPhone] = useState();
    const [avatar, setAvatar]= useState();


    // const [t_email, setEmail] = useState("");
    // const [t_address, setAddress] = useState("");
    const [users, Setusers] = useState([]);
    const [uId, setUserId] = useState();
    
    //GET current user id 
    const getID = async () =>{
        var json = await AsyncStorage.getItem('id');
        currentId = json;
        console.log("userID "+currentId);
        GetUser();
    }
    //GRAB USER INFORMATION
    const GetUser = async () => {
        var obj = {
        key: "users_read",
        data: {
            id: currentId
        }
        }
        var r = await axios.post(`https://foodfullapp.herokuapp.com/post`, obj);
        var json = JSON.parse(r.data.body);
        console.log(json);
        var d = json.data;
        setAvatar(d[0].avatar_url);
        setUserName(d[0].name);
        setUserAddress(d[0].address)
        setUserEmail(d[0].email)
        setUserPhone(d[0].phone);
        setUserId(d[0].id);
        // setAdress(d[0].adress)
    }

//USER UPDATE

    const UpdateUser = async() => {
        var obj = {
            key:"users_update",
            data:{
                id: uId,
                email: userEmail,
                address: userAddress,
                phone: userPhone,
                Name: userName
            }
        }
        var r = await axios.post(`https://foodfullapp.herokuapp.com/post`, obj);
    console.log("test", r.data.body);
    Actions.refresh({key: 'profile'});
    Actions.refresh({key: 'dashboard0'});
    }
 //AVATAR CHANGE
 const options = {
    title: 'Select Donation Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
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
    var r = await axios.post("https://foodfullapp.herokuapp.com/post", {key:"avatar_upload", data: {uId}})
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
    
    console.log("r2", r2);
    setAvatar(uId)
    //setImage(`https://foodfull.s3-us-west-2.amazonaws.com/avatar${uId}.jpg`);
    //arr.push(r2.respInfo.redirects[0]);

    return false;
  }
});
}
 
        
        
    //CLEAR SESSION INFO
    const DeleteData = async () => {
        try {
            await AsyncStorage.clear();
        } catch (error) {
            
        }
    };
    const Logout = () => {
        DeleteData();
        Actions.login();
    }

    useEffect(()=> {
        getID();
    }, [])
    return( 
        //Main view 
        <View
        style = {ProfileStyle.mainView}
        >
            {/* Blue background */}
            <View style={ProfileStyle.background}>
            <Image style ={{width:'100%', height:'100%'}}
                    source={require('../../assets/img/blue_background.png')}/>
            </View>

            {/* Image view */}
            <View
            style={ProfileStyle.imageViewStyle}
            >
                <Image
                source={{uri: `https://foodfull.s3-us-west-2.amazonaws.com/avatar${avatar}.jpg`}}
                style={ProfileStyle.imageStyle}
                >
                </Image>
            </View>

            {/* Info view */}
            <View
            style={ProfileStyle.infoStyle}
            >
                <TouchableOpacity style = {{position: 'absolute', top: 20, right: 20}}
                onPress={()=> setShowModal(!showModal)}>
                    <Image style ={{width: 20, height: 20}}
                    source={require('../../assets/icon/edit.png')}
                    ></Image>
                </TouchableOpacity>


                {/* Store name/title below */}
                <Text
                style={ProfileStyle.titleStyle}
                >{userName}</Text>
                {/* Stat view below */}
                <View style={ProfileStyle.statBox}>
                     {/* WEIGHT */}
                    <View style={ProfileStyle.innerStatBox1}>
                        <Image 
                        source={require('../../assets/icon/weight.png')}
                        style={{width: 45, height: 35,marginBottom:10,padding: 20}}
                        />
                        <View style = {ProfileStyle.innerTextBox}>
                            <Text style={ProfileStyle.calculations}>1100 kg</Text>
                            <Text style={ProfileStyle.calcText}>of Food</Text>
                        </View>
                    </View>
                    {/* NUMBER OF DONATIONS */}
                    <View style={ProfileStyle.innerStatBox1}>
                    <Image 
                        source={require('../../assets/icon/donating_active.png')}
                        style={{width: 45, height: 35, padding:20, marginBottom:10,}}
                        />
                        <View style = {ProfileStyle.innerTextBox}>
                            <Text style={[ProfileStyle.calculations, {color:'#F5982F'}]}>40</Text>
                            <Text style={ProfileStyle.calcText}>Donations</Text>
                        </View>
                    </View>   
                </View>

                <View style ={ProfileStyle.infoInnerBox}>
                    {/* Address below */}
                    <View style = {ProfileStyle.addressBox}>
                        <Text style ={ProfileStyle.titles}>Address</Text>
                        <Text style = {ProfileStyle.info}>{userAddress}</Text>
                    </View>
                    {/* Email below */}
                    <View style = {ProfileStyle.addressBox}>
                        <Text style ={ProfileStyle.titles}>Email</Text>
                        <Text style = {ProfileStyle.info}>{userEmail}</Text>
                    </View>
                    {/* Phone below */}
                    <View style = {ProfileStyle.addressBox}>
                        <Text style ={ProfileStyle.titles}>Phone number</Text>
                        <Text style = {ProfileStyle.info}>{userPhone}</Text>
                    </View>
                 </View>
                </View>

            {/* Button view */}
            <View style = {ProfileStyle.buttonView}>
                <TouchableOpacity style ={ProfileStyle.buttonStyle}
                onPress={()=>Actions.leaderboard()}
                >
                    <Image
                    style={{flex: 0.04, width:25, height:15}}
                    source= {require('../../assets/icon/leaderboard.png')}
                    ></Image>
                    <Text style={{flex: 0.8, textAlign: 'center', color: '#06a2bc', fontSize: 20, fontFamily: 'avenir'}}>Leaderboard</Text>
                    <Image
                    source= {require('../../assets/icon/next.png')}
                    style={{flex: 0.03,width: 20, height: 20}}
                    ></Image>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style = {ProfileStyle.signOutBut}
                onPress={() => Logout()}
                >
                    <Text style={{textAlign: 'center', color: '#719799', fontSize: 20, fontFamily: 'avenir'}}>Sign Out</Text>
                </TouchableOpacity>
            </View>


            {/* EDIT PROFILE POPUP SECTION - THIS UPDATES USER INFO IN DATABASE*/}

    

            <Modal isVisible={showModal}
            coverScreen={false}
            animationIn='slideInUp'
            style = {{height: 600,width: 370, position: "absolute", alignItems:"center", marginTop:100}}
            isVisible = {showModal}
            onBackdropPress={() => setShowModal(!showModal)}
            >

                {/* <TouchableOpacity onPress={() => uploadMyImage()}
                style = {{top: 50, zIndex: 3}}>
                    <Text>Change Avatar</Text>
                </TouchableOpacity> */}
                   
                {/* X to close popup */}
                 <TouchableOpacity style ={{position: 'absolute', top: 80, right: 45, zIndex:1}}
                onPress={()=>{setShowModal(!showModal)}}>
                    <Image
                    source={require('../../assets/icon/x.png')}
                     style = {{width: 15, height: 15}}
                    />
                </TouchableOpacity>
            <View style = {EditStyles.popup}>
            <Text style ={EditStyles.header}>Edit Profile</Text>
            <Text style ={ProfileStyle.titles}>Address</Text>
            <View style={EditStyles.inputContainer}>

                <TextInput style={EditStyles.inputs}
                placeholder="Address"
                underlineColorAndroid='transparent'
                value={userAddress}
                onChangeText={(t)=>{setUserAddress(t);
                }}
                />

             </View>

            <Text style ={ProfileStyle.titles}>User Name</Text>
            <View style={EditStyles.inputContainer}>
            
            <TextInput style={EditStyles.inputs}
                    placeholder="User Name"
                    underlineColorAndroid='transparent'
                    value={userName}
                    onChangeText={(t)=>{setUserName(t);
                }}
                />
            </View>

            <Text style ={ProfileStyle.titles}>Email</Text>
            <View style={EditStyles.inputContainer}>
            <TextInput style={EditStyles.inputs}
                    placeholder="Email"
                    underlineColorAndroid='transparent'
                    value={userEmail}
                    onChangeText={(t)=>{setUserEmail(t);
                }}
                />
            </View>
        <Text style ={ProfileStyle.titles}>Phone</Text>
        <View style={EditStyles.inputContainer}>
           
        <TextInput style={EditStyles.inputs}
                placeholder="Phone"
                underlineColorAndroid='transparent'
                value={userPhone}
                onChangeText={(t)=>{setUserPhone(t);
              }}
              /> 
        </View>
        <TouchableOpacity style={[EditStyles.buttonContainer, EditStyles.signupButton]} 
          title="UPDATE USER"
          onPress={()=>{
              UpdateUser();
              setShowModal(!showModal)
          }}>
                        
         <Text style={EditStyles.signUpText}>Update</Text>
        </TouchableOpacity>
            </View>
            </Modal>
        </View>
    )
}
export default Profile;