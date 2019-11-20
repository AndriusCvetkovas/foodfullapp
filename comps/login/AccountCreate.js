import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import styles from '../../styles/DonatePen';
import {Actions} from 'react-native-router-flux'
import axios from 'axios';



function AccountCreate({text}) {
  const [userType, setUserType] = useState(text);
  // const ReadUsers = async() => {
  //   var obj = {
  //     key:"users_read",
  //     data:{}
  //   }
  
  //   var r = await axios.post(`http://localhost:3001/post`, obj);
  //   console.log(r.data);
  //   setUserType(JSON.parse(r.data.body.type))
  //   console.log(userType);
  // }
  const ChangeToDashboard = ()=>{
    //ReadUsers();
    if(userType === 0){
      Actions.dashboard0();
    }else {
      Actions.dashboard1();
    }
  }
  return (
    <View>
      <View style={styles.mainbody}>
        <Image style={styles.imgPosted} source={require("../../assets/img/created_account.png")} />

        <View style={styles.headers}>
          <Text style={styles.titleHeader}>Your account has been created!</Text>
        </View>

        <View style={styles.contents}>
          <Text style={styles.contentPosts}>Thank you for joining Foodfull and
              being part of a movement to reduce food waste and hunger in your community</Text>
        </View>

        <View style={styles.containerButton}>
          <TouchableHighlight style={[styles.buttonContainer, styles.MakePost]} onPress={() => ChangeToDashboard()}>
            <Text style={styles.B1}>Lets Get Started</Text>
          </TouchableHighlight>

        </View>

      </View>


    </View>
  )
};

export default AccountCreate;