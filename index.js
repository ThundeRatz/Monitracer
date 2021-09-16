/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import {SplashScreen} from './src/SplashScreen';
import {HomePage} from './src/HomePage.js';
import {BluetoothListPage} from './src/BluetoothListPage';
import {HistoryPage} from './src/HistoryPage';
import {EvaluationPage} from './src/EvaluationPage';
import {ConstantsPage} from './src/ConstantsPage';
import {ControlPage} from './src/ControlPage';

Navigation.registerComponent('SplashScreen', () => SplashScreen);
Navigation.registerComponent('HomePage', () => HomePage);
Navigation.registerComponent('BluetoothListPage', () => BluetoothListPage);
Navigation.registerComponent('HistoryPage', () => HistoryPage);
Navigation.registerComponent('ControlPage', () => ControlPage);
Navigation.registerComponent('EvaluationPage', () => EvaluationPage);
Navigation.registerComponent('ConstantsPage', () => ConstantsPage);
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
                    text: 'SplashScreen',
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
});
