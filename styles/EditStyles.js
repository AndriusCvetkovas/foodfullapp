import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
popup:{
  height: 500, 
  width: 330, 
  backgroundColor: 'white', 
  marginTop:15, 
  padding:25, 
  borderRadius:30
  },
inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#F0F0F0',
    borderRadius:20,
    borderBottomWidth: 1,
    width:280,
    height:40,
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
header: {
    fontFamily:'Avenir',
    fontSize:20,
    fontWeight: '800',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    color:'#0ca3bc'
},
buttonContainer: {
  height:45,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom:20,
  width:260,
  borderRadius:30,
  left:10
},
signupButton: {
  backgroundColor: "#0ca3bc",
},
signUpText: {
  color: 'white',
}
});

export default styles;