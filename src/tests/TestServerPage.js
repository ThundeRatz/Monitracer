/**
 * @file TestServer.js
 *
 * @brief Home page
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
  VBox,
  VSeparator,
  TextInputCell,
} from '../components/cell';
import {
  PrimaryButton,
  SecondaryButton,
  DataSenderButton,
  DataReceiverButton,
} from '../components/button';
import {SmallModal} from '../components/modal';

const TestServer = props => {
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
          <DataSenderButton
            title={'Enviar constantes'}
            name={input_name}
            kp={input_kp}
            kd={input_kd}
            ki={input_ki}
            lap_time={input_time}
          />
          <DataReceiverButton title={'Receber constantes'} />
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
