import {StyleSheet} from 'react-native';

var ProfileStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        top: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    // Background Blue/Illustrations
    background:{
        position:"absolute",
        backgroundColor: '#06a2bc',
        width: '100%',
        height:'60%',
        top:-130,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30, 
    },
    // Profile Image
    imageViewStyle:{
        flex: 0.5,
        zIndex: 1,
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


    // Profile container box
    infoStyle: {
        flex: 1.6,
        top:-12,
        width: '90%',
        borderRadius: 30,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#aaaaaa',
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5
    },
    titleStyle: {
        flex: 0.5,
        fontSize: 25,
        color: '#06a2bc',
        fontWeight: '500',
        paddingTop: 70,
        paddingBottom: 10,
        fontFamily: 'avenir'
    },
    titles:{
        fontSize:18, 
        color: '#aaaaaa',
    },
    info:{
        fontSize: 18, 
        fontFamily: 'DidactGothic-Regular',
    },
    statBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },
    innerStatBox1: {
        flexDirection: 'row',
        padding: 20,
        flex: 1,
        alignItems: 'center'
    },
    innerTextBox: {
        flex: 1,
    },
    calculations:{
        fontSize: 20, 
        textAlign: 'center', 
        fontFamily:'Avenir', 
        fontWeight:'800', 
        color:'#A4D638'
    },
    calcText:{
        textAlign: 'center', 
        fontFamily: 'DidactGothic-Regular', 
        fontSize: 17
    },
    infoInnerBox: {
        flex: 1.9,
        alignItems: 'flex-start',
        padding: 20,
        marginTop: 0
    },
    addressBox:{
        flex: 0,
        padding: 10,
        top:-30
    },

    // Buttons
    buttonView: {
        flex:0.7,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#aaaaaa',
    },
    buttonStyle: {
        top: -30,
        flexDirection: 'row',
        width: '90%',
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 0.2,
        shadowColor: '#aaaaaa',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 2,
        shadowOffset: { width: 5, height: 3 },
    },
    signOutBut: {
        height: 45,
        borderColor: '#719799',
        borderRadius: 15,
        borderWidth: 1.5, 
        width: 380,
        alignItems: 'center',
        justifyContent: 'center',
        top:-80
    }
   
});
export default ProfileStyle;