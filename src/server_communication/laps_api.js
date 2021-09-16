/**
 * @file laps_api.js
 *
 * @brief laps Get and Post funcions
 *
 * @author Lucas Guedes <lucas.guedes@thunderatz.org>
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 09/2021
 */

import {PostData} from './data_sender.js';
import {GetData} from './data_receiver.js';
import {PostConstants, GetConstantsID} from './constants_api.js';

/*****************************************
 * Public Functions
 *****************************************/

/**
 * @brief Send a lap to server.
 *
 * @param id Set of constants ID
 * @param name Lap name
 * @param lap_time Lap duration em ms
 */
const PostLapTime = (id, name, lap_time) => {
  let data = {
    constant_group_id: id,
    name: name,
    duration: lap_time,
  };

  PostData('laps', data);
};

/**
 * @brief Get a lap from server.
 *
 * @returns List of laps existing on server.
 */
const GetLapsTime = async () => {
  return await GetData('laps');
};

const PostLap = (name, kp, ki, kd, lap_time) => {
  PostConstants(name + '_consts');
  consts_id = GetConstantsID(name + '_consts');
  PostLapTime(consts_id, name, lap_time);
};
