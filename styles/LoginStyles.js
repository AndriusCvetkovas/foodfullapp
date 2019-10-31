
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      marginTop:0,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00b5ec',
    },
   LogoImg:{
      width:100,
      height:100,
      borderRadius:100,
      marginBottom: 100,
      marginTop:70,
  },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#F0F0F0',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center',
    },
    inputs:{
        height:45,
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
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    signupButton: {
      backgroundColor: "#1F7A8C",
    },
    signUpText: {
      color: 'white',
    },
    signUpFooter: {
      flex:1,
    }
  });

  export default styles;