import React  from 'react'
import { View, TextInput, StyleSheet,Image, Text,} from 'react-native'

const baseUrl='https://image.tmdb.org/t/p/w500';


function Detail({route}) {
   
   const {otherParam}= route.params;
    return (
      <View style={{ flex: 1,margin:0 }}>
 
        <Image source={{uri:baseUrl+""+otherParam.backdrop_path}} style={{width:400,height:200,margin:5,borderRadius:15,resizeMode:'cover'}}/>
   
        <Text style={{position:'absolute',padding:12}}>{otherParam.original_title}</Text>
        <View style={{margin:12}}>
        <Text style={{fontSize:20,textDecorationLine: 'underline',fontWeight: 'bold',marginBottom:7}}>Overview</Text>
        <Text style={{fontSize:14,fontFamily: 'sans-serif-medium',fontWeight:'normal'}}>{otherParam.overview}</Text>
        
        </View>
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly',marginTop:20}}> 
         <Text style={{fontSize:16,fontWeight: 'bold'}}>User Score</Text>
        <Text style={{fontSize:16,fontWeight: 'bold'}} >Release Date   </Text>
        <Text style={{fontSize:16,fontWeight: 'bold'}} >Vote Count  </Text>
        </View>
        <View style={{flex:4,flexDirection:'row',justifyContent:'space-evenly'}}> 
        <Text style={otherParam.vote_average<5?{color:'red',fontSize:18}:otherParam.vote_average===5?{color:'yellow',fontSize:16}:{color:'blue',fontSize:18}}>{otherParam.vote_average
        } </Text> 
        <Text style={{fontSize:16}} > {otherParam.release_date}  </Text>
        <Text style={otherParam.vote_count<1000?{color:'red',fontSize:18}:otherParam.vote_count===1000?{color:'yellow',fontSize:16}:{color:'green',fontSize:16}}>{otherParam.vote_count
        } </Text> 
        </View>
      </View>
    );
  }
export default Detail;