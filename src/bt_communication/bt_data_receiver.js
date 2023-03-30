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
import {useState} from 'react';
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import {ToastAndroid} from 'react-native'; 
import { Buffer } from 'buffer';

const HEADER_TAG = String.fromCharCode(parseInt("FF", 16));
const TAIL_TAG = String.fromCharCode(parseInt("FE", 16));
const LAP_TIME_TAG = String.fromCharCode(parseInt("BE11", 16));

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
export const BTGetDataContinuous = () => {
  const [lapTime, setLapTime] = useState(0);

  try {
    BluetoothSerial.readEvery(
      (data, intervalId) => {
        if(!!data){
          console.log('A mensagem recebida foi: ' + data);
          var hex = 0;
          for(var i=0;i<data.length;i++) {
              hex += data.charCodeAt(i).toString(16);
          }
          console.log('A mensagem recebida em hex foi: ' + hex);
          const header = data.slice(0, 1)
          const tail = data.slice(-1)
          if(header == HEADER_TAG && tail == TAIL_TAG){
            const msg = data.slice(4,-1)
            
            var value = 0;
            for(var i=0;i<msg.length;i++) {
                var char_code = msg.charCodeAt(i).toString(16);
                var current_position = (msg.length - i - 1) * 2;
                value += (parseInt(char_code[0], 16)-1) * (15 ** (current_position + 1)) + (parseInt(char_code[1], 16)-1) * ( 15 ** current_position)
            }
            console.log('A mensagem recebida em hex foi: ' + value);
            const type = data.slice(1,4)
            if(type == LAP_TIME_TAG){
              setLapTime(value)
            }
          }
        }

        if (this.imBoredNow && intervalId) {
          clearInterval(intervalId);
        }
      },
      1000,
      TAIL_TAG,
    );
  } catch (error) {
    console.log("Erro: "+error);
  }

  return { lapTime }
};
