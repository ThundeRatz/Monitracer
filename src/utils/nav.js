/**
 * @file nav.js
 *
 * @brief navigation functions implementations
 *
 * @date 09/2021
 */

import {Navigation} from "react-native-navigation";

export const GoToPage = (componentId, LandingPage) => {
    Navigation.push(componentId, {
        component: {
        name: LandingPage,
        options: {
            topBar: {
                title: {
                    text: LandingPage,
                }
            }
        }
        }
    })
};

