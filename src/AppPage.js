import * as React from 'react';

import {HistoryPage} from './HistoryPage';
import {HomePage} from './HomePage';
import {ConstantsPage} from './ConstantsPage';
import {ControlPage} from './ControlPage';
import { EvaluationPage } from './EvaluationPage';
import { HeaderComponent } from './components/Header'



import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

export const AppPage = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Screen"
            component={MyTabs}
            
            options={{
              headerStyle: {
                backgroundColor: '#011749',
              },
              headerTitle: () => (
                <HeaderComponent/>
              ),
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
        initialRouteName = "Home"
        //Dont show "Home" in the bottom tabs, but it is still possible to navigate to it:
        
        screenOptions={({ route, navigation }) => ({         
          headerTitle: () => (
            <HeaderComponent navigation={navigation}/>
          ),   
          //headerTitleAlign: 'center',
            
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
            "Home"
          ].includes(route.name)
            ? () => {
                return null;
              }
            : undefined,

            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Constants') {
                iconName = "add-circle-outline";
              } else if (route.name === 'History') {
                iconName = "list";
              } else if (route.name === 'Control') {
                iconName = "game-controller"
              } else {
                iconName = "cog"
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },      
        })}>

        <Tab.Screen name="Constants" component={ConstantsPage} />
        <Tab.Screen name="History" component={HistoryPage} />
        <Tab.Screen name="Control" component={ControlPage} />
        <Tab.Screen name="Evaluation" component={EvaluationPage} />
        <Tab.Screen name="Home" component={HomePage} />
        
      </Tab.Navigator>
    );
  }
 

const Tab = createBottomTabNavigator();