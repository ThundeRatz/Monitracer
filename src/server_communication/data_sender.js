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

export const PostData = async (kp,kd,ki,lap_time) => {
    let info = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body:{
            "name": "neru",
            "values":{
                "1":parseFloat(kp),
                "2":parseFloat(kd),
                "3":parseFloat(ki)
            },
        }
    };

    try{
        console.log("sinal server: " + kp + kd + ki + lap_time)
        console.log(info);
        const res = await axios.post(api,{...info});
        console.log(res.data);
    } catch(error){
        console.log(error);
    }
};
