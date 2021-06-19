/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import HomePage from './src/HomePage';
import {BluetoothListPage} from './src/BluetoothListPage';
Navigation.registerComponent('HomePage', () => HomePage);
Navigation.registerComponent('BluetoothListPage', () => BluetoothListPage);
Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'HomePage',
               options: {
                topBar: {
                  title: {
                    text: 'Home Page'
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
