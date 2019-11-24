import React,{useState, useEffect} from 'react';
import {View, TextInput, Animated, Text, Button} from 'react-native';
import axios from 'axios';

function UsersEdit({id, email, ReadUsers, address}){

    const [op] = useState(new Animated.Value(0));
    const [t_email, setEmail] = useState("");
    const [t_address, setAddress] = useState("");

    useEffect(()=>{
        Animated.timing(
            op,
            {
                toValue:1,
                duration:500
            }
        ).start();

        setEmail(email)
    },[])

    const UpdateUser = async() => {
        var obj = {
            key:"users_update",
            data:{
                email:t_email,
                address:t_address,
                id:id
            }
        }

       

        var r = await axios.post("http://localhost:3001/post", obj);
        await ReadUsers();
        //notify if update was good

    }

    return(

        <View style = {{flex: 1, backgroundColor:'lightgray', padding:20}}>
        <Animated.View style={{opacity:op}}>
            <Text>UPDATE PROFILE</Text>
            <Text>Email</Text>
            <TextInput 
                placeholder="Email"
                value={t_email}
                onChangeText={(t)=>{
                    setEmail(t);
                }}
            />

       <Text>Address</Text>
            <TextInput 
                placeholder="Address"
                value={t_address}
                onChangeText={(t)=>{
                    setAddress(t);
                }}
            />



            <Button 
                title="UPDATE USER"
                onPress={()=>{
                    UpdateUser();
                }}
            />
        </Animated.View>
        </View>
    )
}

export default UsersEdit;