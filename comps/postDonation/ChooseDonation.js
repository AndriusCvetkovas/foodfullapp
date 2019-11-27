import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ChooseDonationStyle from '../../styles/ChooseDonationStyle';

function ChooseDonation(){
    return(
        <View style = {ChooseDonationStyle.backgroundView}>
            <View style = {ChooseDonationStyle.titleContainer}>
                <Text style = {ChooseDonationStyle.title}>Choose your type of donation</Text>
            </View>

            <TouchableOpacity style = {ChooseDonationStyle.optionOne}>
                <Image
                style = {ChooseDonationStyle.optionImage}
                source = {require('../../assets/icon')}
                />
                <View>
                    <Text>

                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style = {ChooseDonationStyle.optionTwo}>

            </TouchableOpacity>
            
            <TouchableOpacity>

            </TouchableOpacity>
        </View>
    );
};
export default ChooseDonation;