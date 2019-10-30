import {StyleSheet} from 'react-native';

var DashStyle = StyleSheet.create({
    main: {
        flex: 1,
        top: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pending: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#06a2bc',
        width: '92%',
        padding: 5
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
        width: 60,
        height: 60,
        backgroundColor: '#a4d638',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 40,
        marginLeft: 10
    },
    
    your: {
        marginTop: 0,
        flex: 0.5,
        borderRadius: 30,
        backgroundColor: 'white',
        shadowColor: '#aaaaaa',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.5,
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
        width: '92%',
        marginTop: 15,
        marginBottom: -50,
        borderRadius: 30
    },
    leaderDetail: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        padding: 10
    },
    leader: {
        flex: 1
    }
});
export default DashStyle;