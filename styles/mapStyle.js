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
        backgroundColor: '#e3e3e3',
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: 'black',
        top: '10%',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    donatorTitle: {
        fontSize: 20,
        paddingTop: 25,
        paddingLeft: 25,
        flex: 0
    },
    imageBox:{
        marginLeft: 20,
        marginRight: 20,
        flex: 2
    },
    donationImage:{
        width: 100,
        height: 100,
        backgroundColor: 'white',
        margin: 20
    },
    dateBox: {
        flex: 0.5,
        flexDirection: 'row',
        width: '85%',
        alignItems: 'center',
        justifyContent:'center'
    },
    timeBox: {
        flex: 1,
        margin: 20,
        backgroundColor: 'white',
        width: '80%',
    },
    noteBox: {
        flex: 1,
        width: '80%',
        margin: 20,
        backgroundColor: 'white'
    },
    button: {
        flex: 0.3,
        padding: 5,
        borderWidth: 0.5,
        borderRadius: 20,
        backgroundColor: 'green',
        marginBottom: 20,
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center'
    }
  });
export default GMapStyle;