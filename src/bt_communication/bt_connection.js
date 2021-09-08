/**
 * @file bt_connection.js
 *
 * @brief 
 *
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 09/2021
 */

import React,{useEffect,useState} from 'react';
 
import BluetoothSerial from 'react-native-bluetooth-serial-next';

export const BTConnection = () => {

    const [lista, setLista] = useState([]);
    const [bolEnableBlu, setBolEnableBlu] = useState(false);
    
    const BTInit = async() => {
        const enable = await BluetoothSerial.requestEnable();
        const lista = await BluetoothSerial.list();
        setLista(lista);
        setBolEnableBlu(enable);
        console.log(lista);
    };
    
    const BTRemove = async() => {
        await BluetoothSerial.stopScanning();
        console.log("Termino scanner");
    };
    
    const EnableBT = async () => {
        try{
            await BluetoothSerial.requestEnable();
            const lista = await BluetoothSerial.list();
            await BluetoothSerial.stopScanning();
            setBolEnableBlu(true);
            setLista(lista);
        } catch (error) {
            console.log(error);
        }
    };
    
    const DisableBT = async () => {
        try{
            await BluetoothSerial.disable();
            await BluetoothSerial.stopScanning();
            setBolEnableBlu(false);
            setLista([]);
        } catch (error) {
            console.log(error);
        }
    };

    return [BTInit,BTRemove,EnableBT,DisableBT,lista,bolEnableBlu];
}
