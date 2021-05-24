/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import { Navigation } from "react-native-navigation";

import {H1,H2,H3,Body,BodySecondary} from './Components/typography'
import {Header, CellContainer, CellTitleContainer, VBox, VSeparator, TextInputCell} from './Components/cell'
import {PrimaryButton, SecondaryButton} from './Components/button'
import {SmallModal} from './Components/modal'

const HomePage = (props) => {
  const [inputValue, setInputValue] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleSimpleTestPress = () => {
    console.log("Press!")
  }

  const handleComplexTestPress = () => {
    console.log("sinal: " + inputValue)
  }

  const handleBluetoothPress = () => {
    Navigation.push(props.componentId, {
      component: {
        name: 'BluetoothListPage',
        options: {
          topBar: {
            title: {
              text: 'Bluetooth List Page'
            }
          }
        }
      }
    }
  )}

  const handleReceiveSignal = () => {
    setModalVisible(true);
  }

  const handleCloseModal = () => {
    setModalVisible(false);
  }

  return (
    <SafeAreaView>
      <Header>
        <H1>Monitracer</H1>
        <Body>Versão para testes de desenvolvimento</Body>
      </Header>
      <VSeparator half/>
      <VBox>
        <CellTitleContainer>
          <H3>Teste Simples</H3>
        </CellTitleContainer>
      </VBox>
      <CellContainer>
        <PrimaryButton onPress={handleSimpleTestPress} title={"Enviar sinal simples"}/>
      </CellContainer>
      <VBox>
        <VSeparator half/>
        <CellTitleContainer>
          <H3>Teste Complexo</H3>
        </CellTitleContainer>
      </VBox>
      <CellContainer>
        <TextInputCell 
          placeholder={"Insira aqui o valor a enviar via bluetooth"}
          onChangeText={setInputValue}
          value={inputValue}
        />
        <PrimaryButton onPress={handleComplexTestPress} title={"Enviar sinal complexo"}/>
      </CellContainer>
      <VSeparator half/>
      <VBox>
        <CellTitleContainer>
          <H3>Configurações</H3>
        </CellTitleContainer>
      </VBox>
      <CellContainer>
        <SecondaryButton onPress={handleBluetoothPress} title="Configurar bluetooth" />
      </CellContainer>
      <SmallModal message={"O sinal recebido foi: "} handleClose={handleCloseModal} visible={modalVisible}/>
    </SafeAreaView>
  );
};


export default HomePage;
