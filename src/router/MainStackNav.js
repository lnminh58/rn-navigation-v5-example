import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { get } from 'lodash';

import Detail from '@/screens/Detail';
import AnimateHeader from '@/screens/AnimateHeader';
import FixedHeader from '@/screens/FixedHeader';
import Tabs from '@/screens/Tabs';
import Spring from '@/screens/Spring';
import SpringGesture from '@/screens/SpringGesture';

import BottomTabNav from './BottomTabNav';

const Stack = createStackNavigator();

const MainStackNav = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#fafafa',
      },
      headerTitleStyle: {
        fontWeight: '700',
      },
      headerTintColor: '#ff6348',
    }}
  >
    <Stack.Screen
      name="BottomTab"
      component={BottomTabNav}
      options={props => {
        const routesName = get(props, 'route.state.routeNames', ['Home']);
        const index = get(props, 'route.state.index', 0);
        const headerTitle = routesName[index];
        return {
          headerTitle,
        };
      }}
    />
    <Stack.Screen name="Detail" component={Detail} />
    <Stack.Screen
      name="AnimateHeader"
      component={AnimateHeader}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="FixedHeader"
      component={FixedHeader}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="HeaderCollapsibleTabs" component={Tabs} />
    <Stack.Screen name="Spring" component={Spring} />
    <Stack.Screen name="SpringGesture" component={SpringGesture} />
  </Stack.Navigator>
);

export default MainStackNav;
