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
import {COLORS} from '../components/colors';
import {SPACING} from '../components/grid';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const HomePage = props => {

  const FabButton = props => {
    return (
      <TouchableOpacity
      style={styles.roundButton1}>
        <Ionicons name='book-outline' size={35} color="white" />
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
      <View style={styles.titleContainer}>
        <Image
          style={styles.logoTypo}
          source={require('@img/Tracer_typo.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <FabButton/>
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column'
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
    flex:3,
    alignItems: 'center',
    backgroundColor: COLORS.thunderBlue,
  },
  logoTypo: {
    height: 50,
    margin: 10,
    resizeMode: "center",
  },
  image: {
    height: 220,
    margin: 20,
    resizeMode: "center",
  },
  buttonContainer: {
    flex:1.5,
    justifyContent:'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex:1,
    alignItems: 'center',
  },
});
