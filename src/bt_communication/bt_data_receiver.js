/**
 * @file bt_data_receiver.js
 *
 * @brief Implementation of Bluetooth data receiver
 *
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 * @author Henrique D`Amaral Matheus <henrique.matheus@thunderatz.org>
 *
 * @date 09/2021
 */

/**
 * @docs https://www.npmjs.com/package/react-native-bluetooth-serial-next
 */
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import {ToastAndroid} from 'react-native';

/*****************************************
 * Public Functions
 *****************************************/

/**
 * @brief Get Bluetooth data (just once)
 *
 */
export const BTGetData = async () => {
  try {
    const data = await BluetoothSerial.readOnce('\r\n');
    console.log('A mensagem recebida foi: ' + data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

/**
 * @brief Get Bluetooth data (continuously)
 *
 */
export const BTGetDataContinuous = async () => {
  try {
    BluetoothSerial.readEvery(
      (data, intervalId) => {
        console.log('A mensagem continua é: ' + data);
        ToastAndroid.show(`A mensagem continua é: ${data}`, ToastAndroid.SHORT);

        if (this.imBoredNow && intervalId) {
          clearInterval(intervalId);
        }
        return data;
      },
      5000,
      '\r\n',
    );
  } catch (error) {
    console.log(error);
  }
};
