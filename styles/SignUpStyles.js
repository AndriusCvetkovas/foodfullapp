import {StyleSheet} from 'react-native';

var SignUpStyles = StyleSheet.create({

    container: {
        backgroundColor: '#ffffff',
        width:'100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

//    HEADER TEXT
    headerContainer:{ 
        flex:0.3,
        width: '98%',
    },
    header: {
        fontSize: 23,
        textAlign: "center",
        marginBottom: 10,
        fontWeight: "500",
        color: "#06a2bc",
        textAlign:'center',
    },
    subheader: {
        fontSize:20,
        fontWeight: "400",
        color: "#06a2bc",
        marginBottom: 5,
        textAlign:'center', 
    },
 
    // DONATING AND ACCEPTING OPTIONS
    optionContainer:{
        height:400,
        width:'98%',
        alignItems: 'center',
        justifyContent: 'center',
    },
   
    option1: {
        flex: 1,
        width:360,
        borderRadius: 20,
        shadowColor: '#9B9EA3',
        shadowOffset: { width: 2, height: 7 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding:15,
        marginBottom: 40,
    },
    option2: {
        flex: 1,
        width:360,
        borderRadius: 30,
        shadowColor: '#9B9EA3',
        shadowOffset: { width: 2, height: 7 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding:15
    },
    
    optioninfo: {
        flex: 1,
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    
    MainSignup: {
        flex:4,
        width:'98%',
        alignItems: 'center',
        justifyContent: 'center',
    },
   
// BUTTON

    buttonContainer:{
        top:50,
        width:'98%',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        height:50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "white",
        borderWidth: 1.5,
        borderColor: '#0ca3bc',
      },
      buttonText: {
        color: '#0ca3bc',
        fontSize: 20
      },
    
});
export default SignUpStyles;