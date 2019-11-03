import React, {useState} from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import SignUpStyles from '../styles/SignUpStyles'; 
// import {Actions} from 'react-native-router-flux';


function SignUp(){

    //Changing the colour of the option when clicked
    const [optionColor, setOptionColor] = useState(false)

    BGColor = '#606060'
    HeaderColor = "#606060"
    TextColor = "#606060"

    if (optionColor === true) {
        BGColor = '#ffffff'
        HeaderColor = "#0ca3bc"
        TextColor = "#49b204"
    }

    return(
        <View style={SignUpStyles.container}>
            {/* HEADER TEXT */}
            <View style = {SignUpStyles.headerContainer}>
                <Text style ={SignUpStyles.header}>How will you be using Foodfull?</Text>
                <Text style ={SignUpStyles.subheader}>Choose One</Text>
           </View>

        <View style = {SignUpStyles.optionContainer}>
            <View style = {SignUpStyles.MainSignup}>

                 {/* DONATING FOOD BOX */}
                <View style ={[SignUpStyles.option1, {backgroundColor:'#F7F7F7'}]}>
                    <Text style = {{color: '#06a2bc', fontSize: 20, marginLeft:45, fontWeight: '600'}}>Donating Food</Text>
                  
                    <View style = {SignUpStyles.optioninfo}>
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
                {/* END OF DONATING FOOD BOX */}

                {/* /////////////////////////////// */}


                 {/* ACCEPTING FOOD BOX */}

                <View style ={[SignUpStyles.option2, {backgroundColor:'#F7F7F7'}]}>
                    <Text style = {{color: '#606060', fontSize: 20,marginLeft:57,  fontWeight: '600'}}>Accepting Food</Text>
                  
                    <View style = {SignUpStyles.optioninfo}>
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
                 {/* END OF ACCEPTING FOOD BOX */}

            </View>


         {/* NEXT BUTTON*/}
        <View style = {SignUpStyles.buttonContainer}>
        <TouchableHighlight style={SignUpStyles.button} onPress={() => Actions.donationsign()}>
          <Text style={SignUpStyles.buttonText}>Next</Text>
        </TouchableHighlight>

        
        </View>
                 
        </View>

        </View>
        

       
    )
};
export default SignUp;