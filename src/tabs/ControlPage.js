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

import {SecondaryButton} from '../components/button';
import {CellContainer} from '../components/cell';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationManager} from '../utils/nav';
import {UnavailablePage} from '../components/unavailablePage';

const SHOW_PAGE = true;

export const ControlPage = props => {
  return (
    <SafeAreaView>
      {SHOW_PAGE ? (
        <UnavailablePage />
      ) : (
        <>
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
              title="Página controlar Tracer"
            />
          </CellContainer>

          <CellContainer>
            <SecondaryButton
              onPress={() => NavigationManager.GoToTab('TestServerPage')}
              title="Página para testes no geral"
            />
          </CellContainer>
        </>
      )}
    </SafeAreaView>
  );
};
