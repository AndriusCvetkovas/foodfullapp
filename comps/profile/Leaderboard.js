import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import LeaderboardStyles from '../../styles/leaderboardStyle.js';
function Leaderboard({names, address}){
    return(
        //Main View
        <View style={LeaderboardStyles.mainView}> 
            {/*Your rank below*/}

            <View style={LeaderboardStyles.background}>
            <Image style ={{width:'100%', height:'100%',}}
                    source={require('../../assets/img/blue_background.png')}/>
            </View>
 
             {/*Image box below*/}
            <View style ={LeaderboardStyles.yourBox}>
                <View style = {LeaderboardStyles.imageBox}>
                    <Image
                        style={LeaderboardStyles.yourImage}
                        source={{uri: `https://foodfull.s3-us-west-2.amazonaws.com/avatar0.jpg`}}
                     />
                     
                </View>

            {/*Stats/ your info below*/}
                <View style = {LeaderboardStyles.yourStats}>
                <View style={{ margin: 5 }}>
                            <View style={{ flexDirection: 'row', alignItems:'center' }}>
                                <Text style={LeaderboardStyles.title}>You are in </Text>
                                <Text style={{ color: '#0ca3bc', fontSize: 23, marginBottom: 5, fontFamily: 'Avenir', fontWeight: '800' }}>2nd </Text>
                                <Text style={LeaderboardStyles.title}>place</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#0ca3bc', fontSize: 18, marginRight: 15 }}>40 Donations</Text>
                                <Text style={{ color: '#A4D638', fontSize: 18, fontFamily: 'Avenir', fontWeight: '800' }}>1100 Kg</Text>
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
                        source = {require('../../assets/img/wholefoods.jpg')}
                        style = {LeaderboardStyles.rankImage}
                        />
                        <View style = {LeaderboardStyles.nameAddress}>
                            <Text style ={LeaderboardStyles.rankName}>Whole Foods</Text>
                            <Text style ={LeaderboardStyles.rankAddress}>4420 Lougheed HWY, Burnaby</Text>
                        </View>
                        <Text style ={LeaderboardStyles.rankAmount}>1320 kg</Text>
                    </View>

                    {/* 2 YOU*/}
                    {/* Need to highlight your ranking, based on leaderboard calculations = light blue */}
                    <View style ={[LeaderboardStyles.rankInnerBox,{backgroundColor: "rgba(19,191,209,0.07)"}]}>
                        <Text style={LeaderboardStyles.rankNum}>2</Text>
                        <Image 
                        source = {{uri: `https://foodfull.s3-us-west-2.amazonaws.com/avatar0.jpg`}}
                        style = {LeaderboardStyles.rankImage}
                        />
                        <View style = {LeaderboardStyles.nameAddress}>
                            <Text style ={LeaderboardStyles.rankName}>{names}</Text>
                            <Text style ={LeaderboardStyles.rankAddress}>{address}</Text>
                        </View>
                        <Text style ={LeaderboardStyles.rankAmount}>1100 kg</Text>
                    </View>

                    {/* 3*/}
                    <View style ={LeaderboardStyles.rankInnerBox}>
                        <Text style={LeaderboardStyles.rankNum}>3</Text>
                        <Image 
                        source = {require('../../assets/img/freshmarket.jpg')}
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
                        source = {require('../../assets/img/farmtotable.jpg')}
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
                        source = {require('../../assets/img/saveon.jpg')}
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
                        source = {require('../../assets/img/wholefoods2.png')}
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
                        source = {require('../../assets/img/nesters.jpg')}
                        style = {LeaderboardStyles.rankImage}
                        />
                        <View style = {LeaderboardStyles.nameAddress}>
                            <Text style ={LeaderboardStyles.rankName}>Nesters Market</Text>
                            <Text style ={LeaderboardStyles.rankAddress}>990 Seymour St</Text>
                        </View>
                        <Text style ={LeaderboardStyles.rankAmount}>1000 kg</Text>
                    </View>

                    {/* 8 */}
                    <View style ={LeaderboardStyles.rankInnerBox}>
                        <Text style={LeaderboardStyles.rankNum}>8</Text>
                        <Image 
                        source = {require('../../assets/img/famous.jpg')}
                        style = {LeaderboardStyles.rankImage}
                        />
                        <View style = {LeaderboardStyles.nameAddress}>
                            <Text style ={LeaderboardStyles.rankName}>Famous Foods</Text>
                            <Text style ={LeaderboardStyles.rankAddress}>1595 Kingsway</Text>
                        </View>
                        <Text style ={LeaderboardStyles.rankAmount}>940 kg</Text>
                    </View>

                    {/* 9 */}
                    <View style ={LeaderboardStyles.rankInnerBox}>
                        <Text style={LeaderboardStyles.rankNum}>9</Text>
                        <Image 
                        source = {require('../../assets/img/sunrise.jpg')}
                        style = {LeaderboardStyles.rankImage}
                        />
                        <View style = {LeaderboardStyles.nameAddress}>
                            <Text style ={LeaderboardStyles.rankName}>Sunrise Market</Text>
                            <Text style ={LeaderboardStyles.rankAddress}>300 Powell St, Vancouver</Text>
                        </View>
                        <Text style ={LeaderboardStyles.rankAmount}>935 kg</Text>
                    </View>

                    {/* 10 */}
                    <View style ={LeaderboardStyles.rankInnerBox}>
                        <Text style={LeaderboardStyles.rankNum}>10</Text>
                        <Image 
                        source = {require('../../assets/img/iga.jpg')}
                        style = {LeaderboardStyles.rankImage}
                        />
                        <View style = {LeaderboardStyles.nameAddress}>
                            <Text style ={LeaderboardStyles.rankName}>IGA</Text>
                            <Text style ={LeaderboardStyles.rankAddress}>3515 W 4th Ave, Vancouver,</Text>
                        </View>
                        <Text style ={LeaderboardStyles.rankAmount}>836 kg</Text>
                    </View>




                </ScrollView>
            </View>
        </View>
    )
};
export default Leaderboard;