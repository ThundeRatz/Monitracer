import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
} from 'react-native';
import {H3, Body, BodySecondary} from './typography';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from './colors';
import {SPACING, HBox, HBoxItem} from './grid';

export const Header = props => {
  return <View style={styles.header}>{props.children}</View>;
};

export const CellTitleContainer = props => {
  return <View style={styles.cellTitle}>{props.children}</View>;
};

export const CellContainer = props => {
  return <View style={styles.cell}>{props.children}</View>;
};

const setAnimationCallback = () => {
  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export const PrimaryDropdownCell = props => {
  const [expanded, setExpanded] = useState(false);
  useEffect(()=>setAnimationCallback());

  return (
    <View>
      <TouchableOpacity
        style={styles.primaryDropdown}
        onPress={() => {
          LayoutAnimation.configureNext(
            LayoutAnimation.create(200, 'linear', 'opacity'),
          );
          setExpanded(!expanded);
        }}
      >
        <H3 color={'white'}>{props.title}</H3>
        <Ionicons
          name={expanded ? 'chevron-up-outline' : 'chevron-down-outline'}
          size={40}
          color={'white'}
        />
      </TouchableOpacity>
      {expanded && <View style={styles.dropdownContent}>{props.content}</View>}
    </View>
  );
};

export const SecondaryDropdownCell = props => {
  const [expanded, setExpanded] = useState(false);
  useEffect(()=>setAnimationCallback());

  return (
    <View>
      <TouchableOpacity
        style={styles.secondaryDropdown}
        onPress={() => {
          LayoutAnimation.configureNext(
            LayoutAnimation.create(200, 'linear', 'opacity'),
          );
          setExpanded(!expanded);
        }}
      >
        <H3>{props.title}</H3>
        <Ionicons
          name={expanded ? 'chevron-up-outline' : 'chevron-down-outline'}
          size={40}
          color={'black'}
        />
      </TouchableOpacity>
      {expanded && <View style={styles.dropdownContent}>{props.content}</View>}
    </View>
  );
};

export const DeviceCell = props => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.deviceId}>
        <HBox style={{backgroundColor:COLORS.thunderBlack}}>
          <HBoxItem>
            <Body>{props.deviceName}</Body>
            <BodySecondary color={COLORS.gray3}>{props.deviceId}</BodySecondary>
          </HBoxItem>
          <HBoxItem flex>
            {props.deviceIsConnected && <View style ={styles.connectionBall}/>}
          </HBoxItem>
        </HBox>
        
      </View>
    </View>
  );
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
  deviceId: {
    backgroundColor: COLORS.gray4,
    padding: SPACING.xSmall,
    borderRadius: SPACING.xSmall,
    width: '100%',
  },
  connectionBall: {
    backgroundColor: COLORS.thunderSuccess,
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
    borderRadius: 10,
  },
  secondaryDropdown: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.gray4,
    padding: SPACING.small,
  },
  primaryDropdown: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.thunderBlue,
    padding: SPACING.small,
  },
  dropdownContent: {
    padding: SPACING.small,
  },
  header: {
    padding: SPACING.small,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: '#f5d97d',
  },
  cellTitle: {
    padding: 12,
  },
  cell: {
    padding: SPACING.xsmall,
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
