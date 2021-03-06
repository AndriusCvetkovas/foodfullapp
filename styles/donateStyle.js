import {StyleSheet} from 'react-native';

var donateStyle = StyleSheet.create({

    container:{
        flex: 1,
        paddingTop: 50,
        width: '100%',
        bottom: 0,
        padding:20,
        backgroundColor:'#fff'
    },
    pageHeader:{
      top: 10,
      fontSize:25, 
      fontFamily:'Avenir', 
      color:'#07a2bb', 
      textAlign:'center', 
      fontWeight:'800', 
      marginBottom:20
    },
    headers:{
      fontSize:18, 
      marginBottom:5,
      marginTop:10,
      fontFamily: 'Avenir',
      fontWeight:'600',
      left:5
    },
    note:{
      fontSize:15, 
      marginBottom:10, 
      color:'#06a2bc', 
      width:'75%', 
      marginLeft:15,
      padding: 10
    },
    comp:{
        marginBottom:12,
    },

    dateIcon: {
        width:0,
        height:0
      },
      dateInput: {
      width:'100%'
      },

      pdheader:{
        fontSize:20, 
        flexDirection:'row',
        left:5,
        marginTop:20,
        fontFamily: 'Avenir',
        fontWeight:'800'
      },

      padding:{
          padding:10,
          paddingLeft: 5
      },

      row:{
          flexDirection: 'row',
          flex: 0.7,
          justifyContent: 'center',
          alignItems:'center',
          margin:8
          
      },
       lftItems:{
          flex:1,
          fontSize:20,
          fontFamily:'Avenir',
          marginTop: 28,
          paddingLeft: 5,
          marginBottom: 5,
          left:0
      },
      DonateBtn:{
        top: 20,
        bottom: 60,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        height:45,

        borderRadius:30,
        borderWidth: 1,
        borderColor: '#07a2bb',
        backgroundColor: '#07a2bb',
        color:'#fff',
        width: '60%',
        marginBottom: 50

      },
      mapSearchButton:{
        flexDirection:'row',
        flex:1,
        marginBottom:4,
        justifyContent:'center',
        alignItems:'center',
        height:40,
        paddingTop:1,
        paddingBottom:1,
        borderRadius:30,
        borderWidth: 1,
        borderColor: '#07a2bb',
        backgroundColor: '#fff',
        color:'#fff',
        width: 100
      },
    
      btnText:{
        color:'#ffffff',
        fontFamily:'Avenir',
        fontSize:20,
        fontWeight:'800'
      },

      rgttems:{
        flex:0.2
    },

    ImagePad:{
      flex:1,
      flexDirection:'row'
    },

    uploadPictureButton:{
      height: 100,
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      marginLeft: 0,
      borderColor: '#ddd',  
      borderRadius: 10
    },

    addImagePlus:{
      color:'#07a2bb',
      fontSize: 25
    }
 });

export default donateStyle