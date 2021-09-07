/**
 * @file bt_data_sender.js
 *
 * @brief 
 *
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 09/2021
 */

import BluetoothSerial from 'react-native-bluetooth-serial-next'

export const BTPostData = async (msg) => {
    try{
        console.log("sinal: " + msg)
        await BluetoothSerial.write(msg);
        console.log('Successfuly wrote to device');
      } catch(error){
        console.log(error);
      }
};