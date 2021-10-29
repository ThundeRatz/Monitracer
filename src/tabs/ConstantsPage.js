/**
 * @file ConstantsPage.js
 *
 * @brief Page to send and receive constants
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
import {GoToTab} from '../utils/nav';

export const ConstantsPage = props => {
  return (
    <SafeAreaView>
      <CellContainer>
        <SecondaryButton onPress={() => GoToTab('HomePage')} title="Home" />
      </CellContainer>

      <CellContainer>
        <SecondaryButton
          onPress={() => GoToTab('BluetoothListPage')}
          title="Configurar bluetooth"
        />
      </CellContainer>

      <CellContainer>
        <SecondaryButton
          onPress={() => GoToTab('HistoryPage')}
          title="Página de Históricos"
        />
      </CellContainer>

      <CellContainer>
        <SecondaryButton
          onPress={() => GoToTab('ConstantsPage')}
          title="Página de Constantes"
        />
      </CellContainer>

      <CellContainer>
        <SecondaryButton
          onPress={() => GoToTab('EvaluationPage')}
          title="Página de testes"
        />
      </CellContainer>

      <CellContainer>
        <SecondaryButton
          onPress={() => GoToTab('ControlPage')}
          title="Página para controlar o Tracer"
        />
      </CellContainer>
    </SafeAreaView>
  );
};
