
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      paddingTop: 100,
      flex: 1,
      zIndex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#ffffff',
    },
   LogoImg:{
      width:300,
      height:300,
  },
  header:{
    fontSize: 28,
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
    fontFamily:'DidactGothic-Regular',
  },

  //  FORM

  form:{
    marginTop:0,
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
      height:50,
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
      height: 45,
    },
    signInText: {
      color: 'white',
      fontSize: 20,
      fontFamily: 'Avenir',
      fontWeight: '500'
     
    },
    // FOOTER
    signUpFooter: {
      flex:1,
      flexDirection:'row',
      marginTop:20
    },
    signUpText:{
      fontSize:18,
      fontFamily:'Avenir',
      fontWeight:'300',
      marginRight:5
    },
    //This is the "Sign Up" text
    link: {
    color:'#0ca3bc',
    fontSize:18,
    fontFamily:'Avenir',
    fontWeight:'500'
    }

  });

  export default styles;