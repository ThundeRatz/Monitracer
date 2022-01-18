/**
 * @file buttons.js
 *
 * @brief buttons models
 *
 * @author Gabriel Kishida <gabriel.kishida@thunderatz.org>
 * @author Henrique D`Amaral <henrique.matheus@thunderatz.org>
 *
 * @date 12/2021
 */

import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { H3, H4, Body } from './typography';
import { SPACING } from './grid';
import { COLORS } from './colors.js';
import { ROTATION } from './rotation.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const PrimaryButton = props => {
  props.disable ? (
      mainColor = COLORS.lightThunderBlue,
      secondaryColor = COLORS.lightThunderYellow,
      textColor = COLORS.gray5) : 
    (
      mainColor = COLORS.thunderBlue,
      secondaryColor = COLORS.thunderYellow,
      textColor = COLORS.gray6
    );
  return (<>
    <View style={{ height: props.title.length * 0.6 }} />
    <View>
      <TouchableOpacity onPress={props.onPress} style={ROTATION.Ktorze}>
        <View style={styles.BackgroundButton} backgroundColor={secondaryColor}>
          <H3 color={secondaryColor}>
            {props.title}
          </H3>
        </View>
        <View style={styles.mainButton} backgroundColor={mainColor}>
          <H3 color={textColor}>
            {props.title}
          </H3>
        </View>
      </TouchableOpacity >
    </View>
  </>
  );
};

export const PrimaryButtonSmall = props => {
  props.disable ? (
      mainColor = COLORS.lightThunderBlue,
      secondaryColor = COLORS.lightThunderYellow,
      textColor = COLORS.gray5) : 
    (
      mainColor = COLORS.thunderBlue,
      secondaryColor = COLORS.thunderYellow,
      textColor = COLORS.gray6
    );
  return (<>
    <View>
      <TouchableOpacity onPress={props.onPress} style={ROTATION.Ktorze}>
        <View style={styles.BackgroundButton} backgroundColor={secondaryColor}>
          <H4 color={secondaryColor}>
            {props.title}
          </H4>
        </View>
        <View style={styles.mainButtonSmall} backgroundColor={mainColor}>
          <H4 color={textColor}>
            {props.title}
          </H4>
        </View>
      </TouchableOpacity >
    </View>
    <View style={{ height: props.title.length * 1.6 }} />
  </>
  );
};

export const SecondaryButton = props => {
  props.disable ? (
      mainColor = COLORS.gray5,
      secondaryColor = COLORS.lightThunderBlue,
      textColor = COLORS.lightThunderBlue) : 
    (
      mainColor = COLORS.gray5,
      secondaryColor = COLORS.thunderBlue,
      textColor = COLORS.thunderBlue
    );
  return (<>
    <View style={{ height: props.title.length * 0.6 }} />
    <View>
      <TouchableOpacity onPress={props.onPress} style={ROTATION.Ktorze}>
        <View style={styles.BackgroundButton} backgroundColor={secondaryColor}>
          <H3 color={secondaryColor}>
            {props.title}
          </H3>
        </View>
        <View style={styles.mainButton} backgroundColor={mainColor}>
          <H3 color={textColor}>
            {props.title}
          </H3>
        </View>
      </TouchableOpacity >
    </View>
  </>
  );
};

export const TertiaryButton = props => {
  props.disable ? textColor = COLORS.lightThunderBlue : textColor = COLORS.thunderBlue;

  return (<>
    <View>
      <TouchableOpacity onPress={props.onPress} style={ROTATION.Ktorze}>
        <View style={styles.BackgroundButton}>
          <H3 color={textColor}>
            {props.title}
          </H3>
        </View>
      </TouchableOpacity>
    </View>
    <View style={{ height: props.title.length * 1.5 }} />
  </>
  );
};

export const ActionButton = props => {
  props.disable ? mainColor = COLORS.lightThunderBlue : mainColor = COLORS.thunderBlue;

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.actionButton} borderColor={mainColor}>
        <H4 color={mainColor}>{props.title}</H4>
      </View>
    </TouchableOpacity>
  );
};

export const RedActionButton = props => {
  props.disable ? mainColor = COLORS.thunderError : mainColor = COLORS.thunderAlert;

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.actionButton} borderColor={mainColor}>
        <H4 color={mainColor}>{props.title}</H4>
      </View>
    </TouchableOpacity>
  );
};

export const GreenActionButton = props => {
  props.disable ? mainColor = COLORS.thunderError : mainColor = 'green';

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.actionButton} borderColor={mainColor}>
        <H4 color={mainColor}>{props.title}</H4>
      </View>
    </TouchableOpacity>
  );
};

export const RegulationButton = props => {
  return (
    <TouchableOpacity
    style={styles.regulationButton}>
      <Ionicons name='book-outline' size={35} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainButton: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 0, //SPACING.small,
    paddingHorizontal: SPACING.large,
    top:- 56 + SPACING.xSmall,//- 56 - 2 * SPACING.small + SPACING.xSmall,
    marginBottom: -20 - 2 * SPACING.small,
    marginHorizontal: SPACING.medium,
    left: SPACING.xSmall,
    borderRadius: 5,
  },
  BackgroundButton: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 0, //SPACING.small,
    paddingHorizontal: SPACING.large,
    marginHorizontal: SPACING.medium,
    borderRadius: 5,
  },

  mainButtonSmall: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.large,
    top: - 38 - 2 * SPACING.small + SPACING.xSmall,
    marginBottom: -20 - 2 * SPACING.small,
    marginHorizontal: SPACING.medium,
    left: SPACING.xSmall,
    borderRadius: 5,
  },

  actionButton: {
    alignItems: 'center',
    borderWidth: 5,
    paddingVertical: 0, //SPACING.xSmall,
    paddingHorizontal: SPACING.xSmall,
    borderRadius: 5,
  },

  regulationButton: { 
    width: 64,
    height: 64,   //dimensions from figma
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.small,
    borderRadius: 100,
    backgroundColor: COLORS.thunderBlue,
  },
});
