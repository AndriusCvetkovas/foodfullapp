import {StyleSheet} from 'react-native';

var ScheduleStyle = StyleSheet.create({
    mainView: {
        height: '80%',
        top: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '92%',
        bottom: 20,
        borderRadius: 20,
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
        top:100, 
        justifyContent:'center', 
        alignItems:'center',
    },
})
export default ScheduleStyle;