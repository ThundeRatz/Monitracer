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
import {FlatList, View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView} from 'react-native';

import {ListSeparator} from './cell';
import {VBox, VSeparator} from './grid';
import {H1, H3, Body, BodySecondary} from './typography';
import {PrimaryButton} from './button';
import {BTConnection} from '../bt_communication/bt_connection';
import { COLORS } from './colors';
import { DeviceCell } from './cell';

export const BTList = props => {
  const [, , , , BTLogin] = BTConnection();

  const _renderItem = ({item}) => {
    return (
      <View padding={10} alignItems={'center'}>
        <TouchableOpacity onPress={() => connectPress(item)}>
          <DeviceCell deviceName={item?.name} deviceId={item?.id} />
        </TouchableOpacity> 
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
    <View flex={1}>
      <FlatList
        ListEmptyComponent={renderEmpty}
        data={props.data}
        keyExtractor={item => item?.id}
        renderItem={item => _renderItem(item)}
        style={{height: '100%'}}
      />
    </View>
    
  );
};

export const BluetoothEnableButton = props => {
  return (
    <View style={styles.enable}>
      <H3 color={props.color ?? COLORS.thunderBlack}>BLUETOOTH</H3>
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
    marginTop: '2%',
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
