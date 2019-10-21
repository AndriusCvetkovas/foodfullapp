import {StyleSheet} from 'react-native';

var DashStyle = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pending: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#066a87',
        width: '95%'
    },
    innerPendingBox: {
        flex: 1,
        margin: 10,
        width: '95%',
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dateBubble: {
        width: 50,
        height: 50,
        backgroundColor: '#c3de95',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 50
    },
    pendingDetail: {
        flex: 1
    },
    your: {
        marginTop: 0,
        flex: 1,
        borderRadius: 30,
        backgroundColor: 'white',
        shadowColor: '#aaaaaa',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    innerLeadB: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    leaderBoardMain: {
        flex: 2,
        shadowColor: '#aaaaaa',
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 0,
        width: '95%',
        marginTop: 15,
        marginBottom: -50,
        borderRadius: 30
    },
    leaderDetail: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        padding: 10
    },
    leader: {
        flex: 1
    }
});
export default DashStyle;