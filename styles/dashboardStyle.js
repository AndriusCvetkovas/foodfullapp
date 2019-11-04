import {StyleSheet} from 'react-native';

var DashStyle = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4f4f4'
    },
    pending: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#ffffff',
        width: '92%',
        padding: 5,
        top: -10,
        shadowColor: '#aaaaaa',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
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
    // Donation Button

    donateContainer: {
        flex:0.3,
        backgroundColor:'#dbf9fc',
        width:'92%',
        justifyContent:'center',
        top:10,
        marginBottom: 10,
        borderRadius: 50,
    },
    donateText: {
       zIndex: 5,
       position: "absolute",
       color: '#06a2bc',
       fontWeight: '500',
       fontSize:20,
       paddingLeft: '8%'

    },


    //LeaderBoard
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
        flex: 0.8,
        shadowColor: '#aaaaaa',
        backgroundColor: '#ffffff',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 2,
        elevation: 0,
        width: '92%',
        marginTop: 15,
        borderRadius: 30
    },
    weight:{
        marginLeft: '10%',
        fontWeight: '500',
        fontSize: 17,
        color: '#a4d638'
    },
    leaderDetail: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 0,
        padding: 10
    },
    leader: {
        flex: 1
    }
});
export default DashStyle;