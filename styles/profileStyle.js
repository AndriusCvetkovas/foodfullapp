import {StyleSheet} from 'react-native';

var ProfileStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    imageViewStyle:{
        flex: 0.5,
        elevation: 6,
        alignItems: 'center',
        justifyContent: 'center',
        top: 50,
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
        flex: 1,
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
        fontSize: 20,
        color: '#06a2bc',
        fontWeight: '600',
        paddingTop: 50,
        paddingBottom: 10
    },
    statBox: {
        flex: 2,
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
        flex: 5,
        alignItems: 'flex-start',
        left: -50,
        padding: 20,
        marginBottom: 20
    },
    addressBox:{
        flex: 1,
        padding: 20
    },
    buttonView: {
        flex:0.3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#aaaaaa'
    },
    buttonStyle: {
        flexDirection: 'row',
        width: '90%',
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 0.2,
        shadowColor: '#aaaaaa',
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 5
    }
});
export default ProfileStyle;