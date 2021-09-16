/**
 * @file bt_connection.js
 *
 * @brief Implementation of Bluetooth Device Connection
 *
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 09/2021
 */

/**
 * @docs https://www.npmjs.com/package/react-native-bluetooth-serial-next
 */
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import React, {useEffect, useState} from 'react';
import {ToastAndroid} from 'react-native';

/*****************************************
 * Public Functions
 *****************************************/

/**
 * @brief Implemntations of all Bluetooth Conection Functions
 *
 */
export const BTConnection = () => {
  const [lista, setLista] = useState([]);
  const [bolEnableBlu, setBolEnableBlu] = useState(false);
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  /**
   * @brief Initialise Bluetooth device search
   *
   */
  const BTInit = async () => {
    const enable = await BluetoothSerial.requestEnable();
    const lista = await BluetoothSerial.list();
    const connected = await BluetoothSerial.isConnected();
    setLista(lista);
    setBolEnableBlu(enable);
    setConnected(connected);
    console.log(lista);
  };

  /**
   * @brief Stop Bluetooth device search
   *
   */
  const BTRemove = async () => {
    await BluetoothSerial.stopScanning();
    console.log('Termino scanner');
  };

  /**
   * @brief Enable Bluetooth Device Search (pretty similar to BTInit)
   *
   */
  const EnableBT = async () => {
    try {
      if (loading == false) {
        setLoading(true);
        await BluetoothSerial.requestEnable();
        const lista = await BluetoothSerial.list();
        await BluetoothSerial.stopScanning();
        setBolEnableBlu(true);
        setLista(lista);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * @brief Disable Bluetooth Device Search
   *
   */
  const DisableBT = async () => {
    try {
      if (loading == false) {
        setLoading(true);
        await BluetoothSerial.disconnectAll();
        await BluetoothSerial.disable();
        await BluetoothSerial.stopScanning();
        setBolEnableBlu(false);
        setLista([]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * @brief Implementatio of Device Connection
   *
   * @param device Device to be connect
   *
   */
  const BTLogin = async device => {
    try {
      await BluetoothSerial.connect(device.id);
      console.log(`Connected to device ${device.name}`);
      ToastAndroid.show(
        `Connected to device ${device.name}`,
        ToastAndroid.SHORT,
      );
      const connected = await BluetoothSerial.isConnected();
      setConnected(connected);
    } catch (error) {
      console.log(error);
    }
  };

  return [BTInit, BTRemove, EnableBT, DisableBT, BTLogin, lista, bolEnableBlu];
};
