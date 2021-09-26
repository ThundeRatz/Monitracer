/**
 * @file footer.js
 *
 * @brief footer list components
 *
 * @date 09/2021
 */

 import React, {useEffect} from 'react';
//import { createBottomTabNavigator, createAppContainer } from 'react-native-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ConstantsPage } from '../ConstantsPage';
import { HomePage } from '../HomePage';

export const Tab = createBottomTabNavigator();

export const MyTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Settings" component={ConstantsPage} />
      </Tab.Navigator>
    );
  }

export const Footer = () => {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
      );
}
