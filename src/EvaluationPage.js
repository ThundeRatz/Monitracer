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

import {PrimaryButton, SecondaryButton} from './components/button';
import {
  Header,
  CellContainer,
  CellTitleContainer,
  VBox,
  VSeparator,
  TextInputCell,
} from './components/cell';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {GoToPage} from './utils/nav';

export const EvaluationPage = props => {
  return (
    <SafeAreaView>
      <CellContainer>
        <SecondaryButton
          onPress={() => GoToPage(props.componentId, 'HomePage')}
          title="Home"
        />
      </CellContainer>

      <CellContainer>
        <SecondaryButton
          onPress={() => GoToPage(props.componentId, 'BluetoothListPage')}
          title="Configurar bluetooth"
        />
      </CellContainer>

      <CellContainer>
        <SecondaryButton
          onPress={() => GoToPage(props.componentId, 'HistoryPage')}
          title="Página de Históricos"
        />
      </CellContainer>

      <CellContainer>
        <SecondaryButton
          onPress={() => GoToPage(props.componentId, 'ConstantsPage')}
          title="Página de Constantes"
        />
      </CellContainer>

      <CellContainer>
        <SecondaryButton
          onPress={() => GoToPage(props.componentId, 'EvaluationPage')}
          title="Página de testes"
        />
      </CellContainer>

      <CellContainer>
        <SecondaryButton
          onPress={() => GoToPage(props.componentId, 'ControlPage')}
          title="Página para controlar o Tracer"
        />
      </CellContainer>
    </SafeAreaView>
  );
};
