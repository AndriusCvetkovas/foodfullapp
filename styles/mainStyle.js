import {StyleSheet} from 'react-native';

var mainStyle = StyleSheet.create({
    App:{
        maxHeight: '100%',
        height: '100%'
    },
    AppHeader:{
        maxHeight:'20%',
        height:'13%',
        top: 0 ,
        backgroundColor: 'transparent'

    },

    AppContent:{
        flex:1,
        top: 0,
        height: '100%'
    },

    AppFooter:{
        backgroundColor:'#f6fafd',
        bottom: 0,
        flexDirection: 'row',
        
    }
 });

export default mainStyle