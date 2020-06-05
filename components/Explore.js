import React from 'react';
import {Text, View,Image,ScrollView,SafeAreaView } from 'react-native';
import {DailyMovie,WeeklyMovie,UpcomingMovie,TopRatedMovie,PopularMovie} from '../utils/urls.js'
import {styles} from '../styles/Dashboard.js'
import Display from '../Section/Display.js'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Listing from '../Reusable/Listing.js';
export default function Browse ({navigation})
{

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={{flex:0.33}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.Heading}>Popular</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('Listing',TopRatedMovie)}}>
          <Text style={styles.Heading}>More</Text></TouchableOpacity>
        </View>
      { <Display items={PopularMovie}  /> }
    </View>

    </ScrollView>
    </SafeAreaView>
  );
};