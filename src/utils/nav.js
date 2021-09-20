/**
 * @file nav.js
 *
 * @brief navigation functions implementations
 *
 * @date 09/2021
 */

import {Navigation} from 'react-native-navigation';

export const GoToPage = (componentId, pageName) => {
  Navigation.push(componentId, {
    component: {
      name: pageName,
      options: {
        topBar: {
          title: {
            text: pageName,
          },
        },
      },
    },
  });
};
