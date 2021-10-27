/**
 * @file HomePage.js
 *
 * @brief Home page
 *
 * @author Gabriel Kishida <gabriel.kishida@thunderatz.org>
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 * @author Lucas Guedes <lucas.guedes@thunderatz.org>
 * @author Henrique <>
 * 
 * @date 10/2021
 */

import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {H1, H2, H3, Body, BodySecondary} from './components/typography';
import {
  Header,
  CellContainer,
  CellTitleContainer,
  VBox,
  VSeparator,
  TextInputCell,
} from './components/cell';
import {PrimaryButton, SecondaryButton} from './components/button';
import {SmallModal} from './components/modal';
import {BTPostData} from './bt_communication/bt_data_sender';
import {
  BTGetDataContinuous,
  BTGetData,
} from './bt_communication/bt_data_receiver';
import {GoToPage} from './utils/nav';

export const HomePage = props => {

  const build_fab_button = () => {
    return (
      <TouchableOpacity
      style={styles.roundButton1}>
        <Text>I'm a button</Text>
      </TouchableOpacity>
    
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        
      </View>
      <View>
        {build_fab_button()}
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  roundButton1: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'blue',
  },
  blueBackground: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'blue',
  },

});
