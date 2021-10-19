/**
 * @file ControlPage.js
 *
 * @brief Page to send commands to Tracer
 *
 * @author Lucas Guedes <lucas.guedes@thunderatz.org>
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 09/2021
 */

import {PrimaryButton, SecondaryButton} from '../components/button';
import {
  Header,
  CellContainer,
  CellTitleContainer,
  VBox,
  VSeparator,
  TextInputCell,
} from '../components/cell';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {GoToPage, GoToTab} from '../utils/nav';

export const ControlPage = props => {
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
