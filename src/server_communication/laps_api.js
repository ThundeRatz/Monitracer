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
import {
  PostConstants,
  GetConstantsId,
  GetConstantsById,
} from './constants_api.js';
import {endpoints} from './constants_config.js';

/*****************************************
 * Public Functions
 *****************************************/

/**
 * @brief Send a lap to server, without the constant values.
 *
 * @param id Set of constants ID
 * @param name Lap name
 * @param lap_time Lap duration em ms
 */
export const PostLapTime = async (id, name, lap_time) => {
  let data = {
    constant_group_id: id,
    name: name,
    duration: lap_time,
  };

  await PostData(endpoints.LAPS, data);
};

/**
 * @brief Get all laps from server.
 *
 * @returns List of laps existing on server.
 */
export const GetLapsList = async () => {
  return await GetData(endpoints.LAPS);
};

/**
 * @brief Send a lap to the server.
 *
 * @param name lap name
 * @param kp kp from PID
 * @param ki ki from PID
 * @param kd kd from PID
 * @param lap_time time taken for a lap
 */
export const PostLap = async (name, kp, ki, kd, lap_time) => {
  let new_constants_name = name + '_consts';
  await PostConstants(new_constants_name, kp, ki, kd);
  let consts_id = await GetConstantsId(new_constants_name);
  await PostLapTime(consts_id, name, lap_time);
};

/**
 * @brief Get the lap id by the lab name.
 *
 * @param lap_name name of the lap
 *
 * @returns Lap with the id Name. Undefined if it doesn't exists
 */
export const GetLapByName = async lap_name => {
  let laps_list = await GetLapsList();
  for (const lap of laps_list) {
    if (lap.name === lap_name) {
      let constants = await GetConstantsById(lap.constants);
      lap.constants = constants;
      return lap;
    }
  }
  return [];
};

/**
 * @brief Get the lap name by the lab id.
 *
 * @param lap_id id of the lap
 *
 * @returns Lap with the id indicated. Undefined if it doesn't exists
 */
export const GetLapById = async lap_id => {
  let laps_list = await GetLapsList();
  for (const lap of laps_list) {
    if (lap.id === lap_id) {
      return GetLapByName(lap.name);
    }
  }
  return [];
};

//(async () => console.log(await GetLapByName("208")))();
