import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import LeaderboardStyles from '../styles/leaderboardStyle.js';
function Leaderboard(){
    return(
        //Main View
        <View style={LeaderboardStyles.mainView}>
            {/*Your rank below*/}

            <View style={LeaderboardStyles.background}>

            </View>
 

            <View style ={LeaderboardStyles.yourBox}>
                {/*Image box below*/}
                <View style = {LeaderboardStyles.imageBox}>
                    <Image
                    style={LeaderboardStyles.yourImage}
                    source={require('../assets/img/safeway.jpg')}
                     />
                     <Text
                     style = {{color: '#06a2bc', fontSize: 25, flex: 0.6, paddingLeft: 20}}
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

                 {/* 1 */}
                    <View style ={LeaderboardStyles.rankInnerBox}>
                        <Text style={LeaderboardStyles.rankNum}>1</Text>
                        <Image 
                        source = {require('../assets/img/wholefoods.jpg')}
                        style = {LeaderboardStyles.rankImage}
                        />
                        <View style = {LeaderboardStyles.nameAddress}>
                            <Text style ={LeaderboardStyles.rankName}>Whole Foods</Text>
                            <Text style ={LeaderboardStyles.rankAddress}>4420 Lougheed HWY, Burnaby</Text>
                        </View>
                        <Text style ={LeaderboardStyles.rankAmount}>1320 kg</Text>
                    </View>

                    {/* 2 */}
                    <View style ={LeaderboardStyles.rankInnerBox}>
                        <Text style={LeaderboardStyles.rankNum}>2</Text>
                        <Image 
                        source = {require('../assets/img/safeway.jpg')}
                        style = {LeaderboardStyles.rankImage}
                        />
                        <View style = {LeaderboardStyles.nameAddress}>
                            <Text style ={LeaderboardStyles.rankName}>Safeway Extra</Text>
                            <Text style ={LeaderboardStyles.rankAddress}>6153 200 St, Langley</Text>
                        </View>
                        <Text style ={LeaderboardStyles.rankAmount}>1100 kg</Text>
                    </View>

                    {/* 3*/}
                    <View style ={LeaderboardStyles.rankInnerBox}>
                        <Text style={LeaderboardStyles.rankNum}>3</Text>
                        <Image 
                        source = {require('../assets/img/freshmarket.jpg')}
                        style = {LeaderboardStyles.rankImage}
                        />
                        <View style = {LeaderboardStyles.nameAddress}>
                            <Text style ={LeaderboardStyles.rankName}>Fresh Street Market</Text>
                            <Text style ={LeaderboardStyles.rankAddress}>1650 Marine Dr, Vancouver</Text>
                        </View>
                        <Text style ={LeaderboardStyles.rankAmount}>1090 kg</Text>
                    </View>
                    <View style ={LeaderboardStyles.rankInnerBox}>

                    {/* 4 */}
                        <Text style={LeaderboardStyles.rankNum}>4</Text>
                        <Image 
                        source = {require('../assets/img/farmtotable.jpg')}
                        style = {LeaderboardStyles.rankImage}
                        />
                        <View style = {LeaderboardStyles.nameAddress}>
                            <Text style ={LeaderboardStyles.rankName}>Farm to Table</Text>
                            <Text style ={LeaderboardStyles.rankAddress}>1312 Richards St, Vancouver</Text>
                        </View>
                        <Text style ={LeaderboardStyles.rankAmount}>1021 kg</Text>
                    </View>

                    {/* 5 */}
                    <View style ={LeaderboardStyles.rankInnerBox}>
                        <Text style={LeaderboardStyles.rankNum}>5</Text>
                        <Image 
                        source = {require('../assets/img/saveon.jpg')}
                        style = {LeaderboardStyles.rankImage}
                        />
                        <View style = {LeaderboardStyles.nameAddress}>
                            <Text style ={LeaderboardStyles.rankName}>Save-On-Foods</Text>
                            <Text style ={LeaderboardStyles.rankAddress}>1403 E King Edward, Vancouver</Text>
                        </View>
                        <Text style ={LeaderboardStyles.rankAmount}>1004 kg</Text>
                    </View>

                    {/* 6 */}
                    <View style ={LeaderboardStyles.rankInnerBox}>
                        <Text style={LeaderboardStyles.rankNum}>6</Text>
                        <Image 
                        source = {require('../assets/img/wholefoods2.png')}
                        style = {LeaderboardStyles.rankImage}
                        />
                        <View style = {LeaderboardStyles.nameAddress}>
                            <Text style ={LeaderboardStyles.rankName}>Whole Foods</Text>
                            <Text style ={LeaderboardStyles.rankAddress}>510 W 8th, Vancouver</Text>
                        </View>
                        <Text style ={LeaderboardStyles.rankAmount}>1001 kg</Text>
                    </View>

                    {/* 7 */}
                    <View style ={LeaderboardStyles.rankInnerBox}>
                        <Text style={LeaderboardStyles.rankNum}>7</Text>
                        <Image 
                        source = {require('../assets/img/saveon.jpg')}
                        style = {LeaderboardStyles.rankImage}
                        />
                        <View style = {LeaderboardStyles.nameAddress}>
                            <Text style ={LeaderboardStyles.rankName}>Save-On-Foods</Text>
                            <Text style ={LeaderboardStyles.rankAddress}>1403 E King Edward, Vancouver</Text>
                        </View>
                        <Text style ={LeaderboardStyles.rankAmount}>1004 kg</Text>
                    </View>

                    {/* 8 */}
                    <View style ={LeaderboardStyles.rankInnerBox}>
                        <Text style={LeaderboardStyles.rankNum}>8</Text>
                        <Image 
                        source = {require('../assets/img/saveon.jpg')}
                        style = {LeaderboardStyles.rankImage}
                        />
                        <View style = {LeaderboardStyles.nameAddress}>
                            <Text style ={LeaderboardStyles.rankName}>Save-On-Foods</Text>
                            <Text style ={LeaderboardStyles.rankAddress}>1403 E King Edward, Vancouver</Text>
                        </View>
                        <Text style ={LeaderboardStyles.rankAmount}>1004 kg</Text>
                    </View>

                    {/* 9 */}
                    <View style ={LeaderboardStyles.rankInnerBox}>
                        <Text style={LeaderboardStyles.rankNum}>9</Text>
                        <Image 
                        source = {require('../assets/img/saveon.jpg')}
                        style = {LeaderboardStyles.rankImage}
                        />
                        <View style = {LeaderboardStyles.nameAddress}>
                            <Text style ={LeaderboardStyles.rankName}>Save-On-Foods</Text>
                            <Text style ={LeaderboardStyles.rankAddress}>1403 E King Edward, Vancouver</Text>
                        </View>
                        <Text style ={LeaderboardStyles.rankAmount}>1004 kg</Text>
                    </View>

                    {/* 10 */}
                    <View style ={LeaderboardStyles.rankInnerBox}>
                        <Text style={LeaderboardStyles.rankNum}>10</Text>
                        <Image 
                        source = {require('../assets/img/saveon.jpg')}
                        style = {LeaderboardStyles.rankImage}
                        />
                        <View style = {LeaderboardStyles.nameAddress}>
                            <Text style ={LeaderboardStyles.rankName}>Save-On-Foods</Text>
                            <Text style ={LeaderboardStyles.rankAddress}>1403 E King Edward, Vancouver</Text>
                        </View>
                        <Text style ={LeaderboardStyles.rankAmount}>1004 kg</Text>
                    </View>




                </ScrollView>
            </View>
        </View>
    )
};
export default Leaderboard;