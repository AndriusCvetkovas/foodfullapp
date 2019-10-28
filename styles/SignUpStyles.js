import {StyleSheet} from 'react-native';

var SignUpStyles = StyleSheet.create({
   
    containerHeader:{
        flex:0.5,
    },

    containerButton:{
        flex:0.2,
        
    },

    containerSign:{
        
        height:360,
        width:400,
        alignItems: 'center',
        justifyContent: 'center',
    },
   
    box: {
        marginTop: 0,
        flex: 1,
        borderRadius: 30,
        backgroundColor: 'white',
        shadowColor: '#aaaaaa',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 15,
    },
    
    accpContianer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    MainSignup: {
        flex:2,
        width: '80%',
        marginBottom: -25,
        marginRight: 25,
        alignItems: 'center',
        justifyContent: 'center',
     
       
    },
   

    titlepen: {
        fontSize:20,
        fontWeight: "500",
        color: "#1F7A8C",
        marginBottom: 5,
        textAlign:'center',
        
        
    },
    header: {
        fontSize: 25,
        textAlign: "center",
        marginBottom: 5,
        fontWeight: "500",
        color: "#0972A3",
        textAlign:'center',
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:50,
        marginBottom:20,
        width:250,
        borderRadius:30,
        borderColor: "red",
      },
      signupButton: {
        
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: '#1F7A8C',
      },
      signUpText: {
        color: '#1F7A8C',
      },
    
});
export default SignUpStyles;