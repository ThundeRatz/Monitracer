/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import {SplashScreen} from './src/SplashScreen';
import {BluetoothListPage} from './src/BluetoothListPage';
import {ConstantsPage} from './src/ConstantsPage';
import {ControlPage} from './src/ControlPage';
import {EvaluationPage} from './src/EvaluationPage';
import {HistoryPage} from './src/HistoryPage';
import {HomePage} from './src/HomePage.js';
import TestServer from './src/tests/TestServerPage';

Navigation.registerComponent('SplashScreen', () => SplashScreen);
Navigation.registerComponent('BluetoothListPage', () => BluetoothListPage);
Navigation.registerComponent('ConstantsPage', () => ConstantsPage);
Navigation.registerComponent('ControlPage', () => ControlPage);
Navigation.registerComponent('EvaluationPage', () => EvaluationPage);
Navigation.registerComponent('HistoryPage', () => HistoryPage);
Navigation.registerComponent('HomePage', () => HomePage);
Navigation.registerComponent('TestServer', () => TestServer);

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
