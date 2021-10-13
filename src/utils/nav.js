/**
 * @file nav.js
 *
 * @brief navigation functions implementations
 *
 * @date 09/2021
 */


import {Navigation} from 'react-native-navigation';

var nav;

export const GoToPage = (componentId, pageName) => {
  Navigation.push(componentId, {
    component: {
      name: pageName,
      options: {
        topBar: {
          visible: false
        } 
      },
    },
  });
};

export const GoToTabInit = (navigation) => {
  nav = navigation;
};

export const GoToTab = (tabName) => {
  nav.navigate(tabName);
};
