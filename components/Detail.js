import React from 'react';
import {Text, View,Image,ScrollView,SafeAreaView } from 'react-native';
import {DailyMovie,WeeklyMovie,UpcomingMovie,TopRatedMovie,PopularMovie} from '../utils/urls.js'
import {styles} from '../styles/Dashboard.js'
import Display from '../Section/Display.js'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Listing from '../Reusable/Listing.js';
import Details from '../Reusable/Details';
export default function Detail ({navigation})
{

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={{flex:0.33}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.Heading}>Popular</Text> 
      <TouchableOpacity onPress={()=>{navigation.navigate('Details')}}>
        <Text style={styles.Heading}>More</Text></TouchableOpacity>
        </View>
      { <Display items={PopularMovie}  /> }
    </View>
    <View style={{flex:0.33}}>

      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.Heading}>Trending Daily</Text> 
        <TouchableOpacity onPress={()=>{navigation.navigate('Details')}}>
        <Text style={styles.Heading}>More</Text></TouchableOpacity>
        </View>
        { <Display items={DailyMovie}  /> }
    </View>
    <View style={{flex:0.33}}>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.Heading}>Trending Weekly</Text> 
        <TouchableOpacity onPress={()=>{navigation.navigate('Listing',WeeklyMovie)}}>
        <Text style={styles.Heading}>More</Text></TouchableOpacity>
        </View>
        { <Display items={WeeklyMovie}  /> }
    </View>
    <View style={{flex:0.33}}>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.Heading}>Latest</Text> 
        <TouchableOpacity onPress={()=>{navigation.navigate('Listing',TopRatedMovie)}}>
        <Text style={styles.Heading}>More</Text></TouchableOpacity>
        </View>
        { <Display items={TopRatedMovie}  /> }
    </View>
    <View style={{flex:0.33}}>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.Heading}>Upcoming</Text> 
        <TouchableOpacity onPress={()=>{navigation.navigate('Listing',UpcomingMovie)}}>
        <Text style={styles.Heading}>More</Text></TouchableOpacity>
        </View>
        { <Display items={UpcomingMovie}  /> }
    </View>


    </ScrollView>
    </SafeAreaView>
  );




};