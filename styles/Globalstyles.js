
import {StyleSheet, Platform} from 'react-native'
export const styles = StyleSheet.create({
    container:
    {
      flex:1,
      height:'80%',
      margin:'2%',
      alignItems:'center'
    },
    view:
    {
      flex:0.52,
      flexDirection:'column',
      backgroundColor:'#ebf0d6',
      borderRadius:20,
      justifyContent:'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
  
      elevation: 14,
    },
    logo:
    {
      width:150,
      height:150,
    },
  
    input:
    {
      backgroundColor:'rgba(255,255,255,.5)',
      flexDirection:'row',
      width:'95%',
      justifyContent:'flex-start',
      borderRadius:25,
      margin:10,
      borderEndColor:'black',
      fontFamily:Platform.OS==="android" ? 'CircularStd-Medium' : 'something.ttf'
    },
    buttonsView:
    {
      backgroundColor:'#ff6600',
      width:'80%',
      height:'9%',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10,
      margin:20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
  
      elevation: 14,
      
    },
    button:
    {
      fontSize:30,
      fontFamily:Platform.OS==="android" ? 'CircularStd-Medium' : 'something.ttf'
    },
    icon:
    {
      width:40,
      height:40
    },
    inputText:
    {
      fontSize:19,
      width:'80%',
      fontFamily:Platform.OS==="android" ? 'CircularStd-Medium' : 'something.ttf'
    },
    additional:
    {
      fontSize:13,fontFamily:Platform.OS==="android" ? 'CircularStd-Bold' : 'something.ttf'
    },
    additionallink:
    {

     fontSize:13,color:'#ff6600',fontFamily:Platform.OS==="android" ? 'CircularStd-Bold' : 'something.ttf'
    }
   

  });