import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,Image,ScrollView,SafeAreaView } from 'react-native';
import {styles} from '../styles/Dashboard.js'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Details from '../Reusable/Details.js';
import { useNavigation } from '@react-navigation/native'
export default function Display (props) 
{
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page,setPage]= useState(1);
  const Movie= `${props.items}${page}`;
  const baseUrl='https://image.tmdb.org/t/p/w500';
  useEffect(() => {
    fetch(Movie)
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  },
   []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={{flex:0.33}}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList horizontal={true}
        showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Details', {
                itemId:item.id,
                otherParam:item,
              })}>
            <Image source={{uri:baseUrl+""+item.poster_path}} style={{width:100,height:150,margin:5,borderRadius:15}}/>
              </TouchableOpacity>                
            </View>

          )}
          keyExtractor={({ id }) => id.toString()}
        />
      )}
    </View>


    </ScrollView>
    </SafeAreaView>
  );
}
