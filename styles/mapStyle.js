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
        height: 300,
        padding: 20,
        backgroundColor: 'white',
        width: 375,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerInfo:{
        flex: 2,
        top: -60,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20
    },
    innerTitle: {
        fontFamily: 'avenir',
        color: '#06a2bc',
        fontSize: 20,
        padding: 20
    },
    innerButton: {
        borderRadius: 30,
        borderWidth: 1,
        width: 100,
        height: 40,
        top: -120,
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
        paddingLeft: 20,
        top: -15
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
    }
});
export default GMapStyle;