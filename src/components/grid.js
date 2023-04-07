import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import { COLORS } from './colors';

export const VBox = props => {
  return <View style={styles.vbox} props>{props.children}</View>;
};

export const HBox = props => {
  return <View style={styles.hbox}>{props.children}</View>;
};

export const HBoxItem = props => {
  return <View style={{...styles.hboxitem, ...(props.flex ? {flex: 1} : {})}}>{props.children}</View>;
};

export const VSeparator = props => {
  return props.half ? (
    <View style={styles.vSeparatorHalf}>{props.children}</View>
  ) : (
    <View style={styles.vSeparator}>{props.children}</View>
  );
};

export const SPACING = {
  xSmall: 8,
  small: 16,
  medium: 24,
  large: 32,
  xLarge: 48,
};

export const DIMENSIONS = {width: Dimensions.get('window').width, height: Dimensions.get('window').height };

const styles = StyleSheet.create({
  vbox: {
    marginHorizontal: SPACING.medium,
    flexDirection: 'column',
  },
  hbox: {
    flexDirection: 'row',
    width: '100%',
  },
  hboxitem: {
    flexDirection: 'column',
    paddingLeft: 5,
    justifyContent: 'center',
},
  vSeparator: {
    height: SPACING.medium,
  },
  vSeparatorHalf: {
    height: SPACING.medium / 2,
  },
});
