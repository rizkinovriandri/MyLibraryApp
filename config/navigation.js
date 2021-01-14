import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';

import Signup from '../pages/Signup';
import Login from '../pages/Login';
import InputBuku from '../pages/InputBuku';
import ListBuku from '../pages/ListBuku';
import ViewBuku from '../pages/ViewBuku';
import Splash from '../pages/Splash';



const handleLogout = () => {
  auth()
  .signOut()
  .then(() => alert('Signed out'));
}

const NavStack = createStackNavigator();
const NavStackScreen = () => (
    <NavStack.Navigator 
      screenOptions={{
        headerShown: false
      }} 
      initialRouteName="Splash">
      <NavStack.Screen name="Signup" component={Signup} />
      <NavStack.Screen name="Splash" component={Splash} />
      <NavStack.Screen name="Login" component={Login} />
      <NavStack.Screen name="InputBuku" component={InputBuku} />
      <NavStack.Screen name="ListBuku" component={ListBuku} />
      <NavStack.Screen name="ViewBuku" component={ViewBuku} />
      <NavStack.Screen name="Home" component={NavDrawerScreen} />
      
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

const NavDrawer = createDrawerNavigator();
const NavDrawerScreen = () => (
  <NavDrawer.Navigator
    drawerContentOptions={{
      activeTintColor: '#fff',
      itemStyle: { marginVertical: 5 },
    }}

    drawerStyle={{
      backgroundColor: '#00a4e4',
      width: 240,
    }} 
    
    screenOptions={{
      headerShown: true,
      title: 'My Library'
    }} 
    initialRouteName="HomeTab">
    <NavDrawer.Screen  name="HomeTab" component={NavTabScreen} options={{ drawerLabel: 'Home' }} />
    <NavDrawer.Screen  name="Logout" component={NavTabScreen} options={{ drawerLabel: 'Logout' }} />
  </NavDrawer.Navigator>
)

const Navigation = () => (
  <NavigationContainer>
    <NavStackScreen />
  </NavigationContainer>
)

export default Navigation;