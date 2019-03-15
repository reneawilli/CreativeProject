import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import HopeView from '../views/hopeView';
import InspireView from '../views/inspireView';
import LoveView from '../views/loveView';
import MapView from '../views/mapView';
import AwesomePlaceView from '../views/awesomePlaceView';

const HomeTabNavigator = createMaterialTopTabNavigator(
  {
    Hope: HopeView,
    Inspire: InspireView,
    Love: LoveView,
    Map: MapView,  
    Places:  AwesomePlaceView,
},
{
  initialRouteName: 'Hope',
  order: ['Hope', 'Inspire', 'Love', 'Map', 'Places'],
  backBehavior: 'initialRoute',
  swipeEnabled: true,
});

export default HomeTabNavigator;
