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
      width: '95%',
      backgroundColor: '#AAA',
      height: 70,
      marginRight: 10,
      marginLeft: 10,
      marginTop: 10,
      padding: 10,
      borderRadius: 10
    },
    infoBox: {
        position: 'absolute',
        width: '70%',
        height: '70%',
        backgroundColor: 'white',
        alignSelf: 'center',
        shadowColor: '#aaaaaa',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.6,
        shadowRadius: 10,
        top: '10%',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    donatorTitle: {
        fontSize: 20,
        paddingTop: 25,
        flex: 0,
        color: "#066a87"
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
        backgroundColor: '#aaaaaa'
    },
    noteBox: {
        flex: 1,
        width: '80%',
        margin: 20,
        backgroundColor: '#aaaaaa'
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
    }
  });
export default GMapStyle;