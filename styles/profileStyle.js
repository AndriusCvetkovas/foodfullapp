import {StyleSheet} from 'react-native';

var ProfileStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    background:{
        position:"absolute",
        backgroundColor: '#06a2bc',
        top:0,
        width: '100%',
        height:'60%',
        top:-130
    },
    imageViewStyle:{
        flex: 0.5,
        zIndex: 6,
        alignItems: 'center',
        justifyContent: 'center',
        top: 30,
        backgroundColor: 'transparent'
    },
    imageStyle: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 7,
        borderColor: 'white',
        backgroundColor: 'transparent',
    },
    infoStyle: {
        flex: 2,
        top:-15,
        width: '90%',
        borderRadius: 30,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#aaaaaa',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5
    },
    titleStyle: {
        flex: 0.5,
        fontSize: 20,
        color: '#06a2bc',
        fontWeight: '500',
        paddingTop: 80,
        paddingBottom: 10,
        fontFamily: 'avenir'

    },
    statBox: {
        flex: 1,
        flexDirection: 'row'
    },
    innerStatBox1: {
        flexDirection: 'row',
        padding: 20,
        flex: 1,
        alignItems: 'center'
    },
    innerTextBox: {
        flex: 1
    },
    infoInnerBox: {
        flex: 1.8,
        alignItems: 'flex-start',
        left: -50,
        padding: 20,
        marginBottom: 20
    },
    addressBox:{
        flex: 1,
        padding: 10
    },
    buttonView: {
        flex:0.7,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#aaaaaa',
    },
    buttonStyle: {
        top: -20,
        flexDirection: 'row',
        width: '90%',
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 0.2,
        shadowColor: '#aaaaaa',
        shadowOpacity: 0.6,
        shadowRadius: 10,
        elevation: 2,
        shadowOffset: { width: 2, height: 2 },
    },
    signOutBut: {
        bottom: 30,
        height: 50,
        borderColor: '#0CA3BC',
        borderRadius: 30,
        borderWidth: 1.5, 
        width: 200,
        alignItems: 'center',
        justifyContent: 'center'
    }
   
});
export default ProfileStyle;