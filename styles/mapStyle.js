import { StyleSheet } from 'react-native';

var GMapStyle = StyleSheet.create({
    mapStyle: {
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    viewStyle: {
        position: 'absolute',
        height: 200,
        zIndex: 2,
        bottom: 0,
        overflow: 'hidden'
        
    },
    infoStyle: {
        marginLeft: 10,
        marginRight: 10,
        height: 400,
        padding: 20,
        backgroundColor: 'white',
        width: 375,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerInfo:{
        flex: 2,
        top:0,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    innerTitle: {
        fontFamily: 'avenir',
        color: '#06a2bc',
        fontSize: 20,
        padding: 20,
        width: 200
    },
    innerButton: {
        borderRadius: 30,
        borderWidth: 1,
        width: 100,
        height: 40,
        top: -20,
        marginLeft: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#06a2bc',
        

    },
    innerInner: {
        justifyContent: 'center',
        //alignItems: 'center'
    },
    innerAddress: {
        top: -10,
        left: 20,
        width: 200
    },
    backBut:{
        position: 'absolute',
        top: 50,
        left: 20,
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 50,
        shadowColor: 'black',
        shadowRadius: 5,
        elevation: 2 ,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noteBox: {
        flex: 1,
        width: '80%',
        margin: 20,
        // backgroundColor: '#aaaaaa'
    },
    infoBox: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        alignSelf: 'center',
        top: '5%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    dateBox: {
        flex: 0.5,
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    timeBox: {
        flex: 1,
        marginLeft: 20,

        // backgroundColor: '#f3f4f4'
    },
    
});
export default GMapStyle;