import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    comp:{
        flex:1,
        justifyContent:'center', 
        alignItems:'center',
        backgroundColor:'#ffffff'
      },
      wrapper: {
       
      },
      header:{
        fontFamily: 'Avenir',
        fontSize: 25,
        fontWeight:'700',
        color: '#3dbfd2',
        top:0,
      },
      subheader:{
        fontFamily: 'Avenir',
        fontSize: 35,
        width:'90%',
        fontWeight:'700',
        color: '#3dbfd2',
        top:-30,
        textAlign:'center',
      },
      desc:{
        fontFamily: 'Avenir',
        fontSize: 20,
        width:'90%',
        fontWeight:'500',
        color: '#3dbfd2',
        paddingLeft:20
      },
      slide1: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#ffffff',
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
      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
      },
      nextButton: {
        flex: 0.15,
        backgroundColor: '#3dbfd2',
        width: 100,
        justifyContent:'center', 
        alignItems:'center',
        borderRadius: 30
      }

}); export default styles;