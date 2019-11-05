import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import SignUpStyles from '../styles/SignUpStyles'; 
// import {Actions} from 'react-native-router-flux';


function SignUp(){

    //Changing the colour of the option when clicked
    const [optionColor1, setOptionColor1] = useState(false)
    const [optionColor2, setOptionColor2] = useState(false);
    function ChangeColor1(){
        setOptionColor1(!optionColor1)
        setOptionColor2(false)
    }
    function ChangeColor2(){
        setOptionColor2(!optionColor2)
        setOptionColor1(false)
    }

    var BGColor1 = 'lightgrey'
    var HeaderColor1 = "#606060"
    var TextColor1 = "#606060"
    var imageUrl1 = require('../assets/icon/donating.png')

    if (optionColor1 === true) {
        BGColor1 = '#ffffff'
        HeaderColor1 = "#0ca3bc"
        TextColor1 = "#49b204"
        imageUrl1 = require('../assets/icon/donating_active.png');
    }
    var BGColor2 = 'lightgrey'
    var HeaderColor2 = "#606060"
    var TextColor2 = "#606060"
    var imageUrl2 = require('../assets/icon/accepting.png')

    if (optionColor2 === true) {
        BGColor2 = '#ffffff'
        HeaderColor2 = "#0ca3bc"
        TextColor2 = "#49b204"
        imageUrl2 = require('../assets/icon/accepting_active.png');
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
                <TouchableOpacity 
                onPress = {()=> ChangeColor1()}
                style ={[SignUpStyles.option1, {backgroundColor:BGColor1}]}>
                    <Text style = {{color: HeaderColor1, fontSize: 20, marginLeft:45, fontWeight: '600'}}>Donating Food</Text>
                  
                    <View style = {SignUpStyles.optioninfo}>
                        <View>
                            <Image
                            style = {{width: 80, height: 70, marginBottom:20, marginLeft:15}}
                            source={imageUrl1}
                            ></Image>
                        </View>

                        <View style = {{margin: 20}}>
                            <Text style = {{color: TextColor1,width: 175, fontSize: 14}}>Grocery store and markets restaurants</Text>  
                        </View>
                    </View>


                </TouchableOpacity>
                {/* END OF DONATING FOOD BOX */}

                {/* /////////////////////////////// */}


                 {/* ACCEPTING FOOD BOX */}

                <TouchableOpacity 
                onPress = {()=> ChangeColor2()}
                style ={[SignUpStyles.option2, {backgroundColor:BGColor2}]}>
                    <Text style = {{color: HeaderColor2, fontSize: 20,marginLeft:57,  fontWeight: '600'}}>Accepting Food</Text>
                  
                    <View style = {SignUpStyles.optioninfo}>
                        <View>
                            <Image
                            style = {{width: 75, height: 70,marginBottom:20, marginLeft:15}}
                            source={imageUrl2}
                            ></Image>
                        </View>

                        <View style = {{margin: 20}}>
                            <Text style = {{color: TextColor2,width: 175, fontSize: 14}}>Food banks, non profit organization and shelters</Text>
                        </View>
                    </View>

                </TouchableOpacity>
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