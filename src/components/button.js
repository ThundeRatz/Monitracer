import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Body} from './typography';
import {
  PostConstants,
  GetConstantsList,
} from '../server_communication/constants_api';
import {PostLap} from '../server_communication/laps_api';

export const PrimaryButton = props => {
  return (<>
    <View style={{ height: props.title.length * 0.6 }} />
    <View>
      <TouchableOpacity onPress={props.onPress} style={[{ transform: [{ rotate: "-14deg" }] }]}>
        <View style={styles.primaryButtonBackground}>
          <H3 color={COLORS.thunderYellow}>
            {props.title}
          </H3>
        </View>
        <View style={styles.primaryButton}>
          <H3 color={COLORS.gray6}  >
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

const styles = StyleSheet.create({
  primaryButton: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: COLORS.thunderBlue,
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
    backgroundColor: COLORS.thunderYellow,
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
});
