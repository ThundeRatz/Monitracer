/**
 * @file nav.js
 *
 * @brief navigation functions implementations
 *
 * @date 09/2021
 */

import {Navigation} from 'react-native-navigation';


export class NavigationManager {
  static GoToPage(componentId, pageName){
    Navigation.push(componentId, {
      component: {
        name: pageName,
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    });
  };

  static initTabNavigation(nav){
    this.nav = nav;
  }

  static GoToTab(tabName) {
    this.nav.navigate(tabName)
  }
}