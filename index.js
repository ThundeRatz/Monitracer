/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import HomePage from './src/HomePage';
import {BluetoothListPage} from './src/BluetoothListPage';
import SplashScreen from './src/SplashScreen';
Navigation.registerComponent('SplashScreen', () => SplashScreen);
Navigation.registerComponent('HomePage', () => HomePage);
Navigation.registerComponent('BluetoothListPage', () => BluetoothListPage);
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
