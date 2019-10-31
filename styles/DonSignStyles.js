
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      marginTop:0,
      marginBottom:0,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    test: {
      height:25,
      width:230,
      flexDirection: 'row',
      
    },
    text:{
    textAlign:'left',
    },

    pendingimg:{
      width:100,
      height:100,
      borderRadius:100,
      marginBottom: 100,
      marginTop:70,
  },

  header: {
    fontSize: 23,
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "500",
    color: "#06a2bc",
    textAlign:'center',
},
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#F0F0F0',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:40,
        marginBottom:25,
        flexDirection: 'row',
        alignItems:'center',
    },
    inputs:{
        height:30,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    signupButton: {
      backgroundColor: "#0ca3bc",
      height: 50
    },
    signUpText: {
      color: 'white',
      fontSize: 20,
    }
  });

  export default styles;