import {StyleSheet} from 'react-native';

var GMapStyle = StyleSheet.create({
    mapStyle: {
      height: 450,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    viewStyle: {
      flex: 1,
      flexDirection: 'row',
      width: '95%',
      backgroundColor: 'white',
      borderWidth: 0.5,
      borderColor: '#06a2bc',
      height: 70,
      flexDirection: 'row',
      marginRight: 10,
      marginLeft: 10,
      marginTop: 10,
      padding: 15,
      borderRadius: 20,
      alignItems: 'center'
    },
    infoBox: {
        position: 'absolute',
        width: '80%',
        height: '70%',
        backgroundColor: 'white',
        alignSelf: 'center',
        shadowColor: '#aaaaaa',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.6,
        shadowRadius: 10,
        top: '25%',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    donatorTitle: {
        fontSize: 20,
        paddingTop: 25,
        flex: 0,
        color: "#0ca3bc"
    },
    imageBox:{
        flex: 1
    },
    donationImage:{
        width: 100,
        height: 100,
        backgroundColor: '#aaaaaa',
        margin: 20
    },
    dateBox: {
        flex: 0.5,
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center',
        justifyContent:'center'
    },
    timeBox: {
        flex: 1,
        marginLeft: 20,
        // backgroundColor: '#f3f4f4'
    },
    noteBox: {
        flex: 1,
        width: '80%',
        margin: 20,
        // backgroundColor: '#aaaaaa'
    },
    
    checkmarkImage: {
        width: 70,
        height: 70,
        margin: 20
    },
    messageBox: {
        flex: 1,
        width: '80%',
        justifyContent:'center'
    },
    locationBox: {
        flex: 1,
        flexDirection: 'row',
        width: '80%'
    },
    infoInnerTitle: {
        flex: 1, 
        fontSize: 18,
        color: '#06a2bc',
        fontWeight: '600'
    },
    infoInnerAddress: {
        fontSize: 12,
        color: '#06a2bc'
    },
    innerInfoView: {
        flex: 1
    },
    infoInnerButton: {
        flex: 0.4,
        padding: 5,
        borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#06a2bc',
        borderRadius: 30,
        height: 30
    },
    infoInnerDistance:{
        fontSize: 12,
        flex: 1.2,
        bottom :5
    }
  });
export default GMapStyle;