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

import axios from 'axios';

import {api, api_key} from './api_config.js';

/*****************************************
 * Public Functions
 *****************************************/

/**
 * @brief Get data from server.
 *
 * @param endpoint_name Title to the data location in the API.
 *
 * @returns Data received from server.
 */
export const GetData = async endpoint_name => {
  let link = api + '/' + endpoint_name;

  let headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-api-key': api_key,
    },
  };

  try {
    let res = await axios.get(link, headers);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    console.log('FAILED TO GET DATA');
  }
};
