
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      marginTop:0,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#ffffff',
    },
   LogoImg:{
      width:220,
      height:150,
      marginTop:70,
      marginBottom: 12
  },
  
  header:{
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    color: '#06a2bc'
  },

  subheader:{
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '200',
    color: '#06a2bc'
  },

    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#F0F0F0',
        borderRadius:30,
        borderBottomWidth: 1,
        width:280,
        height:45,
        marginBottom:15,
        flexDirection: 'row',
        alignItems:'center',
    },
    inputs:{
        height:45,
        marginLeft:16,
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
      borderRadius:30
    },
    signinButton: {
      backgroundColor: "#0ca3bc",
      height: 50,
    },
    signInText: {
      color: 'white',
      fontSize: 20
    },
    signUpFooter: {
      flex:1,
    }
  });

  export default styles;