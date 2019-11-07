import {StyleSheet} from 'react-native';

var DashStyle = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f7f7'
    },
    pending: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#ffffff',
        width: '92%',
        top: -20,
    },
    innerPendingBox: {
        flex: 1,
        margin: 5,
        width: '95%',
        backgroundColor: '#ffffff',
        borderRadius: 15,
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
        flex:0.28,
        backgroundColor:'#dbf9fc',
        width:'92%',
        justifyContent:'center',
        top:0,
        marginBottom: 12,
        borderRadius: 50,
    },
    donateText: {
       zIndex: 5,
       position: "absolute",
       color: '#06a2bc',
       fontWeight: '500',
       fontSize:20,
       paddingLeft: '10%',
       fontFamily: 'Avenir',
       fontWeight: '800'

    },


    //LeaderBoard
    your: {
        flex: 0.4,
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
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 0,
        width: '92%',
        marginTop: 10,
        borderRadius: 30,
        marginBottom:20
    },

    // for each leader on leaderboard

    ranking:{
        padding:10,
        color: '#06a2bc',
        fontFamily: 'Avenir',
        fontSize: 22,
        fontWeight:'500'
    },
    leaderName:{
        fontFamily: 'Avenir',
        fontWeight: '500',
        color: '#06a2bc',
        fontSize: 18
    },
    location:{
        marginTop: 3,
        fontFamily: 'DidactGothic-Regular',
        color: '#066a87'
    },
    weight:{
        marginLeft: '10%',
        fontWeight: '500',
        fontSize: 17,
        color: '#a4d638',
         fontFamily: 'Avenir',
    },
    leaderDetail: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 0,
        padding: 10,
    },

    
    leader: {
        flex: 1
    }
});
export default DashStyle;