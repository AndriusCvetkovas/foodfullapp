import {StyleSheet} from 'react-native';
var styles = StyleSheet.create({
    mainbody:{
    flex:1,
    alignItems:"center",
    top: 80
  },
  headers:{
    width:200,
    height:100,
    marginTop:20,
},

contents:{
    width:300,
    height:50,
    // backgroundColor:"red",
  
},

  imgPosted:{
      width:350,
      height:265,
      marginTop: 40,
  },
  titleHeader:{
     textAlign:"center",
     fontSize:30,
     fontWeight:"600",
     color: "#0ca3bc",
  },
  contentPosts:{
    textAlign:"center",
    fontSize:15,
    fontWeight:"400",
    color: "black",
 },
 buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:5,
    marginBottom:20,
    width:250,
    borderRadius:30,

  },
  MakePost: {
    backgroundColor: "#0ca3bc",
    borderWidth: 1.5,
    borderColor: '#0ca3bc',
    top:30,
    height:50
  },

  ViewPost: {
    backgroundColor: "white",
    borderWidth: 1.5,
    borderColor: '#0ca3bc',
    top:30,
    height:50
  },
  B1: {
    color: 'white',
    fontSize: 20
  },
  B2: {
    color: '#0ca3bc',
    fontSize: 20
  },

});
export default styles;
