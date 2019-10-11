import {StyleSheet} from 'react-native';

var mainStyle = StyleSheet.create({
    App:{
        minHeight: '100%'
    },
    AppHeader:{
        height:'20%',
        top: 0 ,
        resizeMode: 'cover'

    },

    AppContent:{
        minHeight: '70%'
    },

    AppFooter:{
        backgroundColor:'#f6fafd',
        bottom: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
 });

export default mainStyle