/**
 * @file SplashPage.js
 *
 * @brief Splash screen
 *
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 06/2021
 */

import React, {Component} from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {imageBackgroundStyle} from './components/general';

import {Navigation} from 'react-native-navigation';

export const SplashPage = props => {
  const GoToScreen = () => {
    Navigation.push(props.componentId, {
      component: {
        name: 'HomePage',
        options: {
          topBar: {
            title: {
              text: 'HomePage',
            },
          },
        },
      },
    });
  };

  const componentDidMount = () => {
    setTimeout(() => {
      GoToScreen();
    }, 5000);
  };

  componentDidMount();

  return (
    <View style={imageBackgroundStyle.image}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0.2)" />
      <Animatable.Image
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        style={styles.image}
        source={require('@img/LogoTR-Vertical_Amarelo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 200,
    margin: 100,
  },
});
