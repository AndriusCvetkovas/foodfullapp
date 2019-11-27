import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, AsyncStorage,Button , TextInput ,TouchableHighlight } from 'react-native';
import ProfileStyle from '../../styles/profileStyle';
import styles from '../../styles/EditStyles';
import { Actions} from 'react-native-router-flux';
import axios from 'axios';
import Modal from "react-native-modal";

 function Profile() {
    const [showModal, setShowModal]= useState(false);
    var currentId = '';
    

    //USER INFORMATION

    const [userName, setUserName] = useState();
    const [userAddress, setUserAddress] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userPhone, setUserPhone] = useState();


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
    const UpdateUser = async ()
    //GRAB USER INFORMATION
    const GetUser = async () => {
        var obj = {
        key: "users_read",
        data: {
            id: currentId
        }
        }
        var r = await axios.post(`http://localhost:3001/post`, obj);
        var json = JSON.parse(r.data.body);
        console.log(json);
        var d = json.data;
        setUserName(d[0].name);
        setUserAddress(d[0].address)
        setUserEmail(d[0].email)
        setUserPhone(d[0].phone);
        setUserId(d[0].id);
        // setAdress(d[0].adress)
    }

    // const ReadUsers = async()=>{

    //     //fetch to the db to read
    //     var obj = {
    //         key:"users_read",
    //         data:{}
    //     }

    //     var data = await axios.post("http://localhost:3001/post", obj);
    //     console.log("read", JSON.parse(data.data.body));
        
    //     var dbusers = JSON.parse(data.data.body).data;
    //     Setusers(dbusers);  

    // }

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
        var r = await axios.post("http://localhost:3001/post", obj);
    console.log("test", r.data.body);
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
    // useEffect(()=>{
    //     getID();
    // }, []);
    // useEffect(()=>{
    //     GetUser();
    // }, [getID()]);
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
                source={require('../../assets/img/safeway.jpg')}
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
            <Modal isVisible={showModal}
            coverScreen={false}
            animationIn='slideInUp'
            style = {{backgroundColor: 'transparent', height: 500,width: 380, position: "absolute"}}
            isVisible = {showModal}
            onBackdropPress={() => setShowModal(!showModal)}
            >
                <View style = {{height: 500, width: 330, backgroundColor: 'white', marginTop:15, padding:20, borderRadius:20 }}>
                   

       <Text style ={ProfileStyle.titles}>Address</Text>
       <View style={styles.inputContainer}>

          <TextInput style={styles.inputs}
          placeholder="Address"
          underlineColorAndroid='transparent'
          value={userAddress}
          onChangeText={(t)=>{setUserAddress(t);
        }}
        />

             
        </View>


        <Text style ={ProfileStyle.titles}>User Name</Text>
        <View style={styles.inputContainer}>
          
          <TextInput style={styles.inputs}
                placeholder="User Name"
                underlineColorAndroid='transparent'
                value={userName}
                onChangeText={(t)=>{setUserName(t);
              }}
              />
        </View>

        <Text style ={ProfileStyle.titles}>Email</Text>
        <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
                placeholder="Email"
                underlineColorAndroid='transparent'
                value={userEmail}
                onChangeText={(t)=>{setUserEmail(t);
              }}
              />
        </View>

        


        <Text style ={ProfileStyle.titles}>Phone</Text>
        <View style={styles.inputContainer}>
           
        <TextInput style={styles.inputs}
                placeholder="Phone"
                underlineColorAndroid='transparent'
                value={userPhone}
                onChangeText={(t)=>{setUserPhone(t);
              }}
              /> 
        </View>


        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} 
          title="UPDATE USER"
          onPress={()=>{
              UpdateUser();
          }}>
                        
          <Text style={styles.signUpText}>update</Text>
        </TouchableHighlight>
                </View>
            </Modal>



        </View>
    )
}
export default Profile;