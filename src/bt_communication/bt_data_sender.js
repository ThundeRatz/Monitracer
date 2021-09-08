/**
 * @file bt_data_sender.js
 *
 * @brief Implementation of Bluetooth data sender
 *
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 09/2021
 */

/**
 * @docs https://www.npmjs.com/package/react-native-bluetooth-serial-next
 */
import BluetoothSerial from 'react-native-bluetooth-serial-next'

/*****************************************
 * Public Functions
 *****************************************/

/**
 * @brief Send data to server.
 *
 * @param msg data to be sent
 * 
 */
export const BTPostData = async (msg) => {
    try{
        console.log("sinal: " + msg)
        await BluetoothSerial.clear(); //Clear all buffer data
        await BluetoothSerial.write(msg);
        console.log('Successfuly wrote to device');
      } catch(error){
        console.log(error);
      }
};
