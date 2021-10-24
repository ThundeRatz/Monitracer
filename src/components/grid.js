import React from 'react';
import {StyleSheet, View} from 'react-native';

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

export const SPACING = { xSmall: 8, small: 16, medium: 24, large: 32, xLarge: 48 };

const styles = StyleSheet.create({
    vbox: {
        marginHorizontal: SPACING.medium,
    },
    vSeparator: {
        height: SPACING.medium,
    },
    vSeparatorHalf: {
        height: SPACING.medium / 2,
    },
});
