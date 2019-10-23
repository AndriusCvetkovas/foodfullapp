import {StyleSheet} from 'react-native';

var footerStyle = StyleSheet.create({
    comp:{
        flex:1,
        flexDirection: 'row',
        backgroundColor:'#f6fafd',
        justifyContent: 'center',
        alignItems:'center',
        textAlign:'center',
        height: 60
    },
    iconsFooter:{
        justifyContent: 'center',
        alignItems:'center',
        flex:1,
        textAlign:'center',
        height: 50,
        width: 50,
       
    }, 
    sizeIcon:{
        width: 25,
        height: 25
    },


    // DONATION ICON
    donateIcon:{
        justifyContent: 'center',
        alignItems:'center',
        flex:1,
        textAlign:'center',
        top: -10,
    },
    sizeDonateIcon:{
        width: 55,
        height: 55,
    },
    

    label:{
        paddingTop:4,
        fontSize: 11,
        color: '#000'
     }
   
 })

export default footerStyle