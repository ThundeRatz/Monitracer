/**
 * @file BTList.js
 *
 * @brief Implementation of Bluetooth list
 *
 * @author Lucas Guedes <lucas.guedes@thunderatz.org>
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 09/2021
 */

import React from 'react';
import {FlatList, View, Text, StyleSheet, Switch} from 'react-native';

import {VBox, VSeparator} from './grid';
import {ListSeparator} from './cell'
import {H1, H3, Body, BodySecondary} from './typography';
import {PrimaryButton} from './button';
import {BTConnection} from '../bt_communication/bt_connection';

export const BTList = props => {
  const [, , , , BTLogin] = BTConnection();

  const _renderItem = ({item}) => {
    return (
      <View style={styles.wrapper}>
        <View>
          <H3> {item.name} </H3>
          <BodySecondary> {item.id}</BodySecondary>
        </View>
        <View>
          <PrimaryButton title="conectar" onPress={() => connectPress(item)} />
        </View>
      </View>
    );
  };

  const connectPress = async device => {
    await BTLogin(device);
  };

  const renderEmpty = () => {
    return (
      <VBox>
        <VSeparator />
        <Body> Não há dispositivos disponíveis</Body>
      </VBox>
    );
  };

  return (
    <FlatList
      ListEmptyComponent={renderEmpty}
      data={props.data}
      ItemSeparatorComponent={ListSeparator}
      ListFooterComponent={ListSeparator}
      ListHeaderComponent={ListSeparator}
      keyExtractor={item => item.id}
      renderItem={item => _renderItem(item)}
    />
  );
};

export const BluetoothEnableButton = props => {
  return (
    <View style={styles.enable}>
      <BodySecondary>Ligar Bluetooth</BodySecondary>
      <Text style={styles.text}></Text>
      <Switch value={props.value} onValueChange={props.onValueChange}></Switch>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '2%',
  },
  enable: {
    flexDirection: 'row',
    marginTop: '5%',
    marginBottom: '2%',
  },
  text: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  switch: {
    width: 50,
  },
});
