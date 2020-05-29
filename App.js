/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {
  Text, View,StyleSheet,SafeAreaView,Image,TextInput, ScrollView,TouchableOpacity
} from 'react-native';
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Dash from './components/Dash'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
export default class App extends React.Component {

state={
  loggedIn:true
}

render()
{
  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Signup" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dash" component={Dash} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
}
