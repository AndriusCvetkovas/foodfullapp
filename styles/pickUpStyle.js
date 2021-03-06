import {StyleSheet} from 'react-native';

var PickUpStyle = StyleSheet.create({
    mapStyle: {
    
      height: 450,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent:'center',
      alignItems:'center'
    },
    viewStyle: {
      flex: 1,
      width: '95%',
      backgroundColor: '#AAA',
      height: 70,
      flexDirection: 'row',
      marginRight: 10,
      marginLeft: 10,
      marginTop: 10,
      padding: 10,
      borderRadius: 10
    },
    infoBox: {
        position: 'absolute',
        width: '80%',
        height: '70%',
        backgroundColor: 'white',
       
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    donatorTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        paddingTop: 25,
        flex: 0,
        color: "#0ca3bc",
        fontWeight:'800',
    },
    imageBox:{
        flex: 0.9,
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
        flex: 0.3,
        width: '80%',
        justifyContent:'center'
    },
    locationBox: {
        flex: 1,
        flexDirection: 'row',
        width: '80%'
    },
InputSty:{
       
        borderRadius:30,
        width: 180,
        height: 40, 
        borderColor: '#F0F0F0', 
        borderWidth: 1, 
        textAlign: 'right',
        paddingRight: 20,
},
buttonS: {
    flex: 0.2,
    padding: 5,
    borderRadius: 50,
    backgroundColor: '#afd455',
    marginBottom: 20,
    marginTop: 20,
    width: '60%',

    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
},

  });
export default PickUpStyle;