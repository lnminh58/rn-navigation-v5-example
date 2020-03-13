import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStackNav from './MainStackNav';

const AppNavigator = () => (
  <NavigationContainer>
    <MainStackNav />
  </NavigationContainer>
);

export default AppNavigator;
