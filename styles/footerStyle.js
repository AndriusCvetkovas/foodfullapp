import {StyleSheet} from 'react-native';

var footerStyle = StyleSheet.create({
    comp:{
        flexDirection: 'row',
        backgroundColor:'#f6fafd',
        height: '100%',
        justifyContent: 'center',
        alignItems:'center',
        textAlign:'center',

  
    },
    iconsFooter:{
        justifyContent: 'center',
        alignItems:'center',
        flex:1,
        textAlign:'center',
        height: 50,
        width: 50,
       
    },

    label:{
        paddingTop:4,
        fontSize: 12,
        color: '#000'
    }
   
 })

export default footerStyle