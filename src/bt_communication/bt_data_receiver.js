/**
 * @file bt_data_receiver.js
 *
 * @brief 
 *
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 09/2021
 */

import {
   ToastAndroid
 } from 'react-native';

import BluetoothSerial from 'react-native-bluetooth-serial-next'

export const BTGetData = async () => {
    try{
        const data = await BluetoothSerial.readOnce("\r\n");
        console.log("A mensagem recebida foi: " + data);
        return data;
    }catch(error){
        console.log(error);
    }
}

export const BTGetDataContinuous = async () => {
    try{
        BluetoothSerial.readEvery(
            (data, intervalId) => {
                console.log("A mensagem continua é: " + data);
                ToastAndroid.show(`A mensagem continua é: ${data}`,ToastAndroid.SHORT);
            
                if (this.imBoredNow && intervalId) {
                clearInterval(intervalId);
                }
                return data;
            },
            5000,
            "\r\n"
        );
    }catch(error){
        console.log(error);
    }
}
