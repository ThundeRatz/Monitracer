/**
 * @file HomePage.js
 *
 * @brief Home page
 *
 * @author Gabriel Kishida <gabriel.kishida@thunderatz.org>
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 06/2021
 */

import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import {H1, H3, Body} from '../components/typography';
import {VSeparator, VBox} from '../components/grid';
import {
  Header,
  CellContainer,
  CellTitleContainer,
  TextInputCell,
} from '../components/cell';
import { PrimaryButton, SecondaryButton, PrimaryButtonSmall, TertiaryButton, ActionButton, RedActionButton, RegulationButton } from '../components/button';
import { SmallModal } from '../components/modal';
import { BTPostData } from '../bt_communication/bt_data_sender';
import {
  BTGetDataContinuous,
} from '../bt_communication/bt_data_receiver';
import { GoToPage } from '../utils/nav';

export const HomePage = props => {
  const [inputValue, setInputValue] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleSimpleTestPress = async () => {
    await BTPostData('1');
  };

  const handleComplexTestPress = async () => {
    await BTPostData(inputValue);
  };

  const handleReceiveSignal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Header>
        <H1>Monitracer</H1>
        <Body>Versão para testes de desenvolvimento</Body>
      </Header> */}
      <ScrollView>
        <VSeparator half />

        <CellContainer>
          <PrimaryButton
            onPress={handleSimpleTestPress}
            title={'PB enable'}
            disable={false}
          />
        </CellContainer>

        <VSeparator half />

        <CellContainer>
          <PrimaryButton
            onPress={BTGetDataContinuous}
            title={'PB disable'}
            disable={true}
          />
        </CellContainer>

        <CellContainer>
          <PrimaryButtonSmall
            onPress={BTGetDataContinuous}
            title={'PBS enable'}
            disable={false}
          />
        </CellContainer>

        <CellContainer>
          <PrimaryButtonSmall
            onPress={BTGetDataContinuous}
            title={'PBS disable'}
            disable={true}
          />
        </CellContainer>

        <VSeparator half />

        <CellContainer>
          <SecondaryButton
            onPress={BTGetDataContinuous}
            title={'SB enable'}
            disable={false}
          />
        </CellContainer>

        <CellContainer>
          <SecondaryButton
            onPress={BTGetDataContinuous}
            title={'SB disable'}
            disable={true}
          />
        </CellContainer>

        <VSeparator half />

        <CellContainer>
          <TertiaryButton
            onPress={BTGetDataContinuous}
            title={'TB enable'}
            disable={false}
          />
        </CellContainer>

        <CellContainer>
          <TertiaryButton
            onPress={BTGetDataContinuous}
            title={'TB disable'}
            disable={true}
          />
        </CellContainer>

        <VSeparator half />

        <CellContainer>
          <ActionButton
            onPress={BTGetDataContinuous}
            title={'AB1 enable'}
            disable={false}
          />
        </CellContainer>

        <CellContainer>
          <ActionButton
            onPress={BTGetDataContinuous}
            title={'AB1 disable'}
            disable={true}
          />
        </CellContainer>

        <VSeparator half />

        <CellContainer>
          <RedActionButton
            onPress={BTGetDataContinuous}
            title={'RAB enable'}
            disable={false}
          />
        </CellContainer>

        <CellContainer>
          <RedActionButton
            onPress={BTGetDataContinuous}
            title={'RAB disable'}
            disable={true}
          />
        </CellContainer>

        <VSeparator half />

        <CellContainer>
          <RegulationButton
            onPress={BTGetDataContinuous}
          />
        </CellContainer>

        <VBox>
          <CellTitleContainer>
            <H3>Testes</H3>
          </CellTitleContainer>
        </VBox>

        <CellContainer>
          <SecondaryButton
            onPress={() => GoToPage(props.componentId, 'BluetoothListPage')}
            title="CONFIGURAR"
          />
        </CellContainer>

        <CellContainer>
          <SecondaryButton
            onPress={() => GoToPage(props.componentId, 'HistoryPage')}
            title="HISTÓRICOS"
          />
        </CellContainer>

        <CellContainer>
          <SecondaryButton
            onPress={() => GoToPage(props.componentId, 'ConstantsPage')}
            title="CONSTANTES"
          />
        </CellContainer>

        <CellContainer>
          <SecondaryButton
            onPress={() => GoToPage(props.componentId, 'EvaluationPage')}
            title="TESTES"
          />
        </CellContainer>

        <CellContainer>
          <SecondaryButton
            onPress={() => GoToPage(props.componentId, 'ControlPage')}
            title="CONTROLE"
          />
        </CellContainer>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
