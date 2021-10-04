/**
 * @file SplashScreen.js
 *
 * @brief Splash screen
 *
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 09/2021
 */

import React, {Component} from 'react';
import {View, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {imageBackgroundStyle} from './components/general';
import {GoToPage} from './utils/nav';

export const SplashScreen = props => {
  const navigationTimeOut = setTimeout(() => GoToPage(props.componentId, 'AppPage') , 5000);
  
  return (
    <TouchableOpacity
      style={imageBackgroundStyle.image}
      onPress={
        () => {
          clearTimeout(navigationTimeOut);
          GoToPage(props.componentId, 'AppPage');
        }}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0.2)" />
      <Animatable.Image
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        style={styles.image}
        source={require('@img/LogoTR-Vertical_Amarelo.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 200,
    margin: 100,
  },
});
