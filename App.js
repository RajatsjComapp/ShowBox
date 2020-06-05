
import React from 'react';

import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Dash from './components/Dash'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Listing from './Reusable/Listing.js'
import Details from './Reusable/Details.js'
import Display from './Section/Display.js';
export default class App extends React.Component {

render()
{
  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Signup" screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dash" component={Dash} />
      <Stack.Screen name="Listing" component={Listing} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Display" component={Display} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
}
