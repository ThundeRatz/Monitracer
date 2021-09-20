/**
 * @file nav.js
 *
 * @brief navigation functions implementations
 *
 * @date 09/2021
 */

import {Navigation} from 'react-native-navigation';

export const GoToPage = (componentId, landingPage) => {
  Navigation.push(componentId, {
    component: {
      name: landingPage,
      options: {
        topBar: {
          title: {
            text: landingPage,
          },
        },
      },
    },
  });
};
