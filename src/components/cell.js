import React, { useState } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, LayoutAnimation, UIManager} from 'react-native';
import {H3} from './typography';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Header = props => {
  return <View style={styles.header}>{props.children}</View>;
};

export const CellTitleContainer = props => {
  return <View style={styles.cellTitle}>{props.children}</View>;
};

export const CellContainer = props => {
  return <View style={styles.cell}>{props.children}</View>;
};

export const VBox = props => {
  return <View style={styles.vbox}>{props.children}</View>;
};

export const VSeparator = props => {
  if (props.half) {
    return <View style={styles.vSeparatorHalf}>{props.children}</View>;
  } else {
    return <View style={styles.vSeparator}>{props.children}</View>;
  }
};


export const DropdownCell = props => {
  
  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const [expanded, setExpanded] = useState(false);
  
  return (
    <View >
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.create(200, 'linear', 'opacity'));
          setExpanded(!expanded);
        }}
      >
        <H3>{props.title}</H3>
        <Ionicons name={expanded? 'chevron-up-outline': 'chevron-down-outline'} size={40} color={'black'} />
       
      </TouchableOpacity>
      {expanded && (
        <View style={styles.dropdown_content}>
          {props.content}         
        </View>
      )}
    </View>
  );
}

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
  dropdown: {
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor: 'lightgray',
    padding: 16,
  },
  dropdown_content:{
    padding:16,
  },
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
  vbox: {
    marginHorizontal: 16,
  },
  vSeparator: {
    height: 32,
  },
  vSeparatorHalf: {
    height: 16,
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
