import * as React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationManager} from '../utils/nav';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GoToDinoTracer} from '../utils/DinoTracer';
import {COLORS} from './colors';

export const HeaderComponent = props => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => NavigationManager.GoToTab('BluetoothListPage')}
      >
        <Ionicons name="bluetooth" color={COLORS.thunderWhite} size={30} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => NavigationManager.GoToTab('HomePage')}
        onLongPress={() => GoToDinoTracer()}
      >
        <Image
          style={styles.icon}
          source={require('../../assets/img/logo.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="square" color={COLORS.thunderWhite} size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.thunderBlue,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  icon: {
    flex: 1,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  rightIcon: {
    flex: 1,
    width: 50,
    height: 50,
    marginRight: 0,
    resizeMode: 'contain',
  },
});
