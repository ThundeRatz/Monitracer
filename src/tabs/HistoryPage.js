/**
 * @file HistoryPage.js
 *
 * @brief page to review previous Tracer performances
 *
 * @author Lucas Guedes <lucas.guedes@thunderatz.org>
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 09/2021
 */

import {SecondaryButton} from '../components/button';
import {CellContainer} from '../components/cell';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationManager} from '../utils/nav';
import {
  PrimaryDropdownCell,
  SecondaryDropdownCell,
  DeviceCell,
} from '../components/cell';

export const HistoryPage = props => {
  return (
    <SafeAreaView>
      <DeviceCell deviceName="Device 01" deviceId="AA:BB:CC:DD:EE:FF" />
      <CellContainer>
        <SecondaryButton
          onPress={() => NavigationManager.GoToTab('HomePage')}
          title="Home"
        />
      </CellContainer>

      <CellContainer>
        <SecondaryButton
          onPress={() => NavigationManager.GoToTab('BluetoothListPage')}
          title="Configurar bluetooth"
        />
      </CellContainer>

      <CellContainer>
        <SecondaryButton
          onPress={() => NavigationManager.GoToTab('HistoryPage')}
          title="Página de Históricos"
        />
      </CellContainer>

      <CellContainer>
        <SecondaryButton
          onPress={() => NavigationManager.GoToTab('ConstantsPage')}
          title="Página de Constantes"
        />
      </CellContainer>

      <CellContainer>
        <SecondaryButton
          onPress={() => NavigationManager.GoToTab('EvaluationPage')}
          title="Página de testes"
        />
      </CellContainer>

      <CellContainer>
        <SecondaryButton
          onPress={() => NavigationManager.GoToTab('ControlPage')}
          title="Página para controlar o Tracer"
        />
      </CellContainer>
    </SafeAreaView>
  );
};
