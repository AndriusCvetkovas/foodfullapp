import {StyleSheet} from 'react-native';

var DashStyle = StyleSheet.create({
    main: {
        height: '110%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e3e3e3',
        paddingBottom: 20
    },
    pending: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        width: '100%'
    },
    innerPendingBox: {
        flex: 1,
        margin: 5,
        width: '95%',
        backgroundColor: 'white',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dateBubble: {
        width: 50,
        height: 50,
        backgroundColor: '#a4d638',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 50,
        marginLeft: 20
    },
    pendingDetail: {
        flex: 1
    }
});
export default DashStyle;