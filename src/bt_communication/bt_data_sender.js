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
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import { Buffer } from 'buffer';

const byte_initial_signal_value = "ff"
const byte_final_signal_value = "fe"

/*****************************************
 * Public Functions
 *****************************************/

/**
 * @brief Send hexedecimal to bluetooth.
 *
 * @param msg data to be sent
 *
 */
export const BTPostHex = async msg => {
  let msg_header_tail = byte_initial_signal_value+msg+byte_final_signal_value
  console.log("BT > msg sent: " + msg_header_tail)
  let buf = Buffer.from(msg_header_tail, 'hex');
  await BTPostData(buf);
}

/**
 * @brief Send data to bluetooth.
 *
 * @param msg data to be sent
 *
 */
export const BTPostData = async msg => {
  try {
    await BluetoothSerial.clear(); //Clear all buffer data
    await BluetoothSerial.write(msg);
  } catch (error) {
    console.log(error);
  }
};
