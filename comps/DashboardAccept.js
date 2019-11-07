import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import DashStyle from '../styles/dashboardAcceptStyle';
 
function DashboardAccept(){
    return(
             <View style = {DashStyle.main}>

                <View style={DashStyle.findDonation}>
                <Text style={DashStyle.findText}>Find Donations</Text>
                <Image
                    style = {{width:15, height:25, position:'absolute', zIndex:1, right:0, marginRight:15}}
                    source={require('../assets/icon/next.png')}
                />
                <Image
                    style = {{width: '100%', height:110, borderRadius: 30}}
                    source={require('../assets/img/claimdonation.png')}
                />
            </View>

            <View style = {DashStyle.pending}>
                {/* title below */}
                <Text
                style= {{color: '#0CA3BC', fontSize: 20, flex: 0.2, margin: 10, padding: 10, fontFamily:'Avenir', fontWeight:'800'}}
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
                                {/* Foodbank name below*/}
                                <Text style = {{color: '#066a87', fontSize: 18}}>Vancouver Food Bank</Text>
                                {/* time details below*/}
                                <Text style = {{color:'grey'}}>3:00 pm to 7:00 pm</Text>
                            </View>
                        </View>
                    </View>
                    <View style = {DashStyle.innerPendingBox} >
                        <View style = {DashStyle.innerPendingBox}>
                            {/* Date bubble below*/}
                            <View style = {DashStyle.dateBubble}>
                                <Text style = {{color: 'white', fontSize: 20}}>10</Text>
                                <Text style = {{color: 'white'}}>Jun</Text>
                            </View>
                            {/*Details below*/}
                            <View style = {DashStyle.pendingDetail}>
                                {/* Foodbank name below*/}
                                <Text style = {{color: '#066a87', fontSize: 18}}>Vancouver Food Bank</Text>
                                {/* time details below*/}
                                <Text style = {{color:'grey'}}>3:00 pm to 7:00 pm</Text>
                            </View>
                        </View>
                    </View>
                    <View style = {DashStyle.innerPendingBox} >
                        <View style = {DashStyle.innerPendingBox}>
                            {/* Date bubble below*/}
                            <View style = {DashStyle.dateBubble}>
                                <Text style = {{color: 'white', fontSize: 20}}>10</Text>
                                <Text style = {{color: 'white'}}>Jun</Text>
                            </View>
                            {/*Details below*/}
                            <View style = {DashStyle.pendingDetail}>
                                {/* Foodbank name below*/}
                                <Text style = {{color: '#066a87', fontSize: 18}}>Vancouver Food Bank</Text>
                                {/* time details below*/}
                                <Text style = {{color:'grey'}}>3:00 pm to 7:00 pm</Text>
                            </View>
                        </View>
                    </View>
            </View>


            <View style = {DashStyle.pending}>
                {/* title below */}
                <Text
                style= {{color: '#A4D638', fontSize: 20, flex: 0.2, margin: 10, padding: 10, fontFamily:'Avenir', fontWeight:'800'}}
                >Donation Requests</Text>
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
                            {/* Foodbank name below*/}
                            <Text style = {{color: '#066a87', fontSize: 18}}>Vancouver Food Bank</Text>
                            {/* time details below*/}
                            <Text style = {{color:'grey'}}>3:00 pm to 7:00 pm</Text>
                        </View>
                    </View>
                </View>
                
                <View style = {DashStyle.innerPendingBox} >
                    <View style = {DashStyle.innerPendingBox}>
                        {/* Date bubble below*/}
                        <View style = {DashStyle.dateBubble}>
                            <Text style = {{color: 'white', fontSize: 20}}>10</Text>
                            <Text style = {{color: 'white'}}>Jun</Text>
                        </View>
                        {/*Details below*/}
                        <View style = {DashStyle.pendingDetail}>
                            {/* Foodbank name below*/}
                            <Text style = {{color: '#066a87', fontSize: 18}}>Vancouver Food Bank</Text>
                            {/* time details below*/}
                            <Text style = {{color:'grey'}}>3:00 pm to 7:00 pm</Text>
                        </View>
                    </View>
                </View>
                <View style = {DashStyle.innerPendingBox} >
                    <View style = {DashStyle.innerPendingBox}>
                        {/* Date bubble below*/}
                        <View style = {DashStyle.dateBubble}>
                            <Text style = {{color: 'white', fontSize: 20}}>10</Text>
                            <Text style = {{color: 'white'}}>Jun</Text>
                        </View>
                        {/*Details below*/}
                        <View style = {DashStyle.pendingDetail}>
                            {/* Foodbank name below*/}
                            <Text style = {{color: '#066a87', fontSize: 18}}>Vancouver Food Bank</Text>
                            {/* time details below*/}
                            <Text style = {{color:'grey'}}>3:00 pm to 7:00 pm</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
};
export default DashboardAccept;