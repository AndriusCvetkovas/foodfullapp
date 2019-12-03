import {StyleSheet} from 'react-native';

var donationStyle = StyleSheet.create({
    CardDisplay:{
        borderColor:'#eee',
        borderRadius: 5,
        padding:5,
        marginTop: 10,
        shadowOffset:{width:0.2, height: 0.1},
        shadowColor:'#eee',
        borderStyle: 'solid',
        borderWidth: 1,
        flexDirection:'row',
        backgroundColor:'#fff',
        borderRadius:10
    },
    Images:{
        flex:0.35,
        margin: 6,
        justifyContent:'center',
        alignItems: 'center',
        alignContent: 'center',
        width: 120,
        height: 120,

    },

    Images2:{
        flex:0.35,
        margin: 6,
        justifyContent:'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor:'#a5d826',
        width: 120,
        height: 120,
        borderRadius: 120/1,
        transform:[
            {scaleX: 0.75},
            {scaleY: 0.75}
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
    option:{
        flex:0.3,
    },
    optionText:{
        color:'#f8c745',
        marginTop:10,
        fontFamily:'Avenir',
        fontWeight:'600',
        fontSize:15
    },
    pickedText:{
        color:'#a5d826',
        marginTop:10,
        fontFamily:'Avenir',
        fontWeight:'600',
        fontSize:15
    },
    
    Month:{
       fontSize:26,
       color:'white',
       fontWeight:'400'

    },
    ImageSize:{
        width: 90,
        height: 90,
        borderRadius: 15,

    },
    Dots:{
       marginRight:15,
       marginTop:20,
       width:5,
       height:20,
        
    },
    TextDisplay:{
        flex:0.42,
        justifyContent:'center',
        alignContent: 'center',

    },
    buttonView:{
        flexDirection:'row',
    },

    BtnStyleBlueView:{
        flex:0.5,
        margin:15,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:5,
        paddingBottom:5,
        borderRadius:30,
        borderWidth: 1,
        borderColor: '#07a2bb',
        backgroundColor: '#fff',
        color:'#07a2bb'
    },
    BtnStyleRed:{
        flex:0.5,
        margin:2,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:1,
        paddingBottom:5,
        borderRadius:20,
        borderWidth: 1,
        borderColor: '#ff5724',
        backgroundColor:'#ff5722'
    },

    comp:{
        marginTop:10
    },


    btnText:{
        color:'#07a2bb'
    },

    accpText:{
        color:'#a5d826',
        textAlign:'center',
        fontFamily:'Avenir',
        fontWeight:'600',
        fontSize:15
    },

    DeclinedText:{
        color:'red',
        textAlign:'center',
        fontFamily:'Avenir',
        fontWeight:'600',
        fontSize:15
    },

    
 });

export default donationStyle