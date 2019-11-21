import {StyleSheet} from 'react-native';

var DashStyle = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f7f7'
    },
    // Dashboard illustration
    backgroundImg:{
        width:'100%',  
        flex:4,
        top:0, 
        justifyContent:'center', 
        alignItems:'center',
    },
    // Donation Button
    donateContainer:{
        justifyContent:'center', 
        alignItems:'center', 
        marginLeft:0
    },
    donateButton:{
        backgroundColor:'#13bfd1',
        width:150,
        height:40,
        zIndex: 5,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
    },
    donateButtonText:{
        fontFamily:'Avenir',
        fontSize:20,
        fontWeight:'800',
        color:'#ffffff',
    },
    header:{
        color:'#0ca3bc',
        fontFamily:'Avenir',
        fontSize:28,
        fontWeight:'700',
        top: -10,
        width:'100%',
        marginLeft:0,
        lineHeight:36
    },

    //LeaderBoard
    innerLeadB: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leaderBoardMain: {
        flex: 1.6,
        backgroundColor: '#ffffff',
        shadowColor: '#aaaaaa',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 0,
        width: '92%',
        borderRadius: 30,
        top:-80,
        justifyContent:'center',
        alignItems:'center'
    },
    announcementText:{
        color: '#01657c', 
        fontSize: 20, 
        marginBottom: 5, 
        fontFamily:'Avenir', 
        fontWeight:'600' 
    },
    rankNumber:{
        color: '#0ca3bc', 
        fontSize: 23, 
        marginBottom: 5, 
        fontFamily:'Avenir', 
        fontWeight:'800'
    },

    // Upcoming schedule
    title:{
        fontSize:25,
        fontFamily:'Avenir',
        fontWeight:'500',
        marginBottom:15,
        color:'#0ca3bc'
    },
    today:{
        left:0, 
        flexDirection:'row', 
        alignItems:'center', 
        marginBottom:20
    },
    dateTitle:{
        fontFamily:'Avenir',
        fontSize:18,
        fontWeight:'600',
        color:'#727272',
        marginRight:20
    },
    line:{
        borderBottomWidth:2,
        borderColor:'#d8d8d8',
        width:250
    },
    notifContainer:{
        flex:3.5,
        width:'92%',
        justifyContent:'center', 
        alignItems:'center',
        top:-60, 
        borderRadius:30,
        backgroundColor:'#ffffff', 
        padding:20,
        shadowColor: '#aaaaaa',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        elevation:0,
        shadowRadius: 5,
    },
    notification:{
        flex:1,
        width:'100%',
        borderRadius:20, 
        justifyContent:'center',
        backgroundColor:'pink',
    },
    dateCircle:{
        width:10, 
        height:10, 
        backgroundColor:'#a4d638', 
        borderRadius:50, 
        marginRight:30,
        top:-10
    },
    companyName:{
        fontSize:20, 
        fontFamily:'avenir', 
        fontWeight:'500'
    },

});
export default DashStyle;