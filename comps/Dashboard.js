import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import DashStyle from '../styles/dashboardStyle';
// import {Actions} from 'react-native-router-flux';
 
function Dashboard(){
    return(
        <View style = {DashStyle.main}>
            <View style = {DashStyle.pending}>
                {/* title below */}
                <Text
                style= {{color: '#0ca3bc', fontSize: 20, flex: 0.2, margin: 10, padding: 10, fontWeight: '600'}}
                >Upcoming Pick Ups</Text>
                {/* Pending box below */}
                
                <View style = {DashStyle.innerPendingBox} >
                    <View style = {DashStyle.innerPendingBox}>
                        {/* Date bubble below*/}
                        <View style = {DashStyle.dateBubble}>
                            <Text style = {{color: 'white', fontSize: 20}}>10</Text>
                            <Text style = {{color: 'white'}}>Jun</Text>
                        </View>
                        {/*Details below*/}
                        <View style = {DashStyle.pendingDetail}>
                        {/* arrow */}
                        <View>
                            <Image
                                style = {{width:8, height:18, position:'absolute', zIndex:1, right:-50}}
                                source={require('../assets/icon/next.png')}
                            />
                        </View>
                            {/* Foodbank name below*/}
                            <Text style = {{color: '#066a87', fontSize: 18}}>Vancouver Food Bank</Text>
                            {/* time details below*/}
                            <Text style = {{color:'grey'}}>3:00 pm to 7:00 pm</Text>
                        </View>
                    </View>
                </View>

            </View>


            {/* Make a Donation Button */}
            <View style={DashStyle.donateContainer}>
                <Text style={DashStyle.donateText}>Make a Donation</Text>
                {/* arrow */}
                <Image
                    style = {{width:15, height:25, position:'absolute', zIndex:1, right:0, marginRight:15}}
                    source={require('../assets/icon/next.png')}
                />
                <Image
                    style = {{width: '100%', height:'100%', borderRadius: 30}}
                    source={require('../assets/img/makedonation.png')}
                />
            </View>
            {/*//// End of Donation Button ////// */}


            {/*Leaderboard below*/}
            <View style = {DashStyle.leaderBoardMain}>
                <View style = {DashStyle.your}>
                    <Text style = {{color: '#06a2bc', fontSize: 20, fontWeight: '600'}}>Leaderboard</Text>
                    {/*Your Leaderboard below*/}
                    <View style = {DashStyle.innerLeadB}>
                        <View>
                            <Image
                            style = {{width: 100, height: 100, borderRadius: 100, backgroundColor: "#aaaaaa"}}
                            source={require('../assets/img/safeway.jpg')}
                            ></Image>
                        </View>
                        <View style = {{margin: 20}}>
                            <Text style = {{color: '#066a87', fontSize: 18}}>You are in the 2nd place</Text>
                            <Text style = {{color: '#0ca3bc', fontSize: 16}}>40 Donations</Text>
                            <Text style = {{color: '#0ca3bc', fontSize: 16}}>1100 Kg of food</Text>
                        </View>
                    </View>
                </View>


                <View style = {DashStyle.leader}>
                    {/*Scrollable dashboard below*/}
                    <ScrollView>
                        <View style = {DashStyle.leaderDetail}>
                            <Text style = {{padding: 10, color: '#0ca3bc', fontSize: 20}}>1</Text>
                            <Image style = {{margin: 10, width: 50, height: 50, borderRadius: 50, backgroundColor: 'grey'}}
                            source={require('../assets/img/wholefoods.jpg')}>
                            </Image>
                            <View>
                                <View style={{flexDirection:"row"}}>
                                    <Text style = {{color: '#066a87', fontSize: 18}}>
                                    Whole Foods</Text>
                                    <Text style={DashStyle.weight}> 1320 kg</Text>
                                </View>
                                <Text>2465 Willingdon Ave</Text>
                            </View>
                        </View>

                        <View style = {DashStyle.leaderDetail}>
                            <Text style = {{padding: 10, color: '#0ca3bc', fontSize: 20}}>2</Text>
                            <Image 
                            style = {{margin: 10, width: 50, height: 50, borderRadius: 50, backgroundColor: 'grey'}}
                            source={require('../assets/img/safeway.jpg')}>
                            </Image>
                            <View>
                                <View style={{flexDirection:'row'}}>
                                <Text style = {{color: '#066a87', fontSize: 18}}>Safeway Extra</Text>
                                <Text style = {DashStyle.weight}>1100 kg</Text>
                                </View>
                                <Text>2465 Willingdon Ave</Text>
                            </View>
                        </View>

                        <View style = {DashStyle.leaderDetail}>
                            <Text style = {{padding: 10, color: '#0ca3bc', fontSize: 20}}>3</Text>
                            <Image style = {{margin: 10, width: 50, height: 50, borderRadius: 50, backgroundColor: 'grey'}}
                            source={require('../assets/img/freshmarket.jpg')}>

                            </Image>
                            <View>
                                <View style={{flexDirection:'row'}}>
                                    <Text style = {{color: '#066a87', fontSize: 18}}>Fresh Street Market</Text>
                                    <Text style = {DashStyle.weight}>1090 kg</Text>
                                </View>
                                <Text>3267 Surrey</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
};
export default Dashboard;