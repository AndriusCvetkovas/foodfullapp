import {StyleSheet} from 'react-native';

var footerStyle = StyleSheet.create({
    comp:{
        flex:0.13,
        flexDirection: 'row',
        backgroundColor:'#ffffff',
        justifyContent: 'center',
        alignItems:'center',
        textAlign:'center',
        height: 85,
        shadowColor: '#aaaaaa',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 10
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
        top: -15,
    },
    sizeDonateIcon:{
        width: 55,
        height: 55,
    },
    // End of Donation Icon Styling

    label:{
        paddingTop:7,
        fontSize: 11,
        color: '#000'
     }
   
 })

export default footerStyle