/**
 * @file TestPage.js
 *
 * @brief Page to send test commands to Tracer
 *
 * @author Lucas Guedes <lucas.guedes@thunderatz.org>
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 09/2021
 */

import {SecondaryButton} from '../components/button';
import {CellContainer} from '../components/cell';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationManager} from '../utils/nav';

export const EvaluationPage = props => {
  return (
    <SafeAreaView>
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
