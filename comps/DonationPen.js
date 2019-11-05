import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import styles from '../styles/DonatePen';


function DonationPen(){
  return (
   <View style={styles.pendingPage}>

       


       <View style= {styles.pending}>
            <Image
            style={styles.pendingimg}
            source={require('../assets/img/posted_donation.png')}
            />
            <Text style={styles.titlepen}>Your Donation</Text>
            <Text style={styles.titlepen}>has been posted!</Text>
            <Text>When an organiazation claims your food donation, you will be notified.</Text>
        </View>


        <TouchableOpacity onPress={() => this.onLogin()}>
  <View
    style={{
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      padding: 5,
      width: 220,
      height:50,
      marginLeft:50
    }}>
    <Text style={{color: 'white', fontSize: 15, fontWeight: '400'}}>
      Make another Donation
    </Text>
  </View>
</TouchableOpacity>


<TouchableOpacity onPress={() => this.onLogin()}>
  <View
    style={{
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      padding: 15,
      width: 220,
      height:50,
      marginLeft:50,
      marginTop:10,
    }}>
    <Text style={{color: 'white', fontSize: 15, fontWeight: '400'}}>
      View Progress
    </Text>
  </View>
</TouchableOpacity>



   </View>  
  )
};

export default DonationPen;
