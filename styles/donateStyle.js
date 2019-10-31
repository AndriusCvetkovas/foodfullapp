import {StyleSheet} from 'react-native';

var donateStyle = StyleSheet.create({

    container:{
        flex: 1,
        height:'100%',
        padding:10,
        borderRadius: 20,
        margin:5,
        backgroundColor:'#fff'
    },

    comp:{
        marginBottom:12
    },

    dateIcon: {
        width:0,
        height:0
      },
      dateInput: {
      width:'100%'
      },

      padding:{
          padding:10,
      },

      row:{
          flexDirection: 'row',
          flex: 0.7,
          justifyContent: 'center',
          alignItems:'center',
          margin:8
          
      },
       lftItems:{
          flex:0.8,
          fontSize:16
      },
      DonateBtn:{
        flex:0.5,
        marginBottom:15,
        justifyContent:'center',
        alignItems:'center',
        height:40,
        paddingTop:5,
        paddingBottom:5,
        borderRadius:30,
        borderWidth: 1,
        borderColor: '#07a2bb',
        backgroundColor: '#07a2bb',
        color:'#fff'

      },
      btnText:{
        color:'white'
      },

      rgttems:{
        flex:0.2
    }
 });

export default donateStyle