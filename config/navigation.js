import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Signup from '../pages/Signup';
import Login from '../pages/Login';
import InputBuku from '../pages/InputBuku';
import ListBuku from '../pages/ListBuku';
import ViewBuku from '../pages/ViewBuku';

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
      <NavStack.Screen name="ListBuku" component={ListBuku} />
      <NavStack.Screen name="ViewBuku" component={ViewBuku} />
      <NavStack.Screen name="Home" component={NavTabScreen} />
      
    </NavStack.Navigator>
)

const NavTab = createMaterialTopTabNavigator();
const NavTabScreen = () => (
  <NavTab.Navigator 
    screenOptions={{
      headerShown: false
    }} 
    initialRouteName="ListBuku">
    <NavTab.Screen name="ListBuku" component={ListBuku} />
    <NavTab.Screen name="InputBuku" component={InputBuku} />
  </NavTab.Navigator>
)


const Navigation = () => (
  <NavigationContainer>
    <NavStackScreen />
  </NavigationContainer>
)

export default Navigation;