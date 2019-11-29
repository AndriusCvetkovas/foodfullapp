import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import ScheduleStyle from '../styles/scheduleStyle';

function Schedule(){
    //const [days, changeDay] = useState("");

    return(
        <View style={ScheduleStyle.backgroundView}>
            <View style={ScheduleStyle.backgroundImg}>
                <Image style={{width:'100%',height:400, position:'absolute'}}
                 source={require('../assets/img/background.png')}>
                </Image>
            </View>
            <View
            style ={ScheduleStyle.mainView}
            >
                    <CalendarList
                    style= {{
                        borderRadius: 20,
                        flex: 1,
                        paddingTop: 30,
                        marginBottom: 200
                    }}
                    markedDates={{
                        '2019-11-20': {selected: true, marked:true, selectedColor:'#a4d638'},
                        '2019-11-21': {marked:true, dotColor:'#03acbc' },
                        '2019-11-22': {marked:true, dotColor:'#03acbc' }
                    }}
                    // Enable horizontal scrolling, default = false
                    horizontal={true}
                    // Enable paging on horizontal, default = false
                    pagingEnabled={true}
                    // Set custom calendarWidth.
                    calendarWidth={400}
                    current={Date()}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={'2019-11-01'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    maxDate={'2019-11-30'}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={(day) => {changeDay('selected day', day)}}
                    // Handler which gets executed on day long press. Default = undefined
                    onDayLongPress={(day) => {console.log('selected day', day)}}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'yyyy MM'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={(month) => {console.log('month changed', month)}}
                    // Hide month navigation arrows. Default = false
                    hideArrows={true}
                    // Replace default arrows with custom ones (direction can be 'left' or 'right')
                    renderArrow={(left) => (<Arrow />)}
                    // Do not show days of other months in month page. Default = false
                    hideExtraDays={true}
                    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                    // day from another month that is visible in calendar page. Default = false
                    disableMonthChange={true}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                    firstDay={1}
                    // Hide day names. Default = false
                    hideDayNames={false}
                    // Show week numbers to the left. Default = false
                    showWeekNumbers={false}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                    onPressArrowLeft={substractMonth => substractMonth()}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                    onPressArrowRight={addMonth => addMonth()}
/>               




            </View>
        </View>
    )
}
export default Schedule;


/*
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import ScheduleStyle from '../styles/scheduleStyle';

function Schedule(){
    //const [days, changeDay] = useState("");

    return(
        <View
        style={ScheduleStyle.backgroundView}
        >
            <View
            style ={ScheduleStyle.mainView}
            >
                    <CalendarList
                    style= {{
                        borderRadius: 20,
                        flex: 1,
                        paddingTop: 100
                    }}
                    markedDates={
                        {'2019-11-20': {selected: true}}
                    }
                    // Enable horizontal scrolling, default = false
                    horizontal={true}
                    // Enable paging on horizontal, default = false
                    pagingEnabled={true}
                    // Set custom calendarWidth.
                    calendarWidth={400}
                    current={Date()}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={'2019-11-01'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    maxDate={'2019-11-30'}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={(dateString) => {changeDay(dateString)}}
                    // Handler which gets executed on day long press. Default = undefined
                    onDayLongPress={(day) => {console.log('selected day', day)}}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'yyyy MM'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={(month) => {console.log('month changed', month)}}
                    // Hide month navigation arrows. Default = false
                    hideArrows={true}
                    // Replace default arrows with custom ones (direction can be 'left' or 'right')
                    renderArrow={(left) => (<Arrow />)}
                    // Do not show days of other months in month page. Default = false
                    hideExtraDays={true}
                    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                    // day from another month that is visible in calendar page. Default = false
                    disableMonthChange={true}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                    firstDay={1}
                    // Hide day names. Default = false
                    hideDayNames={false}
                    // Show week numbers to the left. Default = false
                    showWeekNumbers={false}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                    onPressArrowLeft={substractMonth => substractMonth()}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                    onPressArrowRight={addMonth => addMonth()}
/>                  
            </View>
        </View>
    )
}
export default Schedule;


*/