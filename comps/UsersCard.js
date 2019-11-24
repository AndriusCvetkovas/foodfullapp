import React,{useState, useEffect} from 'react';
import {View, Text, Animated, Button} from 'react-native';
import axios from 'axios';
import UsersEdit from './UsersEdit';

function UsersCard({id, email, password, hash, ReadUsers, address}){

    const [op] = useState(new Animated.Value(0));
    const [showEdit, setShowEdit] = useState(false);

    useEffect(()=>{
        Animated.timing(
            op,
            {
                toValue:1,
                duration:1000
            }
        ).start();
    },[])

    const DeleteUser=async()=>{
        var obj={
            key:"users_delete",
            data:{
                id:id
            }
        }

        var r = await axios.post("http://localhost:3001/post", obj);
        await ReadUsers();
    }

    return(
        <Animated.View style={{opacity:op}}>
            <Text>{id}</Text>
            <Text>{email}</Text>
            <Text>{address}</Text>
            <Text>{password}</Text>
            <Text>{hash}</Text>
            {
                (showEdit) ? <UsersEdit 
                    id={id}
                    email={email}
                    address={address}
                    ReadUsers={ReadUsers}
                /> : null
            }
            <Button 
                title="Edit Porfile"
                onPress={()=>{
                    setShowEdit(!showEdit)
                }}
            />
            {/* <Button 
                title="Delete"
                onPress={()=>{
                    DeleteUser()
                }}
            /> */}

        </Animated.View>
    )
}

export default UsersCard;