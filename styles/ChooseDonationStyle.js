import {StyleSheet} from 'react-native';

var ChooseDonationStyle = StyleSheet.create({
    backgroundView: {
        flex:1,
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleContainer: {
    },
    title: {
        flex: 0.2,
        top: 50,
        fontFamily: 'avenir',
        fontSize: 25,
        textAlign: "center",
        marginBottom: 10,
        fontWeight: "500",
        color: "#06a2bc",
        textAlign:'center',
    },
    optionsContainer: {
        height:400,
        width:'98%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    optionOne:{
        backgroundColor: '#F4F5F7',
        flex: 1,
        width:360,
        borderRadius: 20,
        shadowOffset: { width: 2, height: 7 },
        shadowRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding:15,
        marginBottom: 40,
    },
    optionImage: {
        width: 85,
        height: 80,
        marginBottom: 20,
        marginLeft: 15,
    },
    optionTitle: {
        color: '#606060',
        fontSize: 25,
        fontWeight: '800',
        marginLeft: -8,
        marginBottom: 5,
        fontFamily:'Avenir'
    },
    optionInfo: {
        flex: 1,
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    optionDescription: {
        fontSize: 18,
        color: '#606060',
        width: 210,
        marginLeft: 20,
        top:-5
    },
    optionTwo:{
        backgroundColor: '#F4F5F7',
        flex: 1,
        width:360,
        borderRadius: 20,
        shadowOffset: { width: 2, height: 7 },
        shadowRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding:15,
        marginBottom: 40,
    },
    buttonContainer:{
        top:50,
        width:'98%',
        flex:0.1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        height:50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "white",
        borderWidth: 1.5,
        borderColor: '#0ca3bc',
      },
      buttonText: {
        color: '#0ca3bc',
        fontSize: 20
      },
});
export default ChooseDonationStyle;