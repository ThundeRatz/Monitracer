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

import {SecondaryButton} from '../components/button';
import {CellContainer} from '../components/cell';
import React from 'react';
import {SafeAreaView, ScrollView, Text, StyleSheet, View, TextInput} from 'react-native';
import {GoToTab} from '../utils/nav';
import { Body,H1 } from '../components/typography';
import { COLORS } from '../components/colors';
import { PrimaryButton } from '../components/button';

export const ConstantsPage = props => {

  //Constantes que virão do servidor
  let constantTypes = ["P angular", "P angular", "I angular", "I angular", "D angular", "D angular", 
  "P angular", "P angular", "I angular", "I angular", "D angular", "D angular",
  "P angular", "P angular", "I angular", "I angular", "D angular", "D angular"];

  //Arranja o array de labels em duplas (matriz 2 x n/2) para dividir em 2 colunas na tela
  const arrayToMatrix = () => { 
    let constantCouples = [];

    constantTypes.forEach( (element, index, array) => {
      if (index%2 == 0){
        if(index == array.length - 1) {
          constantCouples.push([array[index],null]);
        } else {
          constantCouples.push([array[index],array[index+1]]);
        }
      } 
    })

    return constantCouples
  }

  let constantCouples = arrayToMatrix(constantTypes);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
       <H1 color="white" >SETUP</H1>
      </View>

      <View style={styles.constantsInputContainer}>
        <ScrollView>
          {constantCouples.map((element, index) => {
            return (
              <View style = {styles.tableRow} key={index}>
                <View style = {styles.tableCell}>  
                  <View style = {styles.textView}>
                    <Body>{element[0]}</Body>
                  </View>

                  <View style = {styles.textInputView}>
                    <TextInput style={styles.textInput}/>
                  </View>
                </View>
                
                <View style = {styles.tableCell}>  
                  <View style = {styles.textView}>
                    <Body>{element[0]}</Body>
                  </View>
                  
                  <View style = {styles.textInputView}>
                    <TextInput style={styles.textInput}/>
                  </View>

                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>

       {/* falta atualizar para os botões novos */}
      <View style={styles.buttonsContainer}>
        <View style={{flex: 1}}>
          <PrimaryButton title="Enviar" /> 
          <PrimaryButton title="Salvar" /> 
          <PrimaryButton title="Clear" />
        </View>
        <View style={{flex:2}}>
          <PrimaryButton title="Run"/>
          <PrimaryButton title="Stop"/>
        </View> 
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  constantsInputContainer: {
    flex: 2, 
    backgroundColor: COLORS.gray4,
  },
  titleContainer: {
    backgroundColor: COLORS.thunderBlue
  },
  buttonsContainer: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: COLORS.gray5
  },
  tableRow: {
    flexDirection : "row",
  },
  tableCell: {
    flexDirection : "row",
    flex: 1,
    padding:1, 
    alignItems: 'center',
    borderLeftColor: COLORS.gray3,
    borderLeftWidth: 1,

  },
  textView: {
    flex:3,
  },
  textInputView: {
    flex:2,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  textInput: {
    backgroundColor:"white",
    borderRadius:8,
    flex:1,
    height:35
  },
});