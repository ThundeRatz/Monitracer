import * as React from 'react';

import {HistoryPage} from './HistoryPage';
import {HomePage} from './HomePage';
import {ConstantsPage} from './ConstantsPage';
import {ControlPage} from './ControlPage';
import { EvaluationPage } from './EvaluationPage';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export const AppPage = () => {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
      );
}

function MyTabs() {
    return (
      // a initialRouteName não ta funcionando ainda, deveria indicar a página inicial (HomePage)
      //<Tab.Navigator initialRouteName = {HomePage}>
      <Tab.Navigator> 
        <Tab.Screen name="Constants" component={ConstantsPage} />
        <Tab.Screen name="History" component={HistoryPage} />
        <Tab.Screen name="Control" component={ControlPage} />
        <Tab.Screen name="Evaluation" component={EvaluationPage} />
      </Tab.Navigator>
    );
  }
 

const Tab = createBottomTabNavigator();