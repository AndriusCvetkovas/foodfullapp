import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import styles from '../styles/DonatePen';


function Accpending(){
  return (
   <View style={styles.pendingPage}>

<Text style={styles.header}>Your Donation</Text>


       <View style= {styles.pending}>
            <Image
            style={styles.pendingimg}
            source={require('../assets/icon/donate.png')}
            />
            <Text style={styles.titlepen}>Your Donation</Text>
            <Text style={styles.titlepen}>has been posted</Text>
            <Text>When an organiazation claims your food donation, you will be notfied.</Text>
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
      View progress
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
      Make another donation
    </Text>
  </View>
</TouchableOpacity>



   </View>  
  )
};

export default Accpending;
