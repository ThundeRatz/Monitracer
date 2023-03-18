import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import {COLORS} from './colors';
import {ROTATION} from './rotation.js';
import {PROPOTION} from './trigonometry';
import {H3, Body} from './typography';

export const MainTitle = (props) => {
  return(
    <View backgroundColor={COLORS.gray4}>
      <View style={ROTATION.OitoEMeia}>
        <View style={styles.titleContainer} paddingLeft={20}>
          <H3 color="white">{props.title}</H3>
        </View>
        <View style={styles.timerContainer}>
          <Body color="black" bold>Tempo: {props.subtitle}ms</Body>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
      backgroundColor: COLORS.thunderBlue,
      width: PROPOTION.width(Dimensions.get('window').width),
      top: PROPOTION.top(Dimensions.get('window').width),
      height: PROPOTION.height(Dimensions.get('window').width),
      left: PROPOTION.left(Dimensions.get('window').width),
  },
  timerContainer:{
     position: "absolute",
     alignSelf: "flex-end",
     right: 20,
     top: 30,
  }
});
