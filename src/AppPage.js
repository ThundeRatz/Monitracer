import * as React from 'react';

import {HistoryPage} from './tabs/HistoryPage';
import {HomePage} from './tabs/HomePage';
import {ConstantsPage} from './tabs/ConstantsPage';
import {ControlPage} from './tabs/ControlPage';
import { EvaluationPage } from './tabs/EvaluationPage';
import { BluetoothListPage } from './tabs/BluetoothListPage';
import { HeaderComponent } from './components/header';
import { GoToTabInit} from './utils/nav';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
        
        screenOptions = {({ route, navigation }) => ({ 
          // Header configurations
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

            // tab bar configurations
            tabBarActiveBackgroundColor: '#047FF0', //thunderazul sucesso
            tabBarInactiveBackgroundColor: '#011749', //thunderazul
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',

            tabBarButton: [ 
              "HomePage","BluetoothListPage"
            ].includes(route.name)
              ? () => {
                  return null;  //Dont show "Home" and "BluetoothListPage" in the bottom tabs (but it is still possible to navigate to them):
                }
              : undefined,

            tabBarIcon: ({ color, size }) => {
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
              return <Ionicons name={iconName} size={size} color={color} />;
            },      
        })}>

        <Tab.Screen name="ConstantsPage" component={ConstantsPage} options={{tabBarLabel: "Constantes"}}/>
        <Tab.Screen name="HistoryPage" component={HistoryPage} options={{tabBarLabel: "Histórico"}}/>
        <Tab.Screen name="ControlPage" component={ControlPage} options={{tabBarLabel: "Controle"}}/>
        <Tab.Screen name="EvaluationPage" component={EvaluationPage} options={{tabBarLabel: "Testes"}}/>
        <Tab.Screen name="BluetoothListPage" component={BluetoothListPage}/>
        <Tab.Screen name="HomePage" component={HomePage} />
      </Tab.Navigator>
    );
  }
 

