/**
 * @file EvaluationPage.js
 *
 * @brief Page to send test commands to Tracer
 *
 * @author Lucas Guedes <lucas.guedes@thunderatz.org>
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 05/2022
 */

import {ActionButton} from '../components/button';
import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {UnavailablePage} from '../components/unavailablePage';
import { SafeAreaView } from 'react-native-safe-area-context';

const SHOW_PAGE = true;

const encoder_evaluation = () => {
  console.log('testando encoder');
};

const line_sensor_evaluation = () => {
  console.log('testando sensor de linha');
};

const motors_evaluation = () => {
  console.log('testando motores');
};

const lateral_marks_evaluation = () => {
  console.log('testando marcacoes laterais');
};

export const EvaluationPage = props => {
  let evaluateRoutines = [
    {
      test_name: 'Teste de Encoder',
      routine: encoder_evaluation,
    },
    {
      test_name: 'Teste de sensores de linha',
      routine: line_sensor_evaluation,
    },
    {
      test_name: 'Teste de motores',
      routine: motors_evaluation,
    },
    {
      test_name: 'Teste de Marcações Laterais',
      routine: lateral_marks_evaluation,
    },
  ];
  return (
    <SafeAreaView>
      {SHOW_PAGE ? (
        <UnavailablePage />
      ): (
        <ScrollView style={styles.container}>
        {evaluateRoutines.map((element, index) => {
          return (
            <View style={styles.buttonContainer} key={index}>
              <ActionButton
                title={element.test_name}
                onPress={() => element.routine()}
              />
            </View>
          );
        })}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  buttonContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
