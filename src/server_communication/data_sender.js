/**
 * @file data_sender.js
 *
 * @brief data sender function
 *
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 07/2021
 */

import React, { Component,state } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import {api,api_webhook} from './api_config'

import axios from 'axios';

//var api = "api.thunderatz.org/tracer";
//var api_webhook ="https://webhook.site/0da26257-fc6f-4a4a-9b93-a500e9f6d8a3";  

export const PostData = async (props) => {
    let info = {
        method: "post",
        mode: "no-cors",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body:{
            value:{
                kp:props.kp,
                kd:props.kd,
                ki:props.ki
            },
            lap_time: props.lap_time,
            local:{
                competition:'teste'
            }
        }
    };

    try{
        console.log("sinal server: " + props.kp + props.kd + props.ki + props.lap_time)
        const res = await axios.post(api_webhook,{...info});
        console.log(res.data);
    } catch(error){
        console.log(error);
    }
};
