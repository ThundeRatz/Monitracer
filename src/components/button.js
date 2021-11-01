import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { H3, H4, Body } from './typography';
import { SPACING } from './grid';
import { COLORS } from './colors.js'

export const PrimaryButton = props => {
  props.disable ? (
      mainColor = COLORS.lightThunderBlue,
      secondaryColor = COLORS.lightThunderYellow,
      textColor = COLORS.gray5) : 
    (
      mainColor = COLORS.thunderBlue,
      secondaryColor = COLORS.thunderYellow,
      textColor = COLORS.gray6
    );
  return (<>
    <View style={{ height: props.title.length * 0.6 }} />
    <View>
      <TouchableOpacity onPress={props.onPress} style={[{ transform: [{ rotate: "-14deg" }] }]}>
        <View style={styles.primaryButtonBackground} backgroundColor={secondaryColor}>
          <H3 color={secondaryColor}>
            {props.title}
          </H3>
        </View>
        <View style={styles.primaryButton} backgroundColor={mainColor}>
          <H3 color={textColor}>
            {props.title}
          </H3>
        </View>
      </TouchableOpacity >
    </View>
  </>
  );
};

export const SecondaryButton = props => {
  return (<>
    <View style={{ height: props.title.length * 0.6 }} />
    <View>
      <TouchableOpacity onPress={props.onPress} style={[{ transform: [{ rotate: "-14deg" }] }]}>
        <View style={styles.secondaryButtonBackground}>
          <H3 color={COLORS.thunderBlue} >
            {props.title}
          </H3>
        </View>
        <View style={styles.secondaryButton}>
          <H3 color={COLORS.thunderBlue} >
            {props.title}
          </H3>
        </View>
      </TouchableOpacity >
    </View>
  </>
  );
};

export const ActionButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.actionButton}>
      <H4>{props.title}</H4>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.large,
    top: - 56 - 2 * SPACING.small + SPACING.xSmall,
    marginBottom: -20 - 2 * SPACING.small,
    marginHorizontal: SPACING.medium,
    left: SPACING.xSmall,
    borderRadius: 5,
  },
  primaryButtonBackground: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.large,
    marginHorizontal: SPACING.medium,
    borderRadius: 5,
  },
  secondaryButton: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: COLORS.gray5,
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.large,
    top: - 56 - 2 * SPACING.small + SPACING.xSmall,
    marginBottom: -20 - 2 * SPACING.small,
    marginHorizontal: SPACING.medium,
    left: SPACING.xSmall,
    borderRadius: 5,
  },
  secondaryButtonBackground: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: COLORS.thunderBlue,
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.large,
    marginHorizontal: SPACING.medium,
    borderRadius: 5,
  },

  actionButton: {
    alignItems: 'center',
    borderColor: COLORS.thunderBlue,
    borderWidth: 5,
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.large,
    borderRadius: 5,
  },
});
