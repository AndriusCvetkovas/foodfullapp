import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import styles from '../../styles/PostedStyle';
import {Actions} from 'react-native-router-flux';
import LottieView from 'lottie-react-native';

function AcceptedInfo({address, time, date, names}) {
    var addr = address;
    var t = time;
    var d = date;
    var n = names;
    return (
        <View style={{backgroundColor:'#ffffff', flex:1}}>
             {/* <LottieView
                source={require('../assets/lottieFiles/checkmark.json')}
                style={{alignSelf: 'center',height:550, width:'80%', top:0}}
              
            /> */}
            <Image
            style= {{ width: 100, height: 100, alignSelf: 'center', top: 170}}
            source = {require('../../assets/icon/checkmark.png')}>

            </Image>
        <View style={[styles.mainbody, {top: 200}]}>
        <View style={styles.headers}>
              <Text style={[styles.titleHeader, {width: 400, alignSelf: 'center'}]}>You Claimed a Donation!</Text>
        </View>

        <View style={styles.contents}>
              <Text style={[styles.contentPosts, {top:-30, width:300}]}>This food donation is now yours, and the donating organization will be expecting you.</Text>
        </View>

        <View style = {[styles.containerButton,{top:20}]}>
        <TouchableHighlight style={[styles.buttonContainer, styles.MakePost]} onPress={() => Actions.mapaccept()}>
          <Text style={styles.B1}>Claim More</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.ViewPost, {top: 20}]} onPress={() => {Actions.notification1()}}>
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