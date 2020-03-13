/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Tabs from '@/screens/Tabs';

export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1 }}>
          <Tabs />
        </SafeAreaView>
      </>
    );
  }
}
