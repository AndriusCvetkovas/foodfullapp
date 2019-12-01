import {StyleSheet} from 'react-native';

var PickUpComfirmSty = StyleSheet.create({

    main: {
        width: '100%',
        alignItems:'center',
        justifyContent: 'center',
        height: '100%',
        
        
        
    },
    main2: {
        flex: 0.9,
        width: '85%',
        backgroundColor: 'white',
        borderRadius: 30,
        margin: 20,
        // padding: 20,
        alignItems:'center',
        justifyContent: 'center'
        
    },

    NameOrg: {
        width: '95%',
        flex: 0.4,
       
     
    

    },

    PImage:{
        backgroundColor: 'red',
        flex: 1,
        resizeMode: 'cover', 
        borderTopRightRadius:30, 
        borderTopLeftRadius: 30 
    },
    
    donationInfoTop: {
        flex: 2,
        borderTopLeftRadius: 30,
        borderTopRightRadius:30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
        width: '100%',
        marginBottom:10,
        backgroundColor: '#0ca3bc',
        
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
    imageBox2: {
        flex: 1,
        marginTop:10,
        flexDirection: 'row',
    },
    pickupDate: {
        width: '95%',
        flex: 0.3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pickupTime: {
        flex: 0.4,
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    descriptionTitle: {
        flex: 0.2,
       color: '#0ca3bc',
        fontSize: 18,
        // fontWeight: "600",
        width: '95%',
        padding:5,
    },
    descriptionTitle2: {
        flex: 0.3,
       color: '#0ca3bc',
        fontSize: 18,
        // fontWeight: "600",
        width: '95%',
        
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
        fontSize: 25,
        color: '#07a2bb',
        textAlign: 'left',
        fontWeight: "600"
    },

    address:{
        fontSize:14,
        color:'#3b7687',
    },
    accpTxt:{
        fontSize:14,
        color:'#a5d826',
    },

    declineTxt:{
        fontSize:14,
        color:'red',
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
        marginBottom: 10,
    },
    description2:{
      
       flex: 0.7,
        width: '90%',
        color: "black",
        marginBottom: 10,
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
        flex: 0.4,
        padding: 5,
        
        borderTopColor:'#F0F0F0',
        borderBottomColor: '#F0F0F0',
        backgroundColor: 'white',
       
        borderTopWidth: 2,
        borderBottomWidth: 2,
        marginBottom: 0,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1
    },
    button2: {
        flex: 0.4,
        padding: 5,
        
        borderTopColor:'#F0F0F0',
        borderBottomColor: '#F0F0F0',
        backgroundColor: 'white',
       
        borderBottomRightRadius:30, 
        borderBottomLeftRadius: 30, 
     
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1
    },
})
export default PickUpComfirmSty;