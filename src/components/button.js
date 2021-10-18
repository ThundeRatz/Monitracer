import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Body} from './typography';
import {
  PostConstants,
  GetConstantsList,
} from '../server_communication/constants_api';
import {PostLap} from '../server_communication/laps_api';

export const PrimaryButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.primaryButton}>
      <Body>{props.title}</Body>
    </TouchableOpacity>
  );
};

export const SecondaryButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.secondaryButton}>
      <Body>{props.title}</Body>
    </TouchableOpacity>
  );
};

export const DataSenderButton = props => {
  return (
    <View>
      <PrimaryButton
        onPress={async () => {
          await PostLap(
            props.name,
            props.constant_values,
            parseInt(props.lap_time),
          );
        }}
        title={props.title}
      />
    </View>
  );
};

export const DataReceiverButton = props => {
  return (
    <View>
      <PrimaryButton
        onPress={async () => await GetConstantsList()}
        title={props.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    alignItems: 'center',
    backgroundColor: '#b8e0e6',
    padding: 8,
    margin: 12,
    borderRadius: 8,
  },
  secondaryButton: {
    alignItems: 'center',
    backgroundColor: '#f5d97d',
    padding: 8,
    margin: 12,
    borderRadius: 8,
  },
});
