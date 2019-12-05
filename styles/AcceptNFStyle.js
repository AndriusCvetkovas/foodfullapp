import { StyleSheet } from 'react-native';

var AcceptNFStyle = StyleSheet.create({

    main: {
        backgroundColor: "transparent",
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: 700

    },
    main2: {
        flex: 2,
        height: 700,
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 30,
        // padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    DImage:{
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderTopRightRadius:30, 
        borderTopLeftRadius: 30 
    },
    donationInfoTop: {
        flex: 1.5,
        borderTopLeftRadius: 30,
        borderTopRightRadius:30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
        width: '100%',
        marginBottom:10,
        backgroundColor: '#0ca3bc',
    },
    imageText: {
        flex: 1,
        fontSize: 18,
        fontWeight: "600",
        width: '90%',
        // alignItems: 'center',
        // justifyContent: 'center'
        textAlign: 'left'
    },

    pickupDate: {
        width: '90%',
        flex: 1.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pickupTime: {
        flex: 1.2,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    descriptionTitle: {
        flex: 1,
        color: '#0ca3bc',
        fontSize: 18,
        fontWeight: "600",
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Images: {
        flex: 1.5,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8c745',
        width: 100,
        height: 100,
        borderRadius: 100,
        textAlign: 'center'
        
    },
    TextDisplay: {
        flex: 1,
        width:'90%',
        


    },
    Organization: {
        fontSize: 25,
        color: '#07a2bb',
        textAlign: 'left',
        fontWeight: "600"
    },

    address: {
        fontSize: 14,
        color: '#3b7687',
    },
    time: {
        fontSize: 14,
        color: '#6492a0',
    },

    Date: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'

    },
    description: {
        flex: 0.7,
        width: '90%',
        color: "black",
        marginBottom: 20
    },
    Month: {
        fontSize: 26,
        color: 'white',
        fontWeight: '400'

    },
    ImageSize: {
        width: 90,
        height: 90,
    },

    button: {
        flex: 0.3,
        padding: 5,

        borderTopColor: '#F0F0F0',
        borderBottomColor: '#F0F0F0',
        backgroundColor: 'white',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        marginBottom: 0,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1
    },
    button2: {
        flex: 0.3,
        padding: 5,

        borderTopColor: '#F0F0F0',
        borderBottomColor: '#F0F0F0',

        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1
    },
})
export default AcceptNFStyle;