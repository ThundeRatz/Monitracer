/**
 * @file BluetoothListPage.js
 *
 * @brief Page to bluetooth List
 *
 * @author Lucas Guedes <lucas.guedes@thunderatz.org>
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 06/2021
 */

import React, {useEffect} from 'react';
import {SafeAreaView, View, StyleSheet, Dimensions, ScrollView} from 'react-native';

import {H1, Body, H3} from '../components/typography';
import {Header, ListSeparator} from '../components/cell';
import {BTList, BluetoothEnableButton} from '../components/BTList';

import {BTConnection} from '../bt_communication/bt_connection';
import {DeviceCell} from '../components/cell';
import {MainTitle} from '../components/mainTitle';

import {COLORS} from '../components/colors';
import {PROPOTION} from '../components/trigonometry';

export const BluetoothListPage = () => {
  const [BTInit, BTRemove, EnableBT, DisableBT, , lista, bolEnableBlu] =
    BTConnection();

  useEffect(async () => {
    await BTInit();

    return async () => {
      await BTRemove();
    };
  }, []);

  const toggleBluetooth = async () => {
    if (!bolEnableBlu) {
      await EnableBT();
    } else {
      await DisableBT();
    }
  };

  return (
    <SafeAreaView flex={1}>
      <View style={styles.titleContainer} paddingLeft={20} paddingRight={20}>
        <BluetoothEnableButton
          color={COLORS.thunderWhite}
          value={bolEnableBlu}
          onValueChange={async () => await toggleBluetooth()}
        />
      </View>

      <BTList data={lista} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
      backgroundColor: COLORS.thunderBlue,
  },
});
