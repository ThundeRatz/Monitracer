import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS} from './colors.js';

export const H1 = props => (
  <Text style={styles(props.color, props.align).h1}>{props.children}</Text>
);

export const H2 = props => (
  <Text style={styles(props.color, props.align).h2}>{props.children}</Text>
);

export const H3 = props => (
  <Text style={styles(props.color, props.align).h3}>{props.children}</Text>
);

export const H4 = props => (
  <Text style={styles(props.color, props.align).h4}>{props.children}</Text>
);

export const Body = props => (
  <Text style={styles(props.color, props.align).body}>{props.children}</Text>
);

export const BodySecondary = props => (
  <Text style={styles(props.color, props.align).bodySecondary}>{props.children}</Text>
);

export const Input = props => (
  <Text style={styles(props.color, props.align).input}>{props.children}</Text>
);

const styles = (color, align) => {
  const textColor = color ?? COLORS.thunderBlack;
  const textAlign = align ?? 'left';
  return StyleSheet.create({
    h1: {
      fontFamily: 'Oswald-Regular',
      fontSize: 64,
      color: textColor,
      textAlign,
    },
    h2: {
      fontFamily: 'Oswald-Regular',
      fontSize: 48,
      color: textColor,
      textAlign,
    },
    h3: {
      fontFamily: 'Oswald-Regular',
      fontSize: 36,
      color: textColor,
      textAlign,
    },
    h4: {
      fontFamily: 'Oswald-Regular',
      fontSize: 24,
      color: textColor,
      textAlign,
    },
    body: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 18,
      color: textColor,
      textAlign,
    },
    bodySecondary: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 18,
      color: textColor,
      textAlign,
    },
    input: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 18,
      color: textColor,
      textAlign,
    },
  });
};
