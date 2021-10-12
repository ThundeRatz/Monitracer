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

export const ConstantsPage = props => {
  return (
    <SafeAreaView>
      <CellContainer>
        <SecondaryButton
          onPress={() => props.navigation.navigate('HomePage')}
          title="Home"
        />
      </CellContainer>

      <CellContainer>
        <SecondaryButton
          //onPress={() => GoToPage(props.componentId, 'BluetoothListPage')}
          title="Configurar bluetooth"
        />
      </CellContainer>

      <CellContainer>
        <SecondaryButton
          onPress={() => props.navigation.navigate('HistoryPage')}
          title="Página de Históricos"
        />
      </CellContainer>

      <CellContainer>
        <SecondaryButton
          onPress={() => props.navigation.navigate('ConstantsPage')}
          title="Página de Constantes"
        />
      </CellContainer>

      <CellContainer>
        <SecondaryButton
          onPress={() => props.navigation.navigate('EvaluationPage')}
          title="Página de testes"
        />
      </CellContainer>

      <CellContainer>
        <SecondaryButton
          onPress={() => props.navigation.navigate('ControlPage')}
          title="Página para controlar o Tracer"
        />
      </CellContainer>
    </SafeAreaView>
  );
};
