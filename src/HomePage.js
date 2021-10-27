/**
 * @file HomePage.js
 *
 * @brief Home page
 *
 * @author Gabriel Kishida <gabriel.kishida@thunderatz.org>
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 * @author Lucas Guedes <lucas.guedes@thunderatz.org>
 * @author Henrique D'Amaral <>
 * 
 * @date 10/2021
 */

import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import {COLORS} from './components/colors';
import {SPACING} from './components/grid';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const HomePage = props => {

  const build_fab_button = () => {
    return (
      <TouchableOpacity
      style={styles.roundButton1}>
        {/* <Ionicons name='alert-outline' size={50} color="white" /> */}
        <Ionicons name='bluetooth' color='white' size={30} />
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.blueBackground}>
        <Image
          style={styles.image}
          source={require('@img/Tracer-2.png')}
        />
      </View>
      <View style = {styles.triangleCorner}/>
      <View style={styles.buttonContainer}>
      <Image
        style={styles.logoTypo}
        source={require('@img/Tracer_typo.png')}
      />
      </View>
      <View style={styles.buttonContainer}>
        {build_fab_button()}
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  triangleCorner: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: Dimensions.get('window').width ,
    borderTopWidth: Dimensions.get('window').width * 0.15, //width * tan(8.5°)
    borderRightColor: "transparent",
    borderTopColor: COLORS.thunderBlue,
  },
  roundButton1: { 
    width: 64,
    height: 64,   //dimensions from figma
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.small,
    borderRadius: 100,
    backgroundColor: COLORS.thunderBlue,
  },
  blueBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.thunderBlue,
  },
  logoTypo: {
    height: 50,
    margin: 10,
    resizeMode: "center",
  },
  image: {
    height: 313,
    margin: 5,
    resizeMode: "center",
  },
  buttonContainer: {
    alignItems: 'center',
  },
});
