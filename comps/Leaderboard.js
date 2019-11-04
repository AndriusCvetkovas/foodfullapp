import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import LeaderboardStyles from '../styles/leaderboardStyle.js';
function Leaderboard(){
    return(
        //Main View
        <View style={LeaderboardStyles.mainView}>
            {/*Your rank below*/}
            <View style ={LeaderboardStyles.yourBox}>
                {/*Image box below*/}
                <View style = {LeaderboardStyles.imageBox}>
                    <Image
                    style={LeaderboardStyles.yourImage}
                    source={require('../assets/img/safeway.jpg')}
                     />
                     <Text
                     style = {{color: '#06a2bc', fontSize: 30, flex: 0.6, paddingLeft: 20}}
                     >2nd</Text>
                </View>
                {/*Stats below*/}
                <View style = {LeaderboardStyles.yourStats}>
                    <View style = {LeaderboardStyles.innerYourStats}>
                        <Image
                        source={require('../assets/icon/donating_active.png')}
                        style= {{width: 25, height: 25, flex: 0.2}}
                        />
                        <View style = {{flex: 0.4, marginLeft: 15}}>
                            <Text style ={{textAlign: 'center', color: '#c3de95', fontWeight: '700', fontSize: 15}}>1100 kg</Text>
                            <Text style ={{textAlign: 'center', fontSize: 12}}>of Food</Text>
                        </View>
                    </View>
                    <View style = {LeaderboardStyles.innerYourStats}>
                        <Image
                        source={require('../assets/icon/donating_active.png')}
                        style= {{width: 25, height: 25, flex: 0.2}}
                        />
                        <View style = {{flex: 0.4, marginLeft: 15}}>
                            <Text style ={{textAlign: 'center', color: '#ef9b23', fontWeight: '700', fontSize: 15}}>40</Text>
                            <Text style ={{textAlign: 'center', fontSize: 12}}>Donations</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/*Leaderboard scrollview below*/}
            <View style ={LeaderboardStyles.rankBox}>
                <ScrollView>
                    <View style ={LeaderboardStyles.rankInnerBox}>
                        <Text style={LeaderboardStyles.rankNum}>1</Text>
                        <Image 
                        source = {require('../assets/img/wholefoods.jpg')}
                        style = {LeaderboardStyles.rankImage}
                        />
                        <View style = {LeaderboardStyles.nameAddress}>
                            <Text style ={LeaderboardStyles.rankName}>Whole Foods</Text>
                            <Text style ={LeaderboardStyles.rankAddress}>2465 Willingdon Ave</Text>
                        </View>
                        <Text style ={LeaderboardStyles.rankAmount}>1320 kg</Text>
                    </View>
                    <View style ={LeaderboardStyles.rankInnerBox}>
                        <Text style={LeaderboardStyles.rankNum}>2</Text>
                        <Image 
                        source = {require('../assets/img/safeway.jpg')}
                        style = {LeaderboardStyles.rankImage}
                        />
                        <View style = {LeaderboardStyles.nameAddress}>
                            <Text style ={LeaderboardStyles.rankName}>Safeway</Text>
                            <Text style ={LeaderboardStyles.rankAddress}>2465 Willingdon Ave</Text>
                        </View>
                        <Text style ={LeaderboardStyles.rankAmount}>1220 kg</Text>
                    </View>
                    <View style ={LeaderboardStyles.rankInnerBox}>
                        <Text style={LeaderboardStyles.rankNum}>3</Text>
                        <Image 
                        source = {require('../assets/img/wholefoods.jpg')}
                        style = {LeaderboardStyles.rankImage}
                        />
                        <View style = {LeaderboardStyles.nameAddress}>
                            <Text style ={LeaderboardStyles.rankName}>Whole Foods</Text>
                            <Text style ={LeaderboardStyles.rankAddress}>2465 Willingdon Ave</Text>
                        </View>
                        <Text style ={LeaderboardStyles.rankAmount}>1320 kg</Text>
                    </View>
                    <View style ={LeaderboardStyles.rankInnerBox}>
                        <Text style={LeaderboardStyles.rankNum}>4</Text>
                        <Image 
                        source = {require('../assets/img/wholefoods.jpg')}
                        style = {LeaderboardStyles.rankImage}
                        />
                        <View style = {LeaderboardStyles.nameAddress}>
                            <Text style ={LeaderboardStyles.rankName}>Whole Foods</Text>
                            <Text style ={LeaderboardStyles.rankAddress}>2465 Willingdon Ave</Text>
                        </View>
                        <Text style ={LeaderboardStyles.rankAmount}>1320 kg</Text>
                    </View>
                    <View style ={LeaderboardStyles.rankInnerBox}>
                        <Text style={LeaderboardStyles.rankNum}>5</Text>
                        <Image 
                        source = {require('../assets/img/wholefoods.jpg')}
                        style = {LeaderboardStyles.rankImage}
                        />
                        <View style = {LeaderboardStyles.nameAddress}>
                            <Text style ={LeaderboardStyles.rankName}>Whole Foods</Text>
                            <Text style ={LeaderboardStyles.rankAddress}>2465 Willingdon Ave</Text>
                        </View>
                        <Text style ={LeaderboardStyles.rankAmount}>1320 kg</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
};
export default Leaderboard;