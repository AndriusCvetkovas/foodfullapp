import {StyleSheet} from 'react-native';

var LeaderboardStyles = StyleSheet.create({
    mainView: {
        paddingTop: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        
    },
    background:{
        position:"absolute",
        backgroundColor: '#06a2bc',
        width: '100%',
        height:'70%',
        top:-90,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
    },
    title:{
        color: '#01657c', 
        fontSize: 20, 
        marginBottom: 5, 
        fontFamily: 'Avenir', 
        fontWeight: '600'
    },
    yourRank:{
        position:'absolute', 
        flexDirection:'column', 
        justifyContent:'center',       
        alignItems:'center', 
        top:50
    },
    yourBox: {
        flex: 0.12,
        flexDirection: 'row',
        width: '90%',
        backgroundColor: '#ffffff',
        shadowColor: '#aaaaaa',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 30,
        paddingTop: 25,
        paddingBottom: 20,
        top:15
    },
    imageBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    yourImage: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: 100,
        borderRadius: 100,
        marginBottom:5,
        left:10
    },
    rankBox: {
        marginTop: 0,
        flex: 0.8,
        width: '90%',
        height: 1000,
        backgroundColor: 'white',
        shadowColor: '#aaaaaa',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 30,
        top:30,
        flexDirection:'row'
    },
    yourStats: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:0
       
    },
    icons:{
        width: 35, 
        height: 35, 
        flex: 0.25
    },
    innerYourStats: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rankInnerBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.3,
        borderColor:'#B2B2B2',
        padding: 10
    },
    rankNum: {
        flex: 0.1,
        color: '#06a2bc',
        fontSize: 18,
        fontWeight: '600'
    },
    rankImage: {
        width: 60,
        height: 60,
        borderRadius: 100,
        marginLeft:5
    },
    rankAmount: {
        flex: 0.3,
        color: '#c3de95',
        fontSize: 15,
        fontWeight: '700'
    },
    rankAddress: {
        flex: 0.3,
        fontSize: 12,
        width:150
    },
    rankName: {
        flex: 0.2,
        color: '#06a2bc', 
        fontSize: 17,
        width:200
    },
    nameAddress: {
        marginLeft: 20,
        paddingRight: 50,
        flex: 0.5,
    }
});
export default LeaderboardStyles;