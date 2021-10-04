import * as React from 'react';
import { View, Image, TouchableOpacity, StyleSheet} from 'react-native';

export const HeaderComponent = props => {
    return (
        <View style = {styles.header}>
          <TouchableOpacity>
            <Image style = {styles.icon} source = {require('../icons/bluetooth.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style = {styles.icon} source = {require('../icons/logo.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style = {styles.icon} source = {require('../icons/stop.png')}/>
          </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flex : 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  icon: {
    flex: 1,
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  rightIcon: {
    flex: 1,
    width: 50,
    height: 50,
    marginRight:0,
    resizeMode: 'contain'
  }
});