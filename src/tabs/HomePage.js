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

import {H1, H3, Body} from './components/typography';
import {VSeparator, VBox} from './components/grid';
import {
  Header,
  CellContainer,
  CellTitleContainer,
  TextInputCell,
} from '../components/cell';
import {PrimaryButton} from '../components/button';
import {SmallModal} from '../components/modal';
import {BTPostData} from '../bt_communication/bt_data_sender';
import {BTGetDataContinuous} from '../bt_communication/bt_data_receiver';

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
      <Header>
        <H1>Monitracer</H1>
        <Body>Versão para testes de desenvolvimento</Body>
      </Header>
      <ScrollView>
        <VSeparator half />

        <VBox>
          <CellTitleContainer>
            <H3>Teste Simples</H3>
          </CellTitleContainer>
        </VBox>

        <CellContainer>
          <PrimaryButton
            onPress={handleSimpleTestPress}
            title={'Enviar sinal simples'}
          />
        </CellContainer>

        <VSeparator half />

        <VBox>
          <CellTitleContainer>
            <H3>Teste Complexo</H3>
          </CellTitleContainer>
        </VBox>

        <CellContainer>
          <TextInputCell
            placeholder={'Insira aqui o valor a enviar via bluetooth'}
            onChangeText={setInputValue}
            value={inputValue}
          />
          <PrimaryButton
            onPress={handleComplexTestPress}
            title={'Enviar sinal complexo'}
          />
        </CellContainer>

        <VSeparator half />

        <VBox>
          <CellTitleContainer>
            <H3>Teste leitura bluetooth</H3>
          </CellTitleContainer>
        </VBox>

        <CellContainer>
          <PrimaryButton
            onPress={BTGetDataContinuous}
            title={'iniciar leitura bluetooth'}
          />
        </CellContainer>

        <VSeparator half />

        <SmallModal
          message={'O sinal recebido foi: '}
          handleClose={handleCloseModal}
          visible={modalVisible}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
