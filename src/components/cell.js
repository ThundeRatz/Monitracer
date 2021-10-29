import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export const Header = props => {
  return <View style={styles.header}>{props.children}</View>;
};

export const CellTitleContainer = props => {
  return <View style={styles.cellTitle}>{props.children}</View>;
};

export const CellContainer = props => {
  return <View style={styles.cell}>{props.children}</View>;
};

export const TextInputCell = props => {
  return (
    <TextInput
      style={styles.textInput}
      onChangeText={props.onChangeText}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
};

export const ListSeparator = () => {
  return (
    <View style={styles.list}>
      <View style={styles.ListSeparator}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: '#f5d97d',
  },
  cellTitle: {
    padding: 12,
  },
  cell: {
    padding: 8,
    borderColor: '#e3e3e3',
    backgroundColor: '#f2f2f2',
    borderWidth: 0.5,
  },
  ListSeparator: {
    height: 1,
    marginHorizontal: '10%',
    marginVertical: '2%',
    width: '80%',
    backgroundColor: '#000',
  },
  textInput: {
    backgroundColor: '#ffffff',
    height: 40,
    margin: 12,
    borderRadius: 12,
  },
  list: {
    flexDirection: 'row',
  },
});
