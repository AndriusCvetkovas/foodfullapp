import {StyleSheet} from 'react-native';

var ConfirmStyle = StyleSheet.create({

    main: {
        flex: 1,
        width: '95%'
    },
    donationInfoTop: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageText: {
        flex: 1,
        fontSize: 20,
        fontWeight: "600",
        margin: 20
    },
    imageBox: {
        flex: 1,
        flexDirection: 'row'
    },
    pickupDate: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    pickupTime: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }

})
export default ConfirmStyle;