/**
 * @file DinoTracer.js
 *
 * @brief DinoTracer functions
 *
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 10/2021
 */

import {DinoTracerUrl} from '../config';
import {Linking} from 'react-native';

export const GoToDinoTracer = () => {
  Linking.openURL(DinoTracerUrl);
};
