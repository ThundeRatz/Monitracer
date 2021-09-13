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
  View
} from 'react-native';
 
 import {Navigation} from "react-native-navigation";
 
 import {H1,H2,H3,Body,BodySecondary} from './components/typography'
 import {Header, CellContainer, CellTitleContainer, VBox, VSeparator, TextInputCell} from './components/cell'
 import {PrimaryButton, SecondaryButton} from './components/button'
 import {SmallModal} from './components/modal'
 import {BTPostData} from './bt_communication/bt_data_sender'
 import {BTGetDataContinuous,BTGetData} from './bt_communication/bt_data_receiver'
 
 const HomePage = (props) => {
   const [inputValue, setInputValue] = React.useState('');
   const [modalVisible, setModalVisible] = React.useState(false);
 
   const handleSimpleTestPress = async () => {
     BTPostData("1");
   };
 
   const handleComplexTestPress = async () => {
     BTPostData(inputValue);
   };
 
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

   const handleTestServer = () => {
    Navigation.push(props.componentId, {
      component: {
        name: 'TestServer',
        options: {
          topBar: {
            title: {
              text: 'test server page'
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
            <PrimaryButton onPress={BTGetDataContinuous} title={"iniciar leitura bluetooth"}/>
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
        
        <VBox>
          <CellTitleContainer>
            <H3>Página Inicial</H3>
          </CellTitleContainer>
        </VBox>
        <CellContainer>
          <SecondaryButton onPress={handleTestServer} title="Página Inicial" />
        </CellContainer>      
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