import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ChooseDonationStyle from '../../styles/ChooseDonationStyle';
import LottieView from 'lottie-react-native';

function ChooseDonation(){
  const [donationType, setDonationType] = useState();
  const [optionColor1, setOptionColor1] = useState(false);
  const [optionColor2, setOptionColor2] = useState(false);
  
  const changePage = () => {
    Actions.postdonation({dType: donationType});
  }
  function ChangeColor1() {
    setOptionColor1(!optionColor1);
    setOptionColor2(false);
    setDonationType(0);
    
  }
  function ChangeColor2() {
    setOptionColor2(!optionColor2);
    setOptionColor1(false);
    setDonationType(1)
    
  }

  var BGColor1 = '#F4F5F7';
  var HeaderColor1 = '#606060';
  var TextColor1 = '#606060';
  var imageUrl1 = require('../../assets/icon/public.png');
  var ShadowColor1 = '#9B9EA3';
  var ShadowOpacity1 = 0;
  var imageDisplay = 'none';

  //Next Button
  var ButtonColor = '#EDEDEF';
  var ButtonBorder = '#EDEDEF';
  var ButtonText = '#606060';


  var hidepublic =<Image
    style = {ChooseDonationStyle.optionImage}
    source = {imageUrl1}
    />;


  if (optionColor1 === true) {
    BGColor1 = '#ffffff';
    HeaderColor1 = '#0ca3bc';
    TextColor1 = '#49b204';
    ShadowColor1 = '#0ca3bc';
    ShadowOpacity1 = 0.15;
    ButtonColor = '#0ca3bc';
    ButtonBorder = '#0ca3bc';
    ButtonText = '#ffffff';
    hidepublic = <LottieView
        source={require('../../assets/lottieFiles/public_active.json')}
        style={{ width: 105, height: 120, marginBottom:55,left:-5.5, marginRight:-5}}
        autoPlay
        loop
    />
  }

  var BGColor2 = '#F4F5F7';
  var HeaderColor2 = '#606060';
  var TextColor2 = '#606060';
  var imageUrl2 = require('../../assets/icon/private.png');
  var ShadowColor2 = '#9B9EA3';
  var ShadowOpacity2 = 0;

  var hideprivate =<Image
  style = {ChooseDonationStyle.optionImage}
  source = {imageUrl2}
  />;

  if (optionColor2 === true) {
    BGColor2 = '#ffffff';
    HeaderColor2 = '#0ca3bc';
    TextColor2 = '#49b204';
    ShadowColor2 = '#0ca3bc';
    ShadowOpacity2 = 0.15;
    ButtonColor = '#34a3bd';
    ButtonBorder = '#0ca3bc';
    ButtonText = '#ffffff';
    hideprivate = <LottieView
    source={require('../../assets/lottieFiles/private_active.json')}
    style={{ width: 105, height: 122, marginBottom:53,left:-4, marginRight:-5}}
    autoPlay
    loop
/>
    
  }
  
    
    return(
        <View style = {ChooseDonationStyle.backgroundView}>
            <View style = {ChooseDonationStyle.titleContainer}>
                <Text style = {ChooseDonationStyle.title}>Choose your type of donation</Text>
            </View>

            <View style = {ChooseDonationStyle.optionsContainer}>
                <TouchableOpacity style = {[ChooseDonationStyle.optionOne,{
                    backgroundColor: BGColor1,
                    shadowColor: ShadowColor1,
                    shadowOpacity: ShadowOpacity1,}]}
                onPress={() => ChangeColor1()}
                >
                    <Text style = {[ChooseDonationStyle.optionTitle, {color: HeaderColor1}]}>
                        Public
                    </Text>

                    <View style ={ChooseDonationStyle.optionInfo}>
                    
                        {hidepublic}
                        

                        <Text style = {[ChooseDonationStyle.optionDescription, {color: TextColor1}]}>
                            Post your donation publicly for organizations to claim it. 
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style = {[ChooseDonationStyle.optionOne,{
                    backgroundColor: BGColor2,
                    shadowColor: ShadowColor2,
                    shadowOpacity: ShadowOpacity2,}]}
                onPress={() => ChangeColor2()}
                >
                    <Text style = {[ChooseDonationStyle.optionTitle, {color: HeaderColor2}]}>
                        Private
                    </Text>

                    <View style ={ChooseDonationStyle.optionInfo}>
                    {hideprivate}

                        <Text style = {[ChooseDonationStyle.optionDescription, {color: TextColor2, top:-10}]}>
                            Choose the organization you'd like to donate to.
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={ChooseDonationStyle.buttonContainer}>
                <TouchableOpacity
                    style={[
                    ChooseDonationStyle.button,
                    {borderColor: ButtonBorder, backgroundColor: ButtonColor}
                    ]}
                    onPress={()=>{changePage()}}>
                    <Text style={[ChooseDonationStyle.buttonText, {color: ButtonText}]}>
                    Next
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default ChooseDonation;