/**
 * @file data_sender.js
 *
 * @brief data sender function
 *
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 * @author Lucas Guedes <lucas.guedes@thunderatz.org>
 *
 * @date 07/2021
 */

import {api, api_key} from './api_config.js';
import axios from 'axios';

/*****************************************
 * Public Functions
 *****************************************/

/**
 * @brief Send data to server.
 *
 * @param endpoint_name Title to the data location in the API.
 * @param data Data to be sent to the server. Must be in the correct format.
 */

export const PostData = async (endpoint_name, data) => {
  let link = api + '/' + endpoint_name;

  let headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-api-key': api_key,
    },
  };

  try {
    const res = await axios.post(link, data, headers);
    console.log('data sender: ');
    console.log(data);
    return res;
  } catch (error) {
    console.log(error.response);
  }
  return null
};
