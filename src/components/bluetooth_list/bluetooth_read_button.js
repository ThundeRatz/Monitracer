/**
 * @file bluetooth_read_button.js
 *
 * @brief button to read bluetooth data 
 *
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 07/2021
 */

import React,{useEffect,useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    ToastAndroid,
    FlatList
} from 'react-native';

import {PrimaryButton} from '../button';
import {BTGetDataContinuous} from "../../bt_communication/bt_data_receiver"


export const BTReadButton = (props) => {
    return  (
        <View>
            <PrimaryButton onPress={BTGetDataContinuous} title={props.title}/>
        </View>
    );
}
