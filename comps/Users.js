import React,{useEffect, useState} from 'react';
import {View, Text, TextInput, Button, ScrollView} from 'react-native';
import axios from 'axios';

import UsersCard from './UsersCard';

var email = "";
var password = "";

function Users(){
    const [error, setError] = useState("");
    const [users, Setusers] = useState([]);

    const CreateUser = async()=>{
        //fetch to the db to create 
        console.log(email, password);
        var obj = {
            key:'users_create',
            data:{
                email:email,
                password:password
            }
        }
        var data = await axios.post("http://localhost:3001/post", obj);
        console.log("create", data)
        await ReadUsers();      
          
    }

    const ReadUsers = async()=>{

        //fetch to the db to read
        var obj = {
            key:"users_read",
            data:{}
        }

        var data = await axios.post("http://localhost:3001/post", obj);
        console.log("read", JSON.parse(data.data.body));
        
        var dbusers = JSON.parse(data.data.body).data;
        Setusers(dbusers);  

    }
    useEffect(()=>{
        ReadUsers();
    }, []);
 
    return(
        <ScrollView>
            <TextInput
                placeholder="email"
                onChangeText={(text)=>{
                    email=text;
                }}
            />
            <TextInput
                placeholder="password"
                onChangeText={(text)=>{
                    password = text;
                    if(password.length < 5){
                        setError('Password is too short');
                    }else {
                        setError("Password is good");
                    }
                }}
                secureTextEntry
            />
            <Text>{error}</Text>
            <Button
                title="Create User"
                onPress={()=>{
                    CreateUser()
                }}
            />

            {
                users.map((obj,i)=>{
                    return <UsersCard 
                        key={i}
                        id={obj.id}
                        email={obj.email}
                        password={obj.password}
                        hash={obj.hash}
                        ReadUsers={ReadUsers}
                    />
                })
            }

        </ScrollView>
    )
}

export default Users;