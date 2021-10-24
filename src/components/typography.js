import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS} from './colors.js';

export const H1 = props => <Text style={styles(props.color).h1}>{props.children}</Text>;

export const H2 = props => <Text style={styles(props.color).h2}>{props.children}</Text>;

export const H3 = props => <Text style={styles(props.color).h3}>{props.children}</Text>;

export const H4 = props => <Text style={styles(props.color).h4}>{props.children}</Text>;

export const Body = props => <Text style={styles(props.color).body}>{props.children}</Text>;

export const BodySecondary = props => <Text style={styles(props.color).bodySecondary}>{props.children}</Text>;

export const Input = props => <Text style={styles(props.color).input}>{props.children}</Text>;

const styles = color => {
  const textColor = color ?? COLORS.thunderBlack
  return StyleSheet.create({
    h1: {
      fontFamily: 'Oswald-Regular',
      fontSize: 64,
      color: textColor,
    },
    h2: {
      fontFamily: 'Oswald-Regular',
      fontSize: 48,
      color: textColor,
    },
    h3: {
      fontFamily: 'Oswald-Regular',
      fontSize: 36,
      color: textColor,
    },
    h4: {
      fontFamily: 'Oswald-Regular',
      fontSize: 24,
      color: textColor,
    },
    body: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 18,
      color: textColor,
    },
    bodySecondary: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 18,
      color: textColor,
    },
    input: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 18,
      color: textColor,
    },
  })
};
