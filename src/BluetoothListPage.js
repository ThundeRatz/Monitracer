import React,{useState} from 'react';
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

export const BluetoothListPage = () => {

  const connected = false;

  const [lista, setLista] = useState([]);
  const [bolEnable, setBolEnable]= useState(false);

  const renderEmpty = () => <Empty text ="Não há dispositivos conectados"/>

  
  const deviceList = [ //lista que vai ser obtida via bluetooth
    {
      name:'dispositivo 1',
      id: 'id do dispositivo 1'
    },
    {
      name:'dispositivo 2',
      id:'id do dispositivo 2'
    },
    {
      name:'dispositivo 3',
      id:'id do dispositivo 3'
    },
    {
      name:'dispositivo 4',
      id:'id do dispositivo 4'
    },
    {
      name:'dispositivo 5',
      id:'id do dispositivo 5'
    },
    {
      name:'dispositivo 6',
      id:'id do dispositivo 6'
    },
    {
      name:'dispositivo 7',
      id:'id do dispositivo 7'
    },
    {
      name:'dispositivo 8',
      id:'id do dispositivo 8'
    }
  ];
  
  return (
    <SafeAreaView>
      <Header>
        <H1>Bluetooth</H1>
        <BluetoothEnableButton/>
        <Body>Lista de Dispositivos bluetooth para conexão</Body>
      </Header>
      <BTList data = {deviceList}/>
    </SafeAreaView>
  );
}
