import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const H1 = props => <Text style={styles.h1}>{props.children}</Text>;

export const H2 = props => <Text style={styles.h2}>{props.children}</Text>;

export const H3 = props => <Text style={styles.h3}>{props.children}</Text>;

export const H4 = props => <Text style={styles.h4}>{props.children}</Text>;

export const Body = props => <Text style={styles.body}>{props.children}</Text>;

export const BodySecondary = props => <Text style={styles.bodySecondary}>{props.children}</Text>;

export const Input = props => <Text style={styles.input}>{props.children}</Text>;

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'Oswald-Regular',
    fontSize: 64,
    color: "#000000",
  },
  h2: {
    fontFamily: 'Oswald-Regular',
    fontSize: 48,
    color: "#000000",
  },
  h3: {
    fontFamily: 'Oswald-Regular',
    fontSize: 36,
    color: "#000000",
  },
  h4: {
    fontFamily: 'Oswald-Regular',
    fontSize: 24,
    color: "#000000",
  },
  body: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    color: "#000000",
  },
  bodySecondary: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    color: "#333333",
  },
  input: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    color: "#828282",
  },
});
