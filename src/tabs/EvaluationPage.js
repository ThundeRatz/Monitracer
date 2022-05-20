/**
 * @file EvalationPage.js
 *
 * @brief Page to send test commands to Tracer
 *
 * @author Lucas Guedes <lucas.guedes@thunderatz.org>
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 05/2022
 */

import {SecondaryButton, TertiaryButton, ActionButton} from '../components/button';
import {CellContainer} from '../components/cell';
import React from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet} from 'react-native';
import {GoToTab} from '../utils/nav';
import {COLORS} from '../components/colors'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const encoder_evaluation = () => {
  console.log("testando encoder");
}

const line_sensor_evaluation = () => {
  console.log("testando sensor de linha");
}

const motors_evaluation = () => {
  console.log("testando motores");
}

const lateral_marks_evaluation = () => {
  console.log("testando marcacoes laterais")
}

export const EvaluationPage = props => {
  let evaluateRoutines = [
    {
      test_name: 'Teste de Encoder',
      routine: encoder_evaluation
    },
    {
      test_name: 'Teste de sensores de linha',
      routine: line_sensor_evaluation
    },
    {
      test_name: 'Teste de motores',
      routine: line_sensor_evaluation
    },
    {
      test_name: 'Teste de Marcações Laterias',
      routine: line_sensor_evaluation
    }
  ]
  return (
    <ScrollView style = {styles.container}>
      {evaluateRoutines.map((element, index) => {
          return (
            
            <View style ={styles.buttonContainer} key={index}>
              <ActionButton title= {element.test_name} onPress = {() => element.routine()}/>
            </View>
          )
        })
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:50
  }, 
  buttonContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  }

})