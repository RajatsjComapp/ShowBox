import React from 'react';
import {Text, View,Image,ScrollView,SafeAreaView } from 'react-native';
import {PopularTV,TVOntheAir,TVAiringToday} from '../utils/urls.js'
import {styles} from '../styles/Dashboard.js'
import Display from '../Section/Display.js'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Listing from '../Reusable/Listing.js';
import Details from '../Reusable/Details';
export default function Browse ({navigation})
{

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={{flex:0.33}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.Heading}>Popular</Text> 
      <TouchableOpacity onPress={()=>{navigation.navigate('Listing',PopularTV)}}>
        <Text style={styles.Heading}>More</Text></TouchableOpacity>
        </View>
      { <Display items={PopularTV}/> }
    </View>
    <View style={{flex:0.33}}>

      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.Heading}>On The Air Shows</Text> 
        <TouchableOpacity onPress={()=>{navigation.navigate('Listing',TVOntheAir)}}>
        <Text style={styles.Heading}>More</Text></TouchableOpacity>
        </View>
        { <Display items={TVOntheAir}  /> }
    </View>
    <View style={{flex:0.33}}>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.Heading}>Airing Today</Text> 
        <TouchableOpacity onPress={()=>{navigation.navigate('Listing',TVAiringToday)}}>
        <Text style={styles.Heading}>More</Text></TouchableOpacity>
        </View>
        { <Display items={TVAiringToday}  /> }
    </View>

    </ScrollView>
    </SafeAreaView>
  );




};