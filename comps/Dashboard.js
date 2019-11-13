import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import DashStyle from '../styles/dashboardStyle';
import { Actions } from 'react-native-router-flux';
// import {Actions} from 'react-native-router-flux';
 
function Dashboard(){
    return(
        <View style={DashStyle.main}>

        {/* BACKGROUND IMAGE AND DONATE BUTTON */}
        <View style={DashStyle.backgroundImg}>
            <Image style={{width:'100%',height:420, position:'absolute'}}
             source={require('../assets/img/dashboard_illustration.png')}>
            </Image>

            <View style={{justifyContent:'center', alignItems:'center', marginLeft:100}}>
                <Text style={DashStyle.header}>Let's Make a Change</Text>
                <TouchableOpacity
                style={DashStyle.donateButton}
                onPress={()=> Actions.postdonation()}>
                <Text style={DashStyle.donateButtonText}>Donate</Text>
            </TouchableOpacity>
            </View>
        </View>

       
        {/*LEADERBOARD/"YOU ARE IN 2ND PLACE"*/}
        <View style={DashStyle.leaderBoardMain}>
            <View style={DashStyle.your}>
                <View style={DashStyle.innerLeadB}>
                    <View>
                        <Image
                            style={{ width: 95, height: 95, borderRadius: 100, backgroundColor: "#aaaaaa",left:-8 }}
                            source={require('../assets/img/safeway.jpg')}
                        ></Image>
                    </View>
                    <View style={{ margin: 20 }}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Text style={{color: '#01657c', fontSize: 20, marginBottom: 5, fontFamily:'Avenir', fontWeight:'600' }}>You are in </Text>
                            <Text style={{color: '#0ca3bc', fontSize: 23, marginBottom: 5, fontFamily:'Avenir', fontWeight:'800'}}>2nd </Text>
                            <Text style={{color: '#01657c', fontSize: 20, marginBottom: 5, fontFamily:'Avenir', fontWeight:'600'}}>place</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style = {{color: '#0ca3bc', fontSize: 18, marginRight:15}}>40 Donations</Text>
                            <Text style = {{color: '#A4D638', fontSize: 18, fontFamily:'Avenir', fontWeight:'800'}}>1100 Kg</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                    <Image style={{width:15,height:20, position:'absolute', top:-10}}
                     source={require('../assets/icon/next.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>


        {/*UPCOMING SCHEDULE*/}
                 {/* container to hold the notifications */}
        <View style={DashStyle.notifContainer}>
        <Text style={DashStyle.title}>Upcoming Donations</Text>
        <ScrollView style={{width:'90%'}}>
            {/* Date with line */}
        <View style={{left:0, flexDirection:'row', alignItems:'center', marginBottom:20}}>
            <Text style={DashStyle.dateTitle}>Today</Text>
            <View style={DashStyle.line}></View>
        </View>

        <View style={{marginBottom:15}}>
            <View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <View style={DashStyle.dateCircle}>
                    </View>
                    <View>
                        <Text style={{fontSize:20, fontFamily:'avenir', fontWeight:'500'}}>Vancouver Food Bank</Text>
                        <Text>3:00 pm</Text>
                    </View>
                </View>
            </View>
        </View>

        <View style={{marginBottom:10}}>
            <View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <View style={DashStyle.dateCircle}>
                    </View>
                    <View>
                        <Text style={{fontSize:20, fontFamily:'avenir', fontWeight:'500'}}>Vancouver Food Bank</Text>
                        <Text>3:00 pm</Text>
                    </View>
                </View>
            </View>
        </View>

        <View style={{marginBottom:10}}>
            <View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <View style={DashStyle.dateCircle}>
                    </View>
                    <View>
                        <Text style={{fontSize:20, fontFamily:'avenir', fontWeight:'500'}}>Vancouver Food Bank</Text>
                        <Text>3:00 pm</Text>
                    </View>
                </View>
            </View>
        </View>

        {/* Date with line */}
        <View style={{left:0, flexDirection:'row', alignItems:'center', marginBottom:20, marginTop:10}}>
            <Text style={DashStyle.dateTitle}>Wednesday</Text>
            <View style={DashStyle.line}></View>
        </View>
        <View style={{marginBottom:10}}>
            <View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <View style={DashStyle.dateCircle}>
                    </View>
                    <View>
                        <Text style={{fontSize:20, fontFamily:'avenir', fontWeight:'500'}}>Vancouver Food Bank</Text>
                        <Text>3:00 pm</Text>
                    </View>
                </View>
            </View>
        </View>

        </ScrollView>
        </View>



    </View>
)};
    export default Dashboard;
    
//         <View style = {DashStyle.main}>
//             <View style = {DashStyle.pending}>
//                 {/* title below */}
//                 <TouchableOpacity style={{flex:1}}>
//                     <Text
//                     style= {{color: '#0ca3bc', fontSize: 20, flex: 0.2, margin: 10, padding: 10, fontWeight: '600'}}
//                     >Upcoming Pick Ups</Text>
//                     </TouchableOpacity>
//                 {/* Pending box below */}
//             </View>
            

//             {/* Make a Donation Button */}
//             <View style={DashStyle.donateContainer}>
//                 <TouchableOpacity style={{justifyContent:'center'}} onPress={()=> Actions.postdonation()}>
//                 <Text style={DashStyle.donateText}>Make a Donation</Text>
//                 {/* arrow */}
//                 <Image
//                     style = {{width:15, height:25, position:'absolute', zIndex:1, right:0, marginRight:15}}
//                     source={require('../assets/icon/next.png')}
//                 />
//                 <Image
//                     style = {{width: '100%', height:'100%', borderRadius: 30}}
//                     source={require('../assets/img/makedonation.png')}
//                 />
//                 </TouchableOpacity>
//             </View>
//             {/*//// End of Donation Button ////// */}


//             {/*Leaderboard below*/}
//             <View style = {DashStyle.leaderBoardMain}>
//                 <View style = {DashStyle.your}>
//                     <Text style = {{color: '#06a2bc', fontSize: 20, fontWeight: '600'}}>Leaderboard</Text>
//                     {/*Your Leaderboard below*/}
//                     <View style = {DashStyle.innerLeadB}>
//                         <View>
//                             <Image
//                             style = {{width: 90, height: 90, borderRadius: 100, backgroundColor: "#aaaaaa"}}
//                             source={require('../assets/img/safeway.jpg')}
//                             ></Image>
//                         </View>
//                         <View style = {{margin: 20}}>
//                             <Text style = {{color: '#066a87', fontSize: 18, marginBottom:5}}>You are in 2nd place</Text>

//                             <Text style = {{color: '#0ca3bc', fontSize: 16}}>40 Donations</Text>
//                             <Text style = {{color: '#A4D638', fontSize: 18, fontFamily:'Avenir', fontWeight:'500'}}>1100 Kg</Text>
//                         </View>
//                     </View>
//                 </View>

//                 {/*Scrollable LEADERBOARD below*/}
//                 <View style = {DashStyle.leader}>
//                     <ScrollView>
//                     {/* 1 */}
//                         <View style = {DashStyle.leaderDetail}>
//                             <Text style={DashStyle.ranking}>1</Text>
//                             <Image style = {{margin: 10, width: 50, height: 50, borderRadius: 50, backgroundColor: 'grey'}}
//                             source={require('../assets/img/wholefoods.jpg')}>
//                             </Image>
//                             <View style ={{flex: 1}}>
//                                 <View style={{flexDirection:"row"}}>
//                                     <Text style={DashStyle.leaderName}>
//                                     Whole Foods</Text>
//                                     <Text style={DashStyle.weight}> 1320 kg</Text>
//                                 </View>
//                                 <Text style={DashStyle.location}>4420 Lougheed HWY, Burnaby</Text>
//                             </View>
//                         </View>

//                     {/* 2*/}
//                         <View style = {DashStyle.leaderDetail}>
//                             <Text style={DashStyle.ranking}>2</Text>
//                             <Image 
//                             style = {{margin: 10, width: 50, height: 50, borderRadius: 50}}
//                             source={require('../assets/img/safeway.jpg')}>
//                             </Image>
//                             <View style ={{flex: 1}}>
//                                 <View style={{flexDirection:'row'}}>
//                                 <Text style={DashStyle.leaderName}>Safeway Extra</Text>
//                                 <Text style = {DashStyle.weight}>1100 kg</Text>
//                                 </View>
//                                 <Text style={DashStyle.location}>6153 200 St, Langley</Text>
//                             </View>
//                         </View>

//                     {/* 3*/}
//                         <View style = {DashStyle.leaderDetail}>
//                             <Text style={DashStyle.ranking}>3</Text>
//                             <Image style = {{margin: 10, width: 50, height: 50, borderRadius: 50, backgroundColor: 'grey'}}
//                             source={require('../assets/img/freshmarket.jpg')}>

//                             </Image>
//                             <View style ={{flex: 1}}>
//                                 <View style={{flexDirection:'row'}}>
//                                     <Text style={DashStyle.leaderName}>Fresh Street Market</Text>
//                                     <Text style = {DashStyle.weight}>1090 kg</Text>
//                                 </View>
//                                 <Text style={DashStyle.location}>1650 Marine Dr, Vancouver</Text>
//                             </View>
//                         </View>

//                     {/* 4*/}
//                         <View style = {DashStyle.leaderDetail}>
//                             <Text style={DashStyle.ranking}>4</Text>
//                             <Image style = {{margin: 10, width: 50, height: 50, borderRadius: 50, backgroundColor: 'grey'}}
//                             source={require('../assets/img/freshmarket.jpg')}>

//                             </Image>
//                             <View style ={{flex: 1}}>
//                                 <View style={{flexDirection:'row'}}>
//                                     <Text style={DashStyle.leaderName}>Farm to Table</Text>
//                                     <Text style = {DashStyle.weight}>1021 kg</Text>
//                                 </View>
//                                 <Text style={DashStyle.location}>1312 Richards St, Vancouver</Text>
//                             </View>
//                         </View>

//                     {/* 5*/}
//                         <View style = {DashStyle.leaderDetail}>
//                             <Text style={DashStyle.ranking}>5</Text>
//                             <Image style = {{margin: 10, width: 50, height: 50, borderRadius: 50, backgroundColor: 'grey'}}
//                             source={require('../assets/img/freshmarket.jpg')}>

//                             </Image>
//                             <View style ={{flex: 1}}>
//                                 <View style={{flexDirection:'row'}}>
//                                     <Text style={DashStyle.leaderName}>Save-On-Foods</Text>
//                                     <Text style = {DashStyle.weight}>1004 kg</Text>
//                                 </View>
//                                 <Text style={DashStyle.location}>1403 E King Edward, Vancouver</Text>
//                             </View>
//                         </View>





//                     </ScrollView>
//                 </View>
//             </View>
//         </View>
//     )
// };
//export default Dashboard;