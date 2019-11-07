import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableHighlight,
} from 'react-native';
import styles from '../styles/PostedStyle';


function DonationPosted(){
  return (
   <View>
       <View style={styles.mainbody}>
           <Image style={styles.imgPosted} source={require("../assets/img/posted_donation.png")} />

        <View style={styles.headers}>
              <Text style={styles.titleHeader}>Your donation has been posted</Text>
        </View>

        <View style={styles.contents}>
              <Text style={styles.contentPosts}>When an orgainzation claim your food donation you will be notified</Text>
        </View>

        <View style = {styles.containerButton}>
        <TouchableHighlight style={[styles.buttonContainer, styles.MakePost]} onPress={() => Actions.donationsign()}>
          <Text style={styles.B1}>Make another Donation</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.ViewPost]} onPress={() => Actions.donationsign()}>
          <Text style={styles.B2}>View your Donation</Text>
        </TouchableHighlight>
        </View>

       </View>


   </View>  
  )
};

export default DonationPosted;
