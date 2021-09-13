/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import HomePage from './src/HomePage';
import {BluetoothListPage} from './src/BluetoothListPage';
import SplashScreen from './src/SplashScreen';
import TestServer from './src/tests/TestServer'
Navigation.registerComponent('SplashScreen', () => SplashScreen);
Navigation.registerComponent('HomePage', () => HomePage);
Navigation.registerComponent('BluetoothListPage', () => BluetoothListPage);
Navigation.registerComponent('TestServer', ()=> TestServer);
Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'SplashScreen',
               options: {
                topBar: {
                  title: {
                    text: 'SplashScreen'
                  }
                }
              }
             }
           }
         ]
       }
     }
  });
});
