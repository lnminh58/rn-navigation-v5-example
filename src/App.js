/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import AppNavigator from './router';


export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </>
    );
  }
}
