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
   
    activebox: {
        marginTop:0,
        flex: 1,
        top:20,
        borderRadius: 30,
        backgroundColor: 'white',
        shadowColor: '#0dacbc',
        shadowOffset: { width: 2, height: 7 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        marginBottom: 15,
    },

    greybox: {
        marginTop:0,
        flex: 1,
        borderRadius: 30,
        backgroundColor: '#ededed',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        marginBottom: 15,
        top:60
    },
    
    accpContianer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    
    MainSignup: {
        flex:3,
        top: 50,
        alignItems: 'center',
        justifyContent: 'center',
     
       
    },
   
    titlepen: {
        fontSize:20,
        fontWeight: "400",
        color: "#06a2bc",
        marginBottom: 5,
        textAlign:'center',  
    },
    
    header: {
        fontSize: 23,
        textAlign: "center",
        marginBottom: 5,
        fontWeight: "500",
        color: "#06a2bc",
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

      },
      signupButton: {
        backgroundColor: "white",
        borderWidth: 1.5,
        borderColor: '#0ca3bc',
        top:100,
        height:50
      },
      signUpText: {
        color: '#0ca3bc',
        fontSize: 20
      },
    
});
export default SignUpStyles;