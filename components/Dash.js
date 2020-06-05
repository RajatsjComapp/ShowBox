import * as React from 'react';
import {
  Text, View,SafeAreaView,Image,TextInput, ScrollView,TouchableOpacity
} from 'react-native';
import Browse from './Browse.js';
import Library from './Library.js';
import Explore from './Explore.js';
import Television from '../components/Television.js'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function Dash()
{
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator
        initialRouteName="Browse"
        tabBarOptions={{
          activeTintColor: '#ff6600',
        }}
        >
          <Tab.Screen name="Movie"
            component={Browse}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ tintColor }) => (
                <Image
                  source={require('../icons/TabBar/Browse.png')}
                  style={{width: 26, height: 26}}
                />
              ) 
            }}
          
          />
          <Tab.Screen name="TV"
            component={Television}
            options={{
              tabBarLabel: 'TV',
              tabBarIcon: ({ tintColor }) => (
                <Image
                  source={require('../icons/TabBar/Library.png')}
                  style={{width: 26, height: 26}}
                />
              ) 
            }}
          />
          <Tab.Screen name="Explore"
           component={Explore}
            options={{
              tabBarLabel: 'Explore',
              tabBarIcon: ({ tintColor }) => (
                <Image
                  source={require('../icons/TabBar/Explore.png')}
                  style={{width: 26, height: 26}}
                />
              ) 
            }}
          />
          <Tab.Screen name="Library"
            component={Library}
            options={{
              tabBarLabel: 'Library',
              tabBarIcon: ({ tintColor }) => (
                <Image
                  source={require('../icons/TabBar/Library.png')}
                  style={{width: 26, height: 26}}
                />
              ) 
            }}
          />
          
        </Tab.Navigator>
      
    );
}