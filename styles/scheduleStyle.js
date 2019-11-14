import {StyleSheet} from 'react-native';

var ScheduleStyle = StyleSheet.create({
    mainView: {
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '92%',
        borderRadius: 20
    },
    backgroundView: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eaeaea'
    },
    // Dashboard illustration
    backgroundImg:{
        width:'100%',  
        flex:4,
        top:0, 
        justifyContent:'center', 
        alignItems:'center',
    },
})
export default ScheduleStyle;