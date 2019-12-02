import React,{useState,useEffect} from 'react';
import {TextInput, View, Text, Image, TouchableOpacity, ScrollView,AsyncStorage} from 'react-native';
import PickUpComfirmSty from '../styles/PickUpComfirmSty';
import buttonStyle from '../styles/buttonStyle';
import {Actions} from 'react-native-router-flux';
import AcceptedInfo from '../comps/NotifPickComfirm';
import PickUpStyle from '../styles/pickUpStyle';
import MsgCancelDonation from '../comps/MsgCancelDonation';
import GMapStyle from '../styles/mapStyle';
import axios from 'axios';





function PickedUpComfirm(props){
var d = props.dd;
     //COMMUNICATION


            var currentId = "";
            const getID = async () => {
                var json = await AsyncStorage.getItem('id');
                currentId = json;
                console.log("userID " + currentId);
                GetDonationsPendings();
            }
            
            const [dd, setdd]=useState({});
            
            const GetDonationsPendings = async () => {
                var obj = {
                    key: "donations_read",
                    data: {
                        destination_id: currentId,
                        status: 2
                    }
                }
                var r = await axios.post(`https://foodfullapp.herokuapp.com/post`, obj);
                var json = JSON.parse(r.data.body);
                //console.log(json.data);
                var d = json.data;
                console.log(d)
            }

    const Update4 = async (thisId) => {
        var obj = {
            key: "donations_update",
            data: {
                id: thisId,
                status: 3
            }
        }
        var r = await axios.post(`https://foodfullapp.herokuapp.com/post`, obj);
        var json = JSON.parse(r.data.body);
        console.log(json.data);
        console.log('Your Status is now: ' + obj.data.status); 

    }

    


    var inputValueInit = null;
    const [inputValue, onChangeText] = React.useState(inputValueInit);
    var acceptedInfoContent = (
        <View style = {PickUpComfirmSty.main}>
        <View style = {PickUpComfirmSty.main2}></View>
        <View
        style = {PickUpStyle.infoBox}
        >
            {/*Title box below*/} 
            <View>
                <Text
                style = {PickUpStyle.donatorTitle}
                >Picked Up</Text>
            </View>
            {/*Image box below*/} 
            <View 
            style = {PickUpStyle.imageBox}
            >
                <Image
                style = {PickUpStyle.checkmarkImage}
                source = {require('../assets/icon/checkmark.png')}
                />
            </View>
            {/*Date box below*/} 
            <View


            style = {PickUpStyle.messageBox}
            >
                <Text>You have picked up your donation from Safeway Extra</Text>
                <Text style = {{color: '#0ca3bc'}}></Text>
            </View>
            <View
            style = {{flexDirection: 'row', width: "80%", flex: 0.2}}
            >
                <Text style = {{flex: 1, color: '#0ca3bc',fontWeight:'800'}}>How much food you have recieved?</Text>
                
            </View>
            {/*Time box below*/} 
            <View style = {{flexDirection: 'row', width: "80%", flex: 0.4}}>
                <Text style = {{color: '#0ca3bc', flex: 1, fontWeight:'800'}}>Weight:</Text>
                
                <TextInput
      style={PickUpStyle.InputSty}
      onChangeText={(text) => onChangeText(text)}
      value={inputValue}
    />
            </View>
            
            {/*Button below*/}
            <TouchableOpacity
                onPress={() => {Update4(d.id),[setdd(d)], props.obj.hide(), props.obj.getPendings()}}
                title="Accept"
                style = {PickUpStyle.buttonS}>
                <Text
                style = {{color: 'white'}}
                >Confirm Pickup</Text>
            </TouchableOpacity>

             <TouchableOpacity style ={{position: 'absolute', top: -35, right: 12}}
                onPress={props.obj.hide} 
                >
                    <Image

                    source={require('../assets/icon/x.png')}
                    style = {{width: 15, height: 15}}
                    />
            </TouchableOpacity>
            
        </View>
        </View>
          
    );


    var cancelPickUp = (
        <View style = {PickUpComfirmSty.main}>
           
            <View style = {PickUpComfirmSty.main2}>
            <View
        style = {GMapStyle.infoBox}
        >
            {/*Title box below*/} 
            <View
            style = {{marginTop: 50}}>
                <Text
                style = {GMapStyle.CancelledText}
                >Pick Up Cancelled</Text>
            </View>
            {/*Image box below*/} 
           
            {/*Date box below*/} 
            <View
            style = {GMapStyle.messageBox}
            >
                <Text style = {{height:70,marginTop: 40, fontFamily: 'DidactGothic-Regular', fontSize: 15}}>You have cancelled this donation from Safeway Extra.
                    They will be informed that you are no longer picking
                    up this donation.
                </Text>
                <Text style = {{color: '#0ca3bc'}}></Text>
            </View>
            <View
            style = {{flexDirection: 'row', width: "80%", flex: 0.4}}
            >
                <Text style = {{flex: 1, color: '#0ca3bc', fontFamily: 'Avenir', fontSize: 18}}>Location:</Text>
                <Text style = {{flex: 1, fontFamily: 'DidactGothic-Regular', fontSize: 15}}>6666 Iona</Text>
            </View>
            {/*Time box below*/} 
            <View style = {{flexDirection: 'row', width: "80%", flex: 0.4}}>
                <Text style = {{color: '#0ca3bc', flex: 1, fontFamily: 'DidactGothic-Regular', fontSize: 15}}>Pickup time:</Text>
                <Text
                style = {{color: "black", flex: 1, fontFamily: 'DidactGothic-Regular', fontSize: 15}}
                >
                    1:20pm
                </Text>
            </View>
            
            {/*Button below*/}
            <TouchableOpacity
            onPress = {
                props.obj.hide,
                console.log("Olala")
            }
    
            
            title="Accept"
            style = {buttonStyle.button}>
                <Text
                style = {{color: 'white', fontWeight: '500', fontFamily: 'avenir', fontSize: 16}}
                >View Donations</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>
                  {props.obj.hide},
                  console.log('Modal Has been Closed')

            } 
            
            title="Accept"
            style = {buttonStyle.button2}>
                <Text
                style = {{color: '#0ca3bc', fontWeight: '500', fontFamily: 'avenir', fontSize: 16}}
                >Search for Donations</Text>
            </TouchableOpacity>

            <TouchableOpacity style ={{position: 'absolute', top: -5, right: 5}}
                onPress={props.obj.hide} 
                >
                    <Image

                    source={require('../assets/icon/x.png')}
                    style = {{width: 15, height: 15}}
                    />
            </TouchableOpacity>
        </View>

      
            </View>
           
        </View>
        
          
    );

    var pickedUpModal =(
    <View style = {PickUpComfirmSty.main}>
        <View style = {PickUpComfirmSty.main2}>
            {/*Donation info below */}
           
            <View style = {PickUpComfirmSty.donationInfoTop}>
            <View style = {PickUpComfirmSty.Images}>
                  <Text style={PickUpComfirmSty.Date}>14</Text>
                  <Text style={PickUpComfirmSty.Month}>Jun</Text>
              </View>

              <View style={PickUpComfirmSty.TextDisplay}>
                  <View>
                      <Text style={PickUpComfirmSty.Organization}>{d.name}</Text>
                  </View>
                  <View>
                    <Text style={PickUpComfirmSty.address}>Pending</Text>
                  </View>
                  <View>
                   
                  </View>
              </View>
              
            </View>
            {/*Image text below */}
           
            {/*Images below */}
            <ScrollView horizontal='true' style={{height:1}}>
                <View style = {PickUpComfirmSty.imageBox}>
                    <Image style = {{width: 100, height: 100, margin:2, marginBottom: 0, backgroundColor: 'grey'}}></Image>
                    <Image style = {{width: 100, height: 100, margin:2, marginBottom: 0, backgroundColor: 'grey'}}></Image>
                    <Image style = {{width: 100, height: 100, margin:2, marginBottom: 0, backgroundColor: 'grey'}}></Image>
                    <Image style = {{width: 100, height: 100, margin:2, marginBottom: 0, backgroundColor: 'grey'}}></Image>
                    <Image style = {{width: 100, height: 100, margin:2, marginBottom: 0, backgroundColor: 'grey'}}></Image>
                </View>
            </ScrollView>
           
            {/*Date of pickup below */}
            <View style = {PickUpComfirmSty.pickupDate}>
                <Text style = {{ color: '#0ca3bc',fontSize: 18, flex: 1}}>Pickup loaction</Text>
                <Text style = {{color: '#066a87', fontSize: 16, flex: 1, marginTop:18}}>{d.address}</Text>
            </View>
            {/*Pickup time below */}
            <View style = {PickUpComfirmSty.pickupTime}>
                <Text style = {{color: '#0ca3bc', fontSize: 18, flex: 1}}>Pickup Time</Text>
                <Text style = {{color: '#066a87', fontSize: 16, flex: 1, marginTop:5}}>{d.time}</Text>
            </View>
            {/*Description title below */}
            <Text
            style = {PickUpComfirmSty.descriptionTitle}
            >Description</Text>
            {/*Description below */}
            <Text
            style = {PickUpComfirmSty.description}
            >
            {d.description}
            </Text>
            <TouchableOpacity
             onPress={()=>setPickedUpContent(acceptedInfoContent)} 
            title="Accept"
            style = {PickUpComfirmSty.button}>
                <Text
                style = {{color: '#0ca3bc', fontSize: 16, fontWeight: '500'}}
                >Picked Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>setPickedUpContent(cancelPickUp)} 
             title="Accept"
            style = {PickUpComfirmSty.button2}>
                <Text
                style = {{color: 'red', fontSize: 16, fontWeight: '500'}}
                >Cancel Pickup</Text>
            </TouchableOpacity>
            
            </View>
            <TouchableOpacity style ={{position: 'absolute', top: 70, right: 50}}
                onPress={props.obj.hide} 
                >
                    <Image

                    source={require('../assets/icon/x.png')}
                    style = {{width: 15, height: 15}}
                    />
            </TouchableOpacity>
        </View>
    )

    const[pickedUpContent, setPickedUpContent] = useState(pickedUpModal);
    
    useEffect(() => {
        getID();
    }, []);

    return(
        <View>
            {pickedUpContent}
        </View>
            
        
    )
};
export default PickedUpComfirm;