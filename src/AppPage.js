import * as React from 'react';

import {HistoryPage} from './tabs/HistoryPage';
import {HomePage} from './tabs/HomePage';
import {ConstantsPage} from './tabs/ConstantsPage';
import {ControlPage} from './tabs/ControlPage';
import { EvaluationPage } from './tabs/EvaluationPage';
import { BluetoothListPage } from './tabs/BluetoothListPage';
import { HeaderComponent } from './components/Header';
import { GoToTabInit} from './utils/nav';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export const AppPage = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Screen"
            component={MyTabs}
            options={{
              headerShown: false
            }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    ); 
}

function MyTabs() {
    return (
      <Tab.Navigator 
        initialRouteName = "HomePage"
        //Dont show "Home" in the bottom tabs, but it is still possible to navigate to it:
        
        screenOptions={({ route, navigation }) => ({ 
          headerTitle: () => (
            <HeaderComponent navigation={navigation}/>
          ),   
            
          headerStyle: {
            backgroundColor: '#011749',
          },
          
          headerTitleContainerStyle: {
            backgroundColor: 'green',
            alignItems: 'center',
            flex : 200,  // ???
            flexDirection: 'row',
            justifyContent: 'space-evenly'
          },

          tabBarActiveBackgroundColor: '#047FF0', //thunderazul sucesso
          tabBarInactiveBackgroundColor: '#011749', //thunderazul
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',

          tabBarButton: [
            "HomePage","BluetoothListPage"
          ].includes(route.name)
            ? () => {
                return null;
              }
            : undefined,

            tabBarIcon: ({ focused, color, size }) => {
              GoToTabInit(navigation);
              let iconName;
  
              if (route.name === 'ConstantsPage') {
                iconName = "add-circle-outline";
              } else if (route.name === 'HistoryPage') {
                iconName = "list";
              } else if (route.name === 'ControlPage') {
                iconName = "game-controller"
              } else  {
                iconName = "cog"
              }
              // You can return any component that you like here!
              if (!(route.name === 'BluetoothListPage')) {
                return <Ionicons name={iconName} size={size} color={color} />;
              }
              
            },      
        })}>

        <Tab.Screen name="ConstantsPage" component={ConstantsPage} />
        <Tab.Screen name="HistoryPage" component={HistoryPage} />
        <Tab.Screen name="ControlPage" component={ControlPage} />
        <Tab.Screen name="EvaluationPage" component={EvaluationPage} />
        <Tab.Screen name="BluetoothListPage" component={BluetoothListPage} />
        <Tab.Screen name="HomePage" component={HomePage} />
      </Tab.Navigator>
    );
  }
 

