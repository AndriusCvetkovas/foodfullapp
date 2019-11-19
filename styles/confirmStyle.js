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
        justifyContent:'center'
    },
    imageText: {
        flex: 0.4,
        fontSize: 18,
        fontWeight: "600",
        width: '90%',
        marginTop:10,
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
        marginTop: 30,
    },
    pickupTime: {
        flex: 0.5,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    descriptionTitle: {
        flex: 0.3,
        color: '#0ca3bc',
        fontSize: 18,
        marginTop: 10,
        width: '90%'
    },
    Images:{
        // flex:1,
        margin: 6,
        justifyContent:'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor:'#f8c745',
        width: 75,
        height: 75,
        borderRadius: 100,
        transform:[
            {scaleX: 0.80},
            {scaleY: 0.85}
          ]

    },
    Organization:{
        fontSize:18,
        color:'#07a2bb',
    },

    address:{
        fontSize:14,
        color:'#3b7687',
    },
    time:{
        fontSize:14,
        color:'#6492a0',
    },

    Date:{
       fontSize:30,
       color:'white',
       fontWeight:'bold'

    },
    description:{
        flex: 0.7,
        width: '90%',
        color: "black",
        marginBottom: 20
    },

})
export default ConfirmStyle;