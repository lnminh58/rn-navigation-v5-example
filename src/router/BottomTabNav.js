import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '@/screens/Home';
import Inbox from '@/screens/Inbox';
import Setting from '@/screens/Setting';

const ACTIVE_COLOR = '#ff6348';
const INACTIVE_COLOR = '#2f3542';
const ICON_SIZE = 25;

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

const BottomTabNav = () => (
  <Tab.Navigator
    activeColor={ACTIVE_COLOR}
    inactiveColor={INACTIVE_COLOR}
    barStyle={{ backgroundColor: '#fafafa' }}
    shifting
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ focused, color }) => (
          <Icon
            name={focused ? 'hexagon-slice-6' : 'hexagon-slice-3'}
            color={color}
            size={ICON_SIZE}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Inbox"
      component={Inbox}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="message-bulleted" color={color} size={ICON_SIZE} />
        ),
      }}
    />
    <Tab.Screen
      name="Setting"
      component={Setting}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="settings-box" color={color} size={ICON_SIZE} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomTabNav;
