/**
 * @file data_sender.js
 *
 * @brief data sender function
 *
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 07/2021
 */

import {api,api_webhook} from './api_config';

import axios from 'axios';

export const PostData = async (name,kp,kd,ki,lap_time) => {
    let headers = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    };

    let data = {
        "name": name,
        "values":{
            "1":parseFloat(kp),
            "2":parseFloat(kd),
            "3":parseFloat(ki)
        },
    };

    try{
        console.log("sinal server: " + kp + kd + ki + lap_time)
        const res = await axios.post(api, data, headers);
        console.log(res.data);
    } catch(error){
        console.log(error);
    }
};