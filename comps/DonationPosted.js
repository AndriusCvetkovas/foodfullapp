import React from 'react';
import {
  View,
  Text,
  Image,  
  Button,
  TouchableHighlight,
} from 'react-native';
import styles from '../styles/PostedStyle';
import {Actions} from 'react-native-router-flux';
import LottieView from 'lottie-react-native';


function DonationPosted(){
  var tt ='ha'
  return (
   <View style={{backgroundColor:'#ffffff', flex:1}}>
       <View style={styles.mainbody}>
             <LottieView
                source={require('../assets/lottieFiles/donatephone.json')}
                style={{justifyContent:'center', alignItems:'center',height:300, width:'100%',}}
                autoPlay
                loop
            />

        <View style={styles.headers}>
              <Text style={styles.titleHeader}>Your donation has been sent!</Text>
        </View>

        <View style={styles.contents}>
              <Text style={styles.contentPosts}>When an organization accepts your donation, you will be notified.</Text>
        </View>

        <View style = {styles.containerButton}>
        <TouchableHighlight style={[styles.buttonContainer, styles.MakePost]} onPress={() => Actions.postdonation({tt})}>
          <Text style={styles.B1}>Make another Donation</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.ViewPost]} onPress={() => {Actions.notification0()}}>
          <Text style={styles.B2}>View Donations</Text>
        </TouchableHighlight>
        </View>

       </View>


   </View>  
  )
};

export default DonationPosted;
