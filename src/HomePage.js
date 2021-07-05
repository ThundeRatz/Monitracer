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

import React,{useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import { Navigation } from "react-native-navigation";

import {H1,H2,H3,Body,BodySecondary} from './components/typography'
import {Header, CellContainer, CellTitleContainer, VBox, VSeparator, TextInputCell} from './components/cell'
import {PrimaryButton, SecondaryButton,DataSenderButton, DataReceiverButton} from './components/button'
import {SmallModal} from './components/modal'

import {BTReadButton} from './components/bluetooth_list/bluetooth_read_button'
import BluetoothSerial from 'react-native-bluetooth-serial-next'

const HomePage = (props) => {
  const [inputValue, setInputValue] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);

  //server variables
  const [inputkp, setInputkp] = React.useState('');
  const [inputkd, setInputkd] = React.useState('');
  const [inputki, setInputki] = React.useState('');
  const [inputtime, setInputtime] = React.useState('');

  const handleSimpleTestPress = async () => {
    try{
      console.log("Press simple signal!");
      await BluetoothSerial.write("1");
      //console.log(res);
      console.log('Successfuly wrote to device');
      //connected = true;
    } catch(error){
        console.log(error);
    }
  }

  const handleComplexTestPress = async () => {
    try{
        console.log("sinal: " + inputValue)
        await BluetoothSerial.write(inputValue);
        //console.log(res);
        console.log('Successfuly wrote to device');
        //connected = true;
    } catch(error){
        console.log(error);
    }
  }

  const handleComplexTestPressToServer = async () => {
    try{
      console.log("sinal: " + inputkp + inputkd + inputki + inputtime);

    } catch(error){
        console.log(error);
    }
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
    <SafeAreaView style={styles.container}>
      <Header>
        <H1>Monitracer</H1>
        <Body>Versão para testes de desenvolvimento</Body>
      </Header>
      <ScrollView>
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
        <VBox>
          <VSeparator half/>
          <CellTitleContainer>
            <H3>Teste leitura bluetooth</H3>
          </CellTitleContainer>
        </VBox>
      <CellContainer>
          <BTReadButton title={"iniciar leitura bluetooth"}/>
      </CellContainer>
        <VSeparator half/>
        <VBox>
          <CellTitleContainer>
            <H3>Teste servidor</H3>
          </CellTitleContainer>
        </VBox>
        <CellContainer>
          <TextInputCell 
            placeholder={"Insira aqui o valor de kp"}
            onChangeText={setInputkp}
            value={inputkp}
          />
          <TextInputCell 
            placeholder={"Insira aqui o valor de kd"}
            onChangeText={setInputkd}
            value={inputkd}
          />
          <TextInputCell 
            placeholder={"Insira aqui o valor de ki"}
            onChangeText={setInputki}
            value={inputki}
          />
          <TextInputCell 
            placeholder={"Insira tempo de volta"}
            onChangeText={setInputtime}
            value={inputtime}
          />
          <DataSenderButton title={"Enviar constantes"} kp={inputkp} kd={inputkd} ki={inputki} lap_time={inputtime}/>
          <DataReceiverButton title={"Receber constantes"}/>
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
export default HomePage;
