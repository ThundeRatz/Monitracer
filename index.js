/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import {SplashScreen} from './src/SplashScreen';
import {BluetoothListPage} from './src/tabs/BluetoothListPage';
import {ConstantsPage} from './src/tabs/ConstantsPage';
import {ControlPage} from './src/tabs/ControlPage';
import {EvaluationPage} from './src/tabs/EvaluationPage';
import {HistoryPage} from './src/tabs/HistoryPage';
import {HomePage} from './src/tabs/HomePage.js';
import {AppPage} from './src/AppPage.js';

Navigation.registerComponent('AppPage', () => AppPage);
Navigation.registerComponent('BluetoothListPage', () => BluetoothListPage);
Navigation.registerComponent('ConstantsPage', () => ConstantsPage);
Navigation.registerComponent('ControlPage', () => ControlPage);
Navigation.registerComponent('EvaluationPage', () => EvaluationPage);
Navigation.registerComponent('HistoryPage', () => HistoryPage);
Navigation.registerComponent('HomePage', () => HomePage);
Navigation.registerComponent('SplashScreen', () => SplashScreen);
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
                  visible: false
                } 
              },
            },
          },
        ],
      },
    },
  });
});
