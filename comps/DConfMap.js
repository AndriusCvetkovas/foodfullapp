import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import styles from '../styles/PostedStyle';
import buttonStyle from '../styles/buttonStyle';
import {Actions} from 'react-native-router-flux';
import LottieView from 'lottie-react-native';

function AcceptedInfo({address, time, date, names}) {
    var addr = address;
    var t = time;
    var d = date;
    var n = names;
    return (
        <View style={{backgroundColor:'#ffffff', flex:1}}>
       
             <LottieView
                source={require('../assets/lottieFiles/checkmark.json')}
                style={{alignSelf: 'center',height:550, width:'90%',}}
                autoPlay
                loop
            />
        <View style={[styles.mainbody, {top: -250}]}>
        <View style={styles.headers}>
              <Text style={[styles.titleHeader, {width: 300, alignSelf: 'center'}]}>You just claimed a donation!</Text>
        </View>

        <View style={styles.contents}>
              <Text style={styles.contentPosts}>This donation is now in a pickup pending state and can be viewed in your pick ups</Text>
        </View>

        <View style = {[styles.containerButton,{top:60}]}>
        <TouchableHighlight style={[styles.buttonContainer, styles.MakePost]} onPress={() => Actions.mapaccept()}>
          <Text style={styles.B1}>Claim another Donation</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.ViewPost]} onPress={() => {Actions.notification1()}}>
          <Text style={styles.B2}>View Pickups</Text>
        </TouchableHighlight>
        </View>

       </View>


   </View>  
            // {/*Button below*/}
            // {/* <TouchableHighlight
            //     title="Accept"
            //     style={buttonStyle.button}
            //     onPress={()=>Actions.mapaccept()}>
            //     <Text
            //         style={{ color: 'white', fontWeight: '500', fontFamily: 'avenir', fontSize: 16 }}
            //     >Claim another Donation</Text>
            // </TouchableHighlight>
            // <TouchableHighlight
            //     title="Accept"
            //     style={buttonStyle.button2}
            //     onPress={()=> Actions.notification1({pickup: 1})}>
            //     <Text
            //         style={{ color: '#0ca3bc', fontWeight: '500', fontFamily: 'avenir', fontSize: 16 }}
            //     >View pickups</Text>
            // </TouchableHighlight> */}
        
    );
};
export default AcceptedInfo;