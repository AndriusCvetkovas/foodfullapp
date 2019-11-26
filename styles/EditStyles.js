import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
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
    marginTop: 15,
    justifyContent: 'center'
},
inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
    alignItems:'center',
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
  backgroundColor: "#0ca3bc",
},
signUpText: {
  color: 'white',
}
});

export default styles;