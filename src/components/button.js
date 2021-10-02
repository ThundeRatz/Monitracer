import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { H3, H4, Body } from './typography';
import { SPACING } from './grid';
import { COLORS } from './colors.js'
import { FAB } from 'react-native-paper';

export const PrimaryButton = props => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress} style={[{ transform: [{ rotate: "-14deg" }] }]}>
        <View style={styles.primaryButtonBackground}>
          <H3 color={COLORS.thunderYellow}>
          </H3>
        </View>
        <View style={styles.primaryButton}>
          <H3 color={COLORS.gray6} >
            {props.title}
          </H3>
        </View>
      </TouchableOpacity >
    </View>
  );
};

export const SecondaryButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.secondaryButton}>
      <Body>{props.title}</Body>
    </TouchableOpacity>
  );
};

export const ActionButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.actionButton}>
      <H4>{props.title}</H4>
    </TouchableOpacity>
  );
};

export const NewFAB = props => {
  return (
    <View
      style={styles.fab}
      small
      icon="plus"
      onPress={() => console.log('Pressed')}
    />
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    alignItems: 'center',
    backgroundColor: COLORS.thunderBlue,
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.large,
    top: - 36 - 2 * SPACING.small,
    marginBottom: - 36 - 2 * SPACING.small,
    marginHorizontal: SPACING.medium,
    left: SPACING.xSmall,
    borderRadius: 5,
  },
  primaryButtonBackground: {
    alignItems: 'center',
    backgroundColor: COLORS.thunderYellow,
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.large,
    marginHorizontal: SPACING.medium,
    borderRadius: 5,
  },

  secondaryButton: {
    alignItems: 'center',
    backgroundColor: '#f5d97d',
    padding: 8,
    margin: 12,
    borderRadius: 8,
  },

  actionButton: {
    alignItems: 'center',
    borderColor: COLORS.thunderBlue,
    borderWidth: 5,
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.large,
    borderRadius: 5,
  },

  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
