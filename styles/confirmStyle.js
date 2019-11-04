import {StyleSheet} from 'react-native';

var ConfirmStyle = StyleSheet.create({

    main: {
        width: '100%',
        backgroundColor:"#e3e3e3",
        alignItems:'center',
        justifyContent: 'center',
        height: '100%'
        
    },
    main2: {
        flex: 0.9,
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 30,
        shadowColor: '#aaaaaa',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.6,
        shadowRadius: 10,
        margin: 20,
        padding: 20,
        alignItems:'center',
        justifyContent: 'center'
        
    },
    donationInfoTop: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 50,
        paddingRight: 50
    },
    imageText: {
        flex: 0.2,
        fontSize: 18,
        fontWeight: "600",
        width: '90%'
    },
    imageBox: {
        flex: 1,
        flexDirection: 'row',
    },
    pickupDate: {
        width: '90%',
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    pickupTime: {
        flex: 0.5,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    descriptionTitle: {
        flex: 0.3,
        color: 'black',
        fontSize: 18,
        fontWeight: "600",
        width: '90%'
    },
    description:{
        flex: 0.7,
        width: '90%',
        color: "#e4e3e3",
        marginBottom: 20
    },

})
export default ConfirmStyle;