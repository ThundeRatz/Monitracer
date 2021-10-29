/**
 * @file SplashScreen.js
 *
 * @brief Splash screen
 *
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 09/2021
 */

import React from 'react';
import {StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {imageBackgroundStyle} from './components/general';
import {GoToPage} from './utils/nav';

export const SplashScreen = props => {
  const componentDidMount = () => {
    setTimeout(() => {
      GoToPage(props.componentId, 'HomePage');
    }, 5000);
  };

  componentDidMount();

  return (
    <TouchableOpacity
    style={imageBackgroundStyle.image}
    onPress={() => GoToPage(props.componentId, 'HomePage')}>
    <StatusBar translucent backgroundColor="rgba(0,0,0,0.2)" />
    <Animatable.Image
      animation="pulse"
      easing="ease-out"
      iterationCount="infinite"
      style={styles.image}
      source={require('@img/Tracer-2.png')}
    />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 220,
    margin: 100,
    resizeMode: "center",
  },
});
