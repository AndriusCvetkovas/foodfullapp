import axios from 'axios';
import {AsyncStorage} from 'react-native';

export default async (link, data)=>{
    var token = await AsyncStorage.getItem('token');
    var r = await axios.post(link, data);
}