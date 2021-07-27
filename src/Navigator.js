import React from 'react';

import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import OneScreen from './OneScreen';
import OtherScreen from './OtherScreen';

// const StackHome = createStackNavigator(); // safe area works
const StackHome = createNativeStackNavigator(); // safe area dont works

const HomeNavigator = () => {
  return (
    <StackHome.Navigator screenOptions={{headerShown: false}}>
      <StackHome.Screen name="One" component={OneScreen} />
    </StackHome.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={HomeNavigator} />
    </Drawer.Navigator>
  );
};

const StackRoot = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <StackRoot.Navigator screenOptions={{headerShown: false}}>
      <StackRoot.Screen name="Drawer" component={DrawerNavigator} />
      <StackRoot.Screen name="Other" component={OtherScreen} />
    </StackRoot.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
