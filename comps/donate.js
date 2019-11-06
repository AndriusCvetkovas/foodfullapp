import React, {useState , Component} from 'react';
import {View,Text,ScrollView,Image, TextInput,Switch,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import DatePicker from 'react-native-datepicker';
import donateStyle from '../styles/donateStyle';
import donationStyle from '../styles/donationStyle';
import {Actions} from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';

function Donate(){
    const [date, setStartDate] = useState("2016-05-15");
    const [time, setTime] = useState("20:20");
    const [chooseOrg, setChooseOrg]= useState(false);
    const [avatarSource, setAvatarSource] = useState(null);
    const [imageDefault, setArrayImages] = useState([]);

    const options = {
        title: 'Select Donation Image',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      
    var orgInput = null;

    function uploadMyImage(){
        ImagePicker.showImagePicker(options, (response) => {
     
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
              var arr = imageDefault.map((o)=>{
                  return o;
              });
              arr.push(source);
              setArrayImages(arr);
              console.log(arr);

            }
          });
    }

   
    
    if (chooseOrg === true){
        orgInput = (
    <KeyboardAvoidingView enabled>
        <View style={{margin:5}}>
            <TextInput
                onFocus={()=> Actions.map()}
                style={{ height: 40, borderColor: '#ddd', borderWidth: 1, borderRadius: 15, backgroundColor: '#eee', margin:10 }}
            />
            <View style={{justifyContent:'center',alignItems:'center',}}>
            <TouchableOpacity
                style={donateStyle.mapSearchButton}
                underlayColor='#000'
                color='white'
                onPress={()=> Actions.confirmation()}
                >
                <View style={{flexDirection:'row'}}>
                    <Text style={{flex:0.4}}> Map Image</Text>
                    <Text style={{flex:0.6}}>View</Text>
                </View>
                
            </TouchableOpacity>
            </View>
           
        </View>
    </KeyboardAvoidingView>)
    } 

    return (
    <KeyboardAvoidingView style={donateStyle.container} behavior="padding" enabled>
         <ScrollView  >
         <View>
            <View style={donateStyle.padding}>
                <Text style={{fontSize:16, marginBottom:5}}>Add a Photo</Text>
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
            <View style={{justifyContent:'center',alignItems:'center',}}>
            
            <TouchableOpacity
                style={donateStyle.DonateBtn}
                underlayColor='#000'
                color='white'
                onPress={()=> Actions.confirmation()}
                >
                <Text style={donateStyle.btnText}>Donate</Text>
            </TouchableOpacity>

        </View>
            
    </ScrollView>

       
           
    </KeyboardAvoidingView>
    )
}   

export default Donate
   
   
      
    
  