import {StyleSheet} from 'react-native';

var ConfirmStyle = StyleSheet.create({

    main: {
        padding: 0,
        alignItems:'center', 
        justifyContent: 'center',
        height: '70%',
    },
    main2: {
        flex: 1,
        // width: '80%',
        backgroundColor: 'white',
        borderRadius: 30,
        margin: 20,
        padding: 20,
        alignItems:'center',
        justifyContent: 'center'
        
    },
    donationInfoTop: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
    },
    header:{
        fontFamily:'Avenir',
        fontWeight:'800',
        color: '#0ca3bc',
        fontSize:25,
      
    },
    pickupDate: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:20
    },
    pickupTime: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:5
    },
    titles:{
        fontSize: 18, 
        flex: 1, 
        fontFamily:'Avenir',
        fontWeight:'600',
    },
    Images:{
        // flex:1,
        margin: 6,
        justifyContent:'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor:'#f8c745',
        width: 75,
        height: 75,
        borderRadius: 100,
        transform:[
            {scaleX: 0.80},
            {scaleY: 0.85}
          ]

    },
    Organization:{
        fontSize:18,
        color:'#07a2bb',
    },

    address:{
        fontSize:14,
        color:'#3b7687',
    },
    time:{
        fontSize:14,
        color:'#6492a0',
    },

    Date:{
       fontSize:30,
       color:'white',
       fontWeight:'bold'
    },
    description:{
        flex: 1,
        width: 300,
        color: "grey",
        marginBottom: 20,
    },

})
export default ConfirmStyle;