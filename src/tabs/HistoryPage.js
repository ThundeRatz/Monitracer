/**
 * @file HistoryPage.js
 *
 * @brief page to review previous Tracer performances
 *
 * @author Lucas Guedes <lucas.guedes@thunderatz.org>
 *
 * @date 09/2021
 */

import {ScrollView, View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {PrimaryDropdownCell, SecondaryDropdownCell} from '../components/cell'
import {Body, H3, H4} from '../components/typography';
import {COLORS} from '../components/colors';
import { ActionButton } from '../components/button';

// Funções de backend para serem implementadas
const importData = Lap => {
  console.log('Importando os dados da volta: ' + Lap['label']);
}

const lapAnalysis = Lap => {
  console.log('Analisando os dados da volta: ' + Lap['label']);
}

const eraseLap = Lap => {
  console.log('Apagando a volta: ' + Lap['label']);
}

const ConstantsTable = props => {
  return (
    props.constantsArray.map((element, index, array) => {
      if (index%2 == 0) {
        return (
          <View key={index} style = {styles.constantsTableRow}>
            <View style = {styles.constantsTableColumn} borderRightWidth = {1}>
              <View style = {styles.constantsTableLabel}>
                <H4>{array[index].label + ' :'}</H4>
              </View>
              <View style = {styles.constantsTableValue} >
                <Body>{array[index].value}</Body>
              </View>
            </View>
            <View style = {styles.constantsTableColumn}>
              <View style = {styles.constantsTableLabel}>
                <H4 >{((index+1 in array)? array[index + 1].label+ ' :': '')}</H4>
              </View>
              <View style = {styles.constantsTableValue}>
                <Body>{(index+1 in array)? array[index + 1].value: ''}</Body>
              </View>
            </View>
          </View>
        );
      }
    })
  )
}

export const HistoryPage = props => {

  // futuramente esse dado vai vir do servidor
  let lapsHistory = [
    {
      label: 'Corrida 1',
      constants: 
      [
        {
          label: 'kp_trans',
          value:1
        },
        {
          label: 'ki_trans',
          value:2
        },
        {
          label: 'kd_trans',
          value:3
        },
        {
          label: 'kp_rot',
          value:4
        },
        {
          label: 'ki_rot',
          value:5
        },
        {
          label: 'kd_rot',
          value:6
        },
        {
          label: 'kd_rot',
          value:6
        },
      ],
    },
    {
      label: 'Corrida 2',
      constants: 
      [
        {
          label: 'kp_trans',
          value:1
        },
        {
          label: 'ki_trans',
          value:2
        },
        {
          label: 'kd_trans',
          value:3
        },
        {
          label: 'kp_rot',
          value:4
        },
        {
          label: 'ki_rot',
          value:5
        },
        {
          label: 'kd_rot',
          value:6
        },
      ],
    }, 
  ];
  return (
    <ScrollView style={styles.container}>
      {lapsHistory.map((element, index) => {
        return (
          <View style={styles.cellContainer} key={index}>
            <SecondaryDropdownCell title = {element.label} 
              content = {
                <View>
                  <ConstantsTable constantsArray = {element.constants}/>

                  <View paddingHorizontal = {50} paddingVertical = {10}>
                    <View style = {styles.buttonContainer}>
                      <ActionButton title = {'Importar dados'} onPress = { () => importData(element)}/>
                    </View>
                    <View style = {styles.buttonContainer}>
                      <ActionButton title = {'Análise de corrida'} onPress = { () => lapAnalysis(element)}/>
                    </View>
                    <View style = {styles.buttonContainer}>
                      <ActionButton title = {'Apagar corrida'} onPress = { () => eraseLap(element)}/> 
                    </View>
                  </View>
                </View>
              }
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
  cellContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  constantsTableRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex:1.2,
  },
  constantsTableColumn: {
    borderBottomWidth:2,
    borderColor: COLORS.gray4,
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    margin:-1,
    padding:4,
  },
  constantsTableLabel: {
    flex:2  
  },
  constantsTableValue: {
    justifyContent: 'center', //Centered horizontally
    alignItems: 'center', //Centered vertically
    flex:1,
  },
  buttonContainer: {
    paddingVertical:10,
  }
});