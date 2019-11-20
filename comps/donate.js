import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TextInput, Switch, TouchableOpacity, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import DatePicker from 'react-native-datepicker';
import donateStyle from '../styles/donateStyle';
import donationStyle from '../styles/donationStyle';
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import Confirmation from './Confirmation';
var id = "";
var receiverId = 0;
var statu = 0;
function Donate({addr, ids, stat, navigation}) {
    var text = addr;
    receiverId = ids;
    
    if(stat != null){
        statu = stat;
    }
    if(text == null){
        text = ''
    }
    console.log(id);
    const [chooseOrg, setChooseOrg] = useState(false);
    const [imageDefault, setArrayImages] = useState([]);
    const options = {
        title: 'Select Donation Image',
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };

    var orgInput = null;

    function uploadMyImage() {
        ImagePicker.showImagePicker(options, (response) => {


            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                var arr = imageDefault.map((o) => {
                    return o;
                });
                arr.push(source);
                setArrayImages(arr);
                console.log(arr);
                setSelectedUrl(arr);

            }
        });
    }




    if (chooseOrg === true) {
        orgInput = (
            // <KeyboardAvoidingView enabled>
            //     <View style={{ margin: 5 }}>
            //         <TextInput
            //             style={{ height: 40, borderColor: '#ddd', borderWidth: 1, borderRadius: 15, backgroundColor: '#eee', margin: 10, padding: 10 }}
            //         >{text}</TextInput>
            //         <View style={{ justifyContent: 'center', alignItems: 'center', }}>
            //             <TouchableOpacity
            //                 style={donateStyle.mapSearchButton}
            //                 underlayColor='#000'
            //                 color='white'
            //                 onPress={()=> Actions.map()}
            //             >
            //                 <View style={{ flexDirection: 'row' , justifyContent: 'flex-start', alignItems: 'center'}}>
            //                     <Text style={{ flex: 1, marginLeft: 10 }} >Locate in the map</Text>
            //                     <Image style={{ flex: 0.1, height: 22, width: 10, margin: 20}}
            //                     source = {require('../assets/icon/map.png')}/>
            //                 </View>

            //             </TouchableOpacity>
            //         </View>

            //     </View>
            // </KeyboardAvoidingView>
            <KeyboardAvoidingView enabled>
            <View style={{margin:5}}>
                <TextInput
                    onFocus={()=> Actions.map()}
                    style={{ height: 40, borderColor: '#EDEDEF', borderWidth: 1, borderRadius: 30, backgroundColor: '#eee',marginBottom:10,padding:10, width:'98%'}}
                    placeholder='Search company name or address'
        >{text}</TextInput>
                <View style={{justifyContent:'center',alignItems:'center',}}>
                <TouchableOpacity
                    style={donateStyle.mapSearchButton}
                    underlayColor='#000'
                    color='white'
                    onPress={()=> Actions.map()}
                    >
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image
                            style={{width:15, height:20, left:-20}}
                            source={require('../assets/icon/map.png')}
                         />
                        <Text style={{fontSize:18, fontfamily:'Avenir', fontWeight:'600', color:'#06a2bc'}}>View Map</Text>
                    </View>
                    
                </TouchableOpacity>
                </View>
               
            </View>
        </KeyboardAvoidingView>
            )
    }else {
    }

    //SELECTIONS
    const [selectedDate, setSelectedDate] = useState();
    const [selectedUrl, setSelectedUrl] = useState();
    const [selectedDescription, setSelectedDescription] = useState();
    const [selectedTime, setSelectedTime] = useState();
    const [status, setStatus] = useState(0);
    //GET USER ID
    
    const getID = async () =>{
        var json = await AsyncStorage.getItem('id');
        id = json;
        console.log(id);
    }

    
    //SEND INFORMATION TO DATABASE
    const obj = {
        key: "donations_create",
        data: {
            date: selectedDate,
            time: selectedTime,
            image_url: selectedUrl,
            weight: 0,
            description: selectedDescription,
            user_id: id,
            destination_id: receiverId,
            status: statu

        }
    }
    
    console.log(obj.data.user_id)
    const changePage = () => {
        if(receiverId != 0 ){
        setStatus(1);
        Actions.confirmdonation({ text: obj })
    }else if(receiverId != 0 && text == null) {
        alert("Please enter receiver")
        
    }else {
        Actions.confirmdonation({ text: obj })
    }
}
    useEffect(()=>{
        getID();
        console.log(navigation.state.params);
    }, []);

    useEffect(()=>{
        setSelectedDate("");
        setSelectedTime("");
        setSelectedDescription("");
    },[navigation.state.params])
return (
    <KeyboardAvoidingView style={donateStyle.container} behavior="padding" enabled>
        
         <ScrollView  >
         <View>
            <View style={donateStyle.padding}>
                {/* ADD A PHOTO */}
                <Text style={donateStyle.headers}>Add up to 3 Photos</Text>
                <ScrollView horizontal='true'>
                    <View style={donateStyle.ImagePad}>
                    <TouchableOpacity onPress = {() => uploadMyImage()} >
                            <View style={donateStyle.uploadPictureButton}>
                                <Text style={donateStyle.addImagePlus}>+</Text>
                            </View>    
                        </TouchableOpacity>
                        {imageDefault.map((obj,i)=>{
                            return <Image key={i} source={obj} style={{height:100, width:100, borderRadius: 10, marginLeft:5}} />
                        })}
                        {/* <Image source={avatarSource} style={{height:100, width:100, borderRadius: 10}} /> */}
                       
                    </View>
                </ScrollView>

            </View>
            <View>
                <View>
                    <Text style={donateStyle.headers}>Date of Pick up</Text>
                </View>
                <View style={donateStyle.comp}>
                    <DatePicker
                            style={{width:'100%'}}
                            date={selectedDate}
                            mode="date"
                            value = {selectedDate}
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate = "2018-06-01"
                            maxDate="2040-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                width:0,
                                height:0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                width: 100,
                                borderRadius:50,
                                
                            }
                            
                            }}
                            onDateChange={(val) => { setSelectedDate(val) }}
                        />
                </View>
             </View>


             <View>
                <View>
                    <Text style={donateStyle.headers}>Time</Text>
                </View>
                <View style={donateStyle.comp}>
                    <DatePicker
                            style={{width: '100%'}}
                            date={selectedTime}
                            mode="time"
                            placeholder="Pick a time"
                            format="HH:mm"
                            value = {selectedTime}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                width:0,
                                height:0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                width: 100,
                                borderRadius:50,
                                
                            }
                            // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(newTime) => {setSelectedTime(newTime)}}
                        />
                </View>
             </View>

             <View>
                 <View style={{flexDirection:'row', alignItems:'center'}}>
                 <Text style={donateStyle.headers}>Description</Text>
                    <Text style={donateStyle.note}>If necessary, please add notes or details about your food donation
                    </Text>
                 </View>
                    <TextInput
                        style={{ height: 80, borderColor: '#ddd', borderWidth: 1, borderRadius: 15, backgroundColor: '#eee', padding:20,
                    }}
                    numberOfLines={4}
                    multiline
                    onChangeText={(text) => setSelectedDescription(text)}
                    />
            </View>

            <View style={[donateStyle.padding, donateStyle.row]}>
                    <Text style={donateStyle.lftItems}>Choose Organization</Text>
                    <Switch
                        style={donateStyle.rgttems}
                        value = {chooseOrg}
                        onValueChange = {() => setChooseOrg(!chooseOrg)}
                    />
            </View>
           

            {orgInput}

            </View>
            <View style={{justifyContent:'center',alignItems:'center',}}>
            
            <TouchableOpacity
                style={donateStyle.DonateBtn}
                underlayColor='#000'
                color='white'
                onPress={changePage}
                >
                <Text style={donateStyle.btnText}>Donate</Text>
            </TouchableOpacity>

        </View>
            
    </ScrollView>

       
           
    </KeyboardAvoidingView>
    )
}   


export default Donate




