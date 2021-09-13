/**
 * @file data_sender.js
 *
 * @brief data sender function
 *
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 07/2021
 */

import {api,api_webhook,api_key} from './api_config';
import axios from 'axios';

/*****************************************
 * Public Functions
 *****************************************/

/**
 * @brief Send data to server.
 *
 * @param name title to identify constants
 * @param kp kp from PID
 * @param kd kd from PID
 * @param ki ki from PID
 * @param lap_time time of one lap
 * 
 */

export const PostData = async (name,kp,kd,ki,lap_time) => {
    let headers = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "x-api-key": api_key
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