
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {H1,H2,H3,Body,BodySecondary} from './components/typography'
import {Header, CellContainer, CellTitleContainer, VBox, VSeparator, TextInputCell} from './components/cell'
import {PrimaryButton, SecondaryButton} from './components/button'

export const BluetoothListPage = () => {
    return (
      <SafeAreaView>
        <Header>
          <H1>Bluetooth</H1>
          <Body>Lista de Dispositivos bluetooth para conexão</Body>
        </Header>
      </SafeAreaView>
    );
}