import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const H1 = props => {
  return <Text style={styles.h1}>{props.children}</Text>;
};

export const H2 = props => {
  return <Text style={styles.h2}>{props.children}</Text>;
};

export const H3 = props => {
  return <Text style={styles.h3}>{props.children}</Text>;
};

export const Body = props => {
  return <Text style={styles.body}>{props.children}</Text>;
};

export const BodySecondary = props => {
  return <Text style={styles.bodySecondary}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#333333',
  },
  h2: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333333',
  },
  h3: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  body: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#333333',
  },
  bodySecondary: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#525252',
  },
});
