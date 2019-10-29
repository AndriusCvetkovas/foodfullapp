import React from 'react';
import {View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
function TimePicker(){
    var date = new Date('2020-06-12T14:42:42');
    return(
        <View>
            <DateTimePicker
                        mode='date'
                        is24Hour={true}
                        value={date} 
                        show = {false}
                        style = {{height: 10}}
            />
        </View>
    )
}
export default TimePicker;

