import {StyleSheet} from 'react-native';

var mainStyle = StyleSheet.create({
    App:{
        maxHeight: '100%',
        height: '100%'
    },
    AppHeader:{
        maxHeight:'20%',
        height:'20%',
        top: 0 ,
        resizeMode: 'cover'

    },

    AppContent:{
        flex:1,
        height: '100%',
        padding: 10,
    },

    AppFooter:{
        backgroundColor:'#f6fafd',
        bottom: 0,
        flexDirection: 'row'
    }
 });

export default mainStyle