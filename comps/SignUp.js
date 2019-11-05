import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import SignUpStyles from '../styles/SignUpStyles';
import {Actions} from 'react-native-router-flux';
function SignUp(){


    return(
        <View style = {SignUpStyles.containerSign}>

        <View style = {SignUpStyles.containerHeader}>
             <Text style ={SignUpStyles.header}>How will you be using Foodfull?</Text>
            <Text style ={SignUpStyles.titlepen}>Choose one</Text>
        </View>

            <View style = {SignUpStyles.MainSignup}>
                <View style = {SignUpStyles.activebox}>
                    <Text style = {{color: '#06a2bc', fontSize: 20,marginLeft:45, fontWeight: '600'}}>Donating Food</Text>
                  
                    <View style = {SignUpStyles.accpContianer}>
                        <View>
                            <Image
                            style = {{width: 80, height: 70, marginBottom:20, marginLeft:15}}
                            source={require('../assets/icon/donating_active.png')}
                            ></Image>
                        </View>
                        <View style = {{margin: 20}}>
                            <Text style = {{color: '#49b204',width: 175, fontSize: 14}}>Grocery store and markets restaurants</Text>
                            
                            
                        </View>
                    </View>
                </View>

                <View style = {SignUpStyles.greybox}>
                    <Text style = {{color: '#606060', fontSize: 20,marginLeft:57,  fontWeight: '600'}}>Accepting Food</Text>
                  
                    <View style = {SignUpStyles.accpContianer}>
                        <View>
                            <Image
                            style = {{width: 75, height: 70,marginBottom:20, marginLeft:15}}
                            source={require('../assets/icon/accepting.png')}
                            ></Image>
                        </View>
                        <View style = {{margin: 20}}>
                            <Text style = {{color: '#606060',width: 175, fontSize: 14}}>Food banks, non profit organization and shelters</Text>
                           
                            
                        </View>
                    </View>
                </View>

                 </View>

        <View style = {SignUpStyles.containerButton}>
        <TouchableHighlight style={[SignUpStyles.buttonContainer, SignUpStyles.signupButton]} onPress={() => Actions.donationsign()}>
          <Text style={SignUpStyles.signUpText}>Next</Text>
        </TouchableHighlight>
        </View>
                 
        </View>

        

       
    )
};
export default SignUp;