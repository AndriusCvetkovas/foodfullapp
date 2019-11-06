
import {StyleSheet} from 'react-native';
const DonSignStyles = StyleSheet.create({

    container: {
      marginTop:0,
      marginBottom:0,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },

    titles: {
      height:25,
      width:'70%',
      flexDirection: 'row',
      zIndex: -1
    },

    text:{
    textAlign:'left',
    fontWeight: '400',
    fontSize: 16,
    },

    headerContainer:{
      flex:0.3,
      top:-40,
      flexDirection:'row',
      textAlign:'center',
      justifyContent:'center',
    },

    headertext: {
      fontSize: 23,
      textAlign: "center",
      marginBottom: 5,
      fontWeight: "500",
      color: "#06a2bc",
      textAlign:'center',
      marginLeft:'4%'
    },

    // FORM
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#F0F0F0',
        borderRadius:30,
        borderBottomWidth: 1,
        width:'70%',
        height:40,
        marginBottom:18,
        marginTop:5
    },
    inputs:{
        height:30,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },

    // NEXT BUTTON
    buttonContainer: {
      height:50,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:30,
      width:250,
      borderRadius:30,
    },
    signupButton: {
      backgroundColor: "#a4d638",
      height: 50
    },
    signUpText: {
      color: 'white',
      fontSize: 20,
      fontWeight: '500'
    }
    
  });

  export default DonSignStyles;