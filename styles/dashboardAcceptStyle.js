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
        top:35, 
        justifyContent:'center', 
        alignItems:'center',
    },

    // Donation Button
    header:{
        color:'#0ca3bc',
        fontFamily:'Avenir',
        fontSize:28,
        fontWeight:'700',
        top: -30,
        width:'100%',
        marginLeft:0,
        lineHeight:36
    },
    searchButton:{
        backgroundColor:'#13bfd1',
        width:150,
        height:40,
        zIndex: 5,
        top: -10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
    },
    searchButtonText:{
        fontFamily:'Avenir',
        fontSize:20,
        fontWeight:'800',
        color:'#ffffff',
    },
    //end of donation button

    titles:{
        fontSize:25,
        fontFamily:'Avenir',
        fontWeight:'500',
        color:'#0ca3bc',
        padding:10
    },

    // Donation Notifications
    donations: {
        flexDirection:'row', 
        flex:1.2,
        width:'92%',
        justifyContent:'center', 
        alignItems:'center',
        top:-40, 
        borderRadius:20,
        backgroundColor:'#ffffff', 
        shadowColor: '#aaaaaa',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        elevation:0,
        shadowRadius: 5,
        marginBottom:30,
    },
    donationCircle:{
        alignItems:'center',
        backgroundColor:'#a4d638',
        width:45,
        height:45,
        justifyContent:'center',
        borderRadius:100,
        left:-10
    },
    circleText:{
        fontFamily:'Avenir',
        color:'#ffffff',
        fontSize:20,
        fontWeight:'700'
    },

    // Upcoming schedule
    notifContainer:{
        flex:4,
        width:'92%',
        justifyContent:'center', 
        alignItems:'center',
        top:-50, 
        borderRadius:30,
        backgroundColor:'#ffffff', 
        padding:20,
        shadowColor: '#aaaaaa',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        elevation:0,
        shadowRadius: 5,
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
    // This is the container that holds the upcoming pickups
    upcomingContainer:{
        marginTop:10
    },
    upcomingPickup:{
        flexDirection:'row', 
        alignItems:'center'
    },
    companyName:{
        fontSize:20, 
        fontFamily:'avenir', 
        fontWeight:'500'
    },
    notification:{
        flex:1,
        width:'100%',
        borderRadius:20, 
        justifyContent:'center',
        backgroundColor:'pink',
    },
    greenCircle:{
        width:10, 
        height:10, 
        backgroundColor:'#a4d638', 
        borderRadius:50, 
        marginRight:30
    },
});
export default DashStyle;