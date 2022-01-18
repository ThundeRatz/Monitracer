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

import {CellContainer} from '../components/cell';
import React from 'react';
import {SafeAreaView, ScrollView, Text, StyleSheet, View, TextInput, Dimensions, ColorPropType} from 'react-native';
import {GoToTab} from '../utils/nav';
import { Body , H1 , H3} from '../components/typography';
import { COLORS } from '../components/colors';
import { PrimaryButton , SecondaryButton, TertiaryButton, ActionButton, RedActionButton, GreenActionButton} from '../components/button';
import { ROTATION } from '../components/rotation.js';
import { SPACING } from '../components/grid.js';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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

      <View backgroundColor={COLORS.gray4}>
        <View style={ROTATION.OitoEMeia}>
          <View style={styles.titleContainer} paddingLeft = {20}>
            <H3 color="white">SETUP</H3>
          </View>
        </View>
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

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonRow}>
          <View style = {styles.buttonCell}>  
            <ActionButton title="Enviar" />
          </View> 
          <View style = {styles.buttonCell}>  
            <GreenActionButton title="Salvar" />
          </View> 
          <View style = {styles.buttonCell}>  
            <RedActionButton title="Clear" />
          </View> 
        </View>
        <View style={styles.buttonRow} >
          <View style = {styles.buttonCell}>  
            <PrimaryButton title="Run"/>
          </View>
          <View style = {styles.buttonCell}>  
            <SecondaryButton title="Stop"/>
          </View>
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
    flex: 1.5, 
    backgroundColor: COLORS.gray4,
  },
  titleContainer: {
    backgroundColor: COLORS.thunderBlue,
    width: Dimensions.get('window').width / 0.989, //width / cos(8.5°)
    top: - Dimensions.get('window').width * 0.14945 / 2, // width * tg(8,5°) / 2
    height: Dimensions.get('window').width * 0.148, //width / sen(8,5°)
    left: - Dimensions.get('window').width * 0.148 * 0.14945 //width * sin(8.5°) * tan(8.5°)
  },
  buttonsContainer: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: COLORS.gray5,
    
  },
  tableRow: {
    flexDirection : "row",
  },
  buttonRow: {
    flexDirection : "row",
    paddingVertical: 10
  },
  tableCell: {
    flexDirection : "row",
    flex: 1,
    padding:1,
    alignItems: 'center',
    borderLeftColor: COLORS.gray3,
    borderLeftWidth: 1,
    paddingLeft: 5,
    justifyContent: 'center',
  },
  buttonCell: {
    flexDirection : "row",
    flex: 1,
    padding:1,
    justifyContent: 'center',
  },
  textView: {
    flex:3,
  },
  textInputView: {
    flex:2,
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  textInput: {
    backgroundColor:"white",
    borderRadius:8,
    flex:1,
    height:25,
    fontSize:15,
    paddingVertical: 0,
    textAlign: 'center'
  },
});
