
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
    color: '#06a2bc',
    fontFamily:'Avenir',
    fontWeight: '800'
  },

  subheader:{
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '300',
    color: '#06a2bc',
    fontFamily:'Avenir',
  },

  //  FORM

  form:{
    marginTop:20,
  },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#F0F0F0',
        borderRadius:30,
        borderBottomWidth: 1,
        width:'70%',
        height:40,
        marginBottom:15,
        flexDirection: 'row',
        alignItems:'center',
    },
    inputs:{
        height:45,
        marginLeft:16,
        flex:1,
    },
    buttonContainer: {
      height:40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:20,
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    signinButton: {
      backgroundColor: '#0ca3bc',
      height: 50,
    },
    signInText: {
      color: 'white',
      fontSize: 20,
     
    },
    // FOOTER
    signUpFooter: {
      flex:1,
      flexDirection:'row'
    },
    signUpText:{
      fontSize:15,
      fontFamily:'Avenir',
      fontWeight:'500',
      marginRight:5
    },
    //This is the "Sign Up" text
    link: {
    color:'#0ca3bc',
    fontSize:15,
    fontFamily:'Avenir',
    fontWeight:'500'
    }

  });

  export default styles;