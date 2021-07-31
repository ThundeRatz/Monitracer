/**
 * @file data_receiver.js
 *
 * @brief data receiver function
 *
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 * @author Lucas Guedes <lucas.guedes@thunderatz.org>
 *
 * @date 07/2021
 */

import axios from 'axios'

import {api,api_get,api_webhook} from './api_config.js'

export const GetData = async (props) =>{
    let link = api_get;
    
    try {
        let res = await axios.get(link);
        console.log(res.data);
        return(res.data)
    } catch(error) {
        console.log(error);
        console.log("FAILED TO GET DATA")
    }
};
