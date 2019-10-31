import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import SignUpStyles from '../styles/SignUpStyles';

function SignUp(){
    return(

      
        

        <View style = {SignUpStyles.containerSign}>

        <View style = {SignUpStyles.containerHeader}>
             <Text style ={SignUpStyles.titlepen}>How will you use Foodfull?</Text>
            <Text style ={SignUpStyles.titlepen}>Choose one</Text>
        </View>

            <View style = {SignUpStyles.MainSignup}>
                <View style = {SignUpStyles.box}>
                    <Text style = {{color: '#06a2bc', fontSize: 20,marginLeft:45, fontWeight: '600'}}>Donating Food</Text>
                  
                    <View style = {SignUpStyles.accpContianer}>
                        <View>
                            <Image
                            style = {{width: 70, height: 70, marginBottom:20, marginLeft:15, borderRadius: 100, backgroundColor: "#add254"}}
                            ></Image>
                        </View>
                        <View style = {{margin: 20}}>
                            <Text style = {{color: '#add254',width: 175, fontSize: 14}}>Grocery store and markets restruants</Text>
                            
                            
                        </View>
                    </View>
                </View>

                <View style = {SignUpStyles.box}>
                    <Text style = {{color: '#06a2bc', fontSize: 20,marginLeft:57,  fontWeight: '600'}}>Accepting Food</Text>
                  
                    <View style = {SignUpStyles.accpContianer}>
                        <View>
                            <Image
                            style = {{width: 70, height: 70,marginBottom:20, marginLeft:15, borderRadius: 100, backgroundColor: "#add254"}}
                            ></Image>
                        </View>
                        <View style = {{margin: 20}}>
                            <Text style = {{color: '#add254',width: 175, fontSize: 14}}>Food banks, non profit organization and shelthers</Text>
                           
                            
                        </View>
                    </View>
                </View>

                 </View>

        <View style = {SignUpStyles.containerButton}>
        <TouchableHighlight style={[SignUpStyles.buttonContainer, SignUpStyles.signupButton]} onPress={() => this.onClickListener('sign_up')}>
          <Text style={SignUpStyles.signUpText}>Next</Text>
        </TouchableHighlight>
        </View>
                 
        </View>

        

       
    )
};
export default SignUp;