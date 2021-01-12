import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Signup from '../pages/Signup';
import Login from '../pages/Login';
import InputBuku from '../pages/InputBuku';


const NavStack = createStackNavigator();
const NavStackScreen = () => (
    <NavStack.Navigator 
      screenOptions={{
        headerShown: false
      }} 
      initialRouteName="Login">
      <NavStack.Screen name="Signup" component={Signup} />
      <NavStack.Screen name="Login" component={Login} />
      <NavStack.Screen name="InputBuku" component={InputBuku} />
    </NavStack.Navigator>
)

const Navigation = () => (
  <NavigationContainer>
    <NavStackScreen />
  </NavigationContainer>
)

export default Navigation;