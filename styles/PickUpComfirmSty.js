import {StyleSheet} from 'react-native';

var PickUpComfirmSty = StyleSheet.create({

    main: {
        width: '100%',
        backgroundColor:"#e3e3e3",
        alignItems:'center',
        justifyContent: 'center',
        height: '100%'
        
    },
    main2: {
        flex: 0.9,
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 30,
        shadowColor: '#aaaaaa',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.6,
        shadowRadius: 10,
        margin: 20,
        padding: 20,
        alignItems:'center',
        justifyContent: 'center'
        
    },
    donationInfoTop: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 50,
        paddingRight: 50
    },
    imageText: {
        flex: 0.2,
        fontSize: 18,
        fontWeight: "600",
        width: '90%'
    },
    imageBox: {
        flex: 1,
        flexDirection: 'row',
    },
    pickupDate: {
        width: '90%',
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    pickupTime: {
        flex: 0.5,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    descriptionTitle: {
        flex: 0.3,
       color: '#0ca3bc',
        fontSize: 18,
        fontWeight: "600",
        width: '90%'
    },
    Images:{
        // flex:1,
        margin: 6,
        justifyContent:'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor:'#f8c745',
        width: 100,
        height: 100,
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
        flex: 0.7,
        width: '90%',
        color: "black",
        marginBottom: 20
    },
    Month:{
        fontSize:26,
        color:'white',
        fontWeight:'400'
 
     },
     ImageSize:{
         width: 90,
         height: 90,
     },
     TextDisplay:{
      
         width:200,
        
 
     },
     button: {
        flex: 0.3,
        padding: 5,
        
        borderTopColor:'#F0F0F0',
        borderBottomColor: '#F0F0F0',
        backgroundColor: 'white',
       
        borderTopWidth: 2,
        borderBottomWidth: 2,
        marginBottom: 0,
        marginTop: 20,
        width: '110%',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1
    },
    button2: {
        flex: 0.3,
        padding: 5,
        
        borderTopColor:'#F0F0F0',
        borderBottomColor: '#F0F0F0',
        backgroundColor: 'white',
       
        borderTopWidth: 2,
        borderBottomWidth: 2,
     
        width: '110%',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1
    },
})
export default PickUpComfirmSty;