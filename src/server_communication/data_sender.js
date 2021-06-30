import React, { Component,state } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

import {PrimaryButton} from '../components/button';

import axios from 'axios';
var api = "api.thunderatz.org/tracer";
var api_test = 'http://localhost:3000/posts/';

export const DataSenderButton = (props) => {

    var info = {
            method: 'post',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pid:{
                    'kp':props.kp,
                    'kd':props.kd,
                    'ki':props.ki
                },
                lap_time: props.lap_time,
                local:{
                    'competition':'teste'
                }
            })
        };

    var info2 = {
        "id": 2,
        "title": "JS",
        "author": "Vanderson"
    }

    const data_sender_fetch = async () => {
        console.log("sinal server: " + props.kp + props.kd + props.ki + props.lap_time)
        try{
            await fetch(api_test,{info});
        } catch(error){
            console.log(error);
        }
    };

    const data_sender_axios = async () => {
        console.log("sinal server: " + props.kp + props.kd + props.ki + props.lap_time)
        try{
            const res = await axios.post(api_test,{...info2});
            return res.data;
        } catch(error){
            console.log(error);
        }
    };

    return(
        <View>
            <PrimaryButton onPress={data_sender_axios} title={props.title}/>
        </View>
    );
}