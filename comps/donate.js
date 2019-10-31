import React, {useState , Component} from 'react';
import {View,Text,ScrollView,Image, TextInput,Switch,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import DatePicker from 'react-native-datepicker';
import donateStyle from '../styles/donateStyle';
import donationStyle from '../styles/donationStyle';
import {Actions} from 'react-native-router-flux';
 
function Donate(){
    const [date, setStartDate] = useState("2016-05-15");
    const [time, setTime] = useState("20:20");
    const [chooseOrg, setChooseOrg]= useState(false);
    var orgInput = null;

    if (chooseOrg === true){
        orgInput = (
    <KeyboardAvoidingView enabled>
        <View style={{margin:5}}>
            <TextInput
                style={{ height: 40, borderColor: '#ddd', borderWidth: 1, borderRadius: 15, backgroundColor: '#eee', margin:10 }}
            />
        </View>
    </KeyboardAvoidingView>)
    } 

    return (
    <KeyboardAvoidingView style={donateStyle.container} behavior="padding" enabled>
         <ScrollView  >
         <View>
            <View style={donateStyle.padding}>
                <Text style={{fontSize:16, marginBottom:5}}>Add a Photo</Text>
                <View>
                <Image
                    style={{width: 80, height: 80, borderWidth: 1, borderColor:'#eee'}}
                    
                 />
                </View>
            </View>
            <View>
                <View>
                    <Text style={{fontSize:16, marginBottom:3}}>Date of Pickup</Text>
                </View>
                <View style={donateStyle.comp}>
                    <DatePicker
                            style={{width: '100%'}}
                            date={date}
                            mode="date"
                            value = {date}
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
                            // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(val) => {setStartDate(val)}}
                        />
                </View>
             </View>


             <View>
                <View>
                    <Text style={{fontSize:16, marginBottom:3}}>Time</Text>
                </View>
                <View style={donateStyle.comp}>
                    <DatePicker
                            style={{width: '100%'}}
                            date={time}
                            mode="time"
                            placeholder="Pick a time"
                            format="HH:mm"
                            value = {time}
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
                            onDateChange={(newTime) => {setTime(newTime)}}
                        />
                </View>
             </View>

             <View>
                    <Text style={{fontSize:16, marginBottom:5}}>Description</Text>
                    <TextInput
                        style={{ height: 80, borderColor: '#ddd', borderWidth: 1, borderRadius: 15, backgroundColor: '#eee',
                    }}
                    numberOfLines={4}
                    multiline
                    />
            </View>

            <View style={donateStyle.padding, donateStyle.row}>
                    <Text style={donateStyle.lftItems}>Choose Organization</Text>
                    <Switch
                        style={donateStyle.rgttems}
                        value = {chooseOrg}
                        onValueChange = {() => setChooseOrg(!chooseOrg)}
                    />
            </View>
           

            {orgInput}

            </View>
            <TouchableOpacity
                style={donateStyle.DonateBtn}
                underlayColor='#000'
                color='white'
                onPress={()=> Actions.confirmation()}
                >
                <Text style={donateStyle.btnText}>Donate</Text>
            </TouchableOpacity>
    </ScrollView>

       
           
    </KeyboardAvoidingView>
    )
}   

export default Donate
   
   
      
    
  