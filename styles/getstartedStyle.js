import {StyleSheet} from 'react-native';

var getstartedStyle = StyleSheet.create({

    comp: {
        flex: 1,
      },
      wrapper: {
      },
      buttoncontainer:{
        flex: 0.2, 
        position: 'absolute', 
        top: 670, 
        zIndex: 2, 
        textAlign: 'center', 
        width: '100%'
      },
      button:{
        height: 20, 
        top: 140, 
        width: 38, 
        alignSelf: 'center', 
        textAlign: 'justify'
      },
      header: {
        fontFamily: 'Avenir',
        fontSize: 35,
        width: '90%',
        fontWeight: '700',
        color: '#3dbfd2',
        paddingLeft: 20,
        zIndex: 2,
        flex: 1,
        top: 175
      },
      subheader: {
        fontFamily: 'Avenir',
        fontSize: 35,
        width: '90%',
        fontWeight: '700',
        color: '#3dbfd2',
        top: 200,
        textAlign: 'center',
        flex: 1,
      },
      desc: {
        fontFamily: 'Avenir',
        fontSize: 23,
        width: '90%',
        fontWeight: '500',
        color: '#3dbfd2',
        paddingLeft: 20,
        flex: 1,
        paddingTop: 20
      },
      animation: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        width: 350,
        flex: 1.2
      },
      slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
      },
      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
      },
      slide4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
      },
      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
      },
      nextButton: {
        flex: 0.15,
        backgroundColor: '#3dbfd2',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 20,
        fontFamily: 'Avenir'
      },
      loginbut:{
        borderRadius: 30, 
        width: 200, 
        height: 45, 
        position: 'absolute', 
        bottom: 140, 
        justifyContent: 'center', 
        alignItems: 'center', 
        zIndex: 2, 
        backgroundColor: '#06a2bc' 
      },
    })
    

export default getstartedStyle