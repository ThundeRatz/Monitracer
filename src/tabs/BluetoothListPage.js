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
import {SafeAreaView} from 'react-native';

import {H1, Body} from '../components/typography';
import {Header} from '../components/cell';
import {BTList, BluetoothEnableButton} from '../components/BTList';

import {BTConnection} from '../bt_communication/bt_connection';
import {PrimaryDropdownCell} from '../components/cell';

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
    <SafeAreaView>
      <Header>
        <H1>Bluetooth</H1>
        <BluetoothEnableButton
          value={bolEnableBlu}
          onValueChange={async () => await toggleBluetooth()}
        />
        <Body>Lista de Dispositivos bluetooth para conexão</Body>
      </Header>
      <BTList data={lista} />
    </SafeAreaView>
  );
};
