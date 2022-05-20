/**
 * @file TestServerPage.js
 *
 * @brief Test Server page
 *
 * @author Gabriel Kishida <gabriel.kishida@thunderatz.org>
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 06/2021
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';

import {Navigation} from 'react-native-navigation';

import {H1, H2, H3, Body, BodySecondary} from '../components/typography';
import {
  Header,
  CellContainer,
  CellTitleContainer,
  TextInputCell,
} from '../components/cell';
import {VSeparator, VBox} from '../components/grid';
import {
  PrimaryButton,
  SecondaryButton,
  DataSenderButton,
  DataReceiverButton,
} from '../components/button';
import {SmallModal} from '../components/modal';
import {PostLap} from '../server_communication/laps_api';
import {GetConstantsList} from '../server_communication/constants_api';

export const TestServer = props => {
  //server variables
  const [input_name, setInputName] = React.useState('');
  const [input_kp, setInputKp] = React.useState('');
  const [input_kd, setInputKd] = React.useState('');
  const [input_ki, setInputKi] = React.useState('');
  const [input_time, setInputTime] = React.useState('');

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
            <H3>Teste servidor</H3>
          </CellTitleContainer>
        </VBox>
        <CellContainer>
          <TextInputCell
            placeholder={'Insira aqui o nome do teste'}
            onChangeText={setInputName}
            value={input_name}
          />
          <TextInputCell
            placeholder={'Insira aqui o valor de kp'}
            onChangeText={setInputKp}
            value={input_kp}
          />
          <TextInputCell
            placeholder={'Insira aqui o valor de kd'}
            onChangeText={setInputKd}
            value={input_kd}
          />
          <TextInputCell
            placeholder={'Insira aqui o valor de ki'}
            onChangeText={setInputKi}
            value={input_ki}
          />
          <TextInputCell
            placeholder={'Insira tempo de volta'}
            onChangeText={setInputTime}
            value={input_time}
          />
          <PrimaryButton
            onPress={async () => {
              await PostLap(
                input_name,
                [input_kp, input_ki, input_kd],
                parseInt(input_time),
              );
            }}
            title={'Enviar constantes'}
          />
          <PrimaryButton
            onPress={async () => await GetConstantsList()}
            title={'receber constantes'}
          />
        </CellContainer>
        <VSeparator half />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default TestServer;
