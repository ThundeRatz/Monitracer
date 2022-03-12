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
import {StatusBar, StyleSheet, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {COLORS} from './components/colors';
import {imageBackgroundStyle} from './components/general';
import {NavigationManager} from './utils/nav';

export const SplashScreen = props => {
  const navigationTimeOut = setTimeout(
    () => NavigationManager.GoToPage(props.componentId, 'AppPage'),
    2000,
  );

  return (
    <View style={styles.container}>
      <View style={imageBackgroundStyle.image}>
        <StatusBar translucent backgroundColor="rgba(1, 23, 73, 1)" />
        <Animatable.Image
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          style={styles.image}
          source={require('@img/Tracer-2.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    width: 150,
    height: 260,
    margin: 100,
    resizeMode: "center",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.thunderBlue,
  },
});
