import * as React from 'react';

import {HistoryPage} from './tabs/HistoryPage';
import {HomePage} from './tabs/HomePage';
import {ConstantsPage} from './tabs/ConstantsPage';
import {ControlPage} from './tabs/ControlPage';
import {EvaluationPage} from './tabs/EvaluationPage';
import {BluetoothListPage} from './tabs/BluetoothListPage';
import {HeaderComponent} from './components/header';
import {NavigationManager} from './utils/nav';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function MyTabs() {
  pagesArray = [
    {
      pageComponent: HomePage,
      screenName: 'HomePage',
      tabBarLabel: 'HomePage',
    },
    {
      pageComponent: BluetoothListPage,
      screenName: 'BluetoothListPage',
      tabBarLabel: 'BluetoothListPage',
    },
    {
      pageComponent: ConstantsPage,
      screenName: 'ConstantsPage',
      tabBarLabel: 'Constantes',
    },
    {
      pageComponent: HistoryPage,
      screenName: 'HistoryPage',
      tabBarLabel: 'Histórico',
    },
    {
      pageComponent: ControlPage,
      screenName: 'ControlPage',
      tabBarLabel: 'Controle',
    },
    {
      pageComponent: EvaluationPage,
      screenName: 'EvaluationPage',
      tabBarLabel: 'Testes',
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={({route, navigation}) => ({
        // Header configurations
        headerTitle: () => <HeaderComponent navigation={navigation} />,
        
        headerStyle: {
          backgroundColor: '#011749',
        },

        headerTitleContainerStyle: {
          backgroundColor: 'green',
          alignItems: 'center',
          flex: 200, // ???
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        },

        // tab bar configurations
        tabBarHideOnKeyboard: true,

        tabBarActiveBackgroundColor: '#047FF0', //thunderazul sucesso
        tabBarInactiveBackgroundColor: '#011749', //thunderazul
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        
        tabBarButton: ['HomePage', 'BluetoothListPage'].includes(route.name)
          ? () => {
              return null; //Dont show "Home" and "BluetoothListPage" in the bottom tabs (but it is still possible to navigate to them):
            }
          : undefined,

        tabBarIcon: ({color, size}) => {
          NavigationManager.initTabNavigation(navigation);
          let iconName;

          const iconMap = {
            ConstantsPage: 'add-circle-outline',
            HistoryPage: 'list',
            ControlPage: 'game-controller',
            EvaluationPage: 'cog',
          };
          
          iconName = iconMap[route.name] ?? 'help-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      {pagesArray.map((element, index) => {
        return (
          <Tab.Screen
            key={index}
            name={element.screenName}
            component={element.pageComponent}
            options={{tabBarLabel: element.tabBarLabel}}
          />
        );
      })}
    </Tab.Navigator>
  );
}
