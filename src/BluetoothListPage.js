import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList
} from 'react-native';

import {H1,H2,H3,Body,BodySecondary} from './components/typography'
import {Header, CellContainer, CellTitleContainer, VBox, VSeparator, ListSeparator, ListCell} from './components/cell'
import {BTList, BluetoothEnableButton} from './components/bluetooth_list/BTList'

import BluetoothSerial from 'react-native-bluetooth-serial-next'

export const BluetoothListPage = () => {
  

  const [lista, setLista] = useState([]);
  const [bolEnable, setBolEnable]= useState(false);

  useEffect(()=>{

    async function init(){
        const enable = await BluetoothSerial.requestEnable();
        const lista = await BluetoothSerial.list();
        setLista(lista);
        setBolEnable(true);
        console.log(lista);
    }
    
    init();

    return() => {
        async function remove(){
            await BluetoothSerial.stopScanning();
            console.log("Termino scanner");
        }

        remove();
    }
  }, [])

  const enableBluetooth = async () => {
    try{
        await BluetoothSerial.requestEnable();
        const lista = await BluetoothSerial.list();
        await BluetoothSerial.stopScanning();
        setBolEnable(true);
        setLista(lista);
    } catch (error) {
        console.log(error);
    }
  };

  const disableBluetooth = async () => {
    try{
        await BluetoothSerial.disable();
        await BluetoothSerial.stopScanning();
        setBolEnable(false);
        setLista([]);
    } catch (error) {
        console.log(error);
    }
};

  const toggleBluetooth = value => {
    if(value) {
        return enableBluetooth();
    }
    disableBluetooth();
  };
      
  return (
    <SafeAreaView>
      <Header>
        <H1>Bluetooth</H1>
        <BluetoothEnableButton value={bolEnable} onValueChange = {toggleBluetooth}/>
        <Body>Lista de Dispositivos bluetooth para conexão</Body>
      </Header>
      <BTList data = {lista}/>
    </SafeAreaView>
  );
}
