/**
 * @file BluetoothListPage.js
 *
 * @brief Page to bluetooth List 
 *
 * @author Lucas Guedes <lucas.guedes@thunderatz.org>
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 06/2021
 */

import React,{useEffect,useState} from 'react';
import { SafeAreaView } from 'react-native';

import {H1, H2, H3, Body, BodySecondary} from './components/typography'
import {Header, CellContainer, CellTitleContainer, VBox, VSeparator, ListSeparator, ListCell} from './components/cell'
import {BTList, BluetoothEnableButton} from './components/BTList'

import {BTConnection} from "./bt_communication/bt_connection"

export const BluetoothListPage = () => {

  const [BTInit,BTRemove,EnableBT,DisableBT,BTLogin,lista,bolEnableBlu] = BTConnection();

  useEffect(()=>{
    
    BTInit();

    return() => {
        BTRemove();
    }
  }, [])

  const toggleBluetooth = () => {
    if(!bolEnableBlu) {
      EnableBT();
    }
      DisableBT();
  };
      
  return (
    <SafeAreaView>
      <Header>
        <H1>Bluetooth</H1>
        <BluetoothEnableButton value = {bolEnableBlu} onValueChange={toggleBluetooth}/>
        <Body>Lista de Dispositivos bluetooth para conexão</Body>
      </Header>
      <BTList data = {lista}/>
    </SafeAreaView>
  );
}
