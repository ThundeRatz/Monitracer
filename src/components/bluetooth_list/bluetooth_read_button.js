/**
 * @file bluetooth_read_button.js
 *
 * @brief button to read bluetooth data 
 *
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 07/2021
 */

 import React,{useEffect,useState} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   ToastAndroid,
   FlatList
 } from 'react-native';

 import {PrimaryButton} from '../button';

 import BluetoothSerial from 'react-native-bluetooth-serial-next'


export const BTReadButton = (props) => {

    const read_data = async () =>{
        try{
            const data = await BluetoothSerial.readOnce("\r\n");
            console.log("A mensagem do read once eh: " + data);
        }catch(error){
            console.log(error);
        }
    }
    
    const always_read_data = async () =>{
        try{
            BluetoothSerial.readEvery(
                (data, intervalId) => {
                    console.log("A mensagem do read eh: " + data);
                    ToastAndroid.show(`A mensagem do read eh: ${data}`,ToastAndroid.SHORT);
                
                    if (this.imBoredNow && intervalId) {
                    clearInterval(intervalId);
                    }
                },
                5000,
                "\r\n"
            );
        }catch(error){
            console.log(error);
        }
    }

    return  (
        <View>
            <PrimaryButton onPress={always_read_data} title={props.title}/>
        </View>
    );
}
