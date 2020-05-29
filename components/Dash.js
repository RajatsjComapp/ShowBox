import * as React from 'react';
import {
  Text, View,SafeAreaView,Image,TextInput, ScrollView,TouchableOpacity
} from 'react-native';
import Browse from './Browse.js';
import Library from './Library.js';
import Explore from './Explore.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



export default function Dash()
{
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator>
          <Tab.Screen name="Browse" component={Browse} />
          <Tab.Screen name="Explore" component={Explore} />
          <Tab.Screen name="Library" component={Library} />
        </Tab.Navigator>
      
    );
}