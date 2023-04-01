import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {H3, Body} from './typography';
import {COLORS} from './colors';

export const UnavailablePage = () => {
    return (
        <>
            <Image
                style={styles.image}
                source={require('@img/ThorTheRatboladao.png')}
            />
            <H3 color={COLORS.thunderBlue} align="center">Ei, calma aí!</H3>
            <Body align="center">Ainda não temos nada aqui, mas estamos trabalhando nisso :)</Body>
        </>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 220,
        resizeMode: 'center',
        alignSelf: 'center',
    },
});
