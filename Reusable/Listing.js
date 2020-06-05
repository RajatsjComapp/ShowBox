
import React, { Component,useState,useEffect} from 'react';


import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image
} from 'react-native';


export default Listing = (props) => 
{
  const[loading,setLoading]=useState(true);
  const[serverData,setserverData]=useState([]);
  const[fetching_from_server,setfetching_from_server]=useState(false);
  const[page,setPage]=useState(1)
  const baseUrl='https://image.tmdb.org/t/p/w500';
  const URL = props.route.params;
  useEffect(() => {
    fetch(`${URL}${page}`)
    .then(response => response.json())
    .then(responseJson =>setserverData([...serverData, ...responseJson.results]))
    .then( setPage(page+1))
    
    .catch((error) => console.error(error))
    .finally(() => setLoading(false))
  },
   []);


  const loadMoreData = () => {
     setfetching_from_server(true)
     fetch(`${URL}${page}`)
        .then(response => response.json())
        .then(responseJson =>setserverData([...serverData, ...responseJson.results]))
        .then( setPage(page+1))
        .then(setfetching_from_server(false))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
         [];
      }
 const renderFooter= () => {
    return (
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={()=>loadMoreData()}
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {fetching_from_server ? (
            <ActivityIndicator color="white" style={{ marginLeft: 8 }} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  }

    return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            style={{ width: '100%' }}
            keyExtractor={(item, index) => index}
            data={serverData}
            renderItem={({ item, index }) => (
              <View style={styles.item}>
              <TouchableOpacity>
             { <Image source={{uri:baseUrl+""+item.poster_path}} style={{width:100,height:100,margin:5,borderRadius:15}}/>}
             </TouchableOpacity>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListFooterComponent={renderFooter()}
      />
        )}
      </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  item: {
    padding: 10,
  },
  separator: {
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});