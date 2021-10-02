/**
 * @file constants_api.js
 *
 * @brief constants Get and Post funcions
 *
 * @author Lucas Guedes <lucas.guedes@thunderatz.org>
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 09/2021
 */

import {PostData} from './data_sender.js';
import {GetData} from './data_receiver.js';
import { endpoints } from './constants_config.js';

/*****************************************
 * Public Functions
 *****************************************/

/**
 * @brief Send constants to server.
 *
 * @param name Brief description of the set of constants.
 * @param kp kp from PID.
 * @param ki ki from PID.
 * @param kd kd from PID.
 */
export const PostConstants = async (name, kp, ki, kd) => {
  let data = {
    name: name,
    values: {
      1: parseFloat(kp),
      2: parseFloat(ki),
      3: parseFloat(kd),
    },
  };
  await PostData(endpoints.CONSTANTS, data);
};

/**
 * @brief Get a list of constants from server.
 *
 * @returns List of constants existing on server.
 */
export const GetConstantsList = async () => {
  return await GetData(endpoints.CONSTANTS);
};

/**
 * @brief Get a specific set of constants.
 *
 * @param constant_name Name of the set of constants
 *
 * @returns Constants values.
 */
export const GetConstantsByName = async constant_name => {
  let constants_values = await GetData(endpoints.CONSTANTS+"/"+constant_name);
  return constants_values.values;
};

/**
 * @brief Get the ID of a set of constants based on the name.
 *
 * @param constant_name Name of the set of constants.
 *
 * @returns Constants ID.
 */
export const GetConstantsId = async constant_name => {
  let constant_list = await GetConstantsList();
  for (const constant of constant_list) {
    if (constant.name === constant_name) {
      return constant.id;
    }
}
  console.log('Id não encontrado - GetConstantsId\n');
  return undefined;
};

/**
 * @brief Get the constant name by the constant id.
 *
 * @param constant_id id of the constant group.
 *
 * @returns Set of constants with the id indicated. Undefined if it doesn't exists.
 */
export const GetConstantsById = async constant_id => {
  let constant_list = await GetConstantsList();
  for (const constant of constant_list) {
    if (constant.id === constant_id) {
      return await GetConstantsByName(constant.name);
    }
  }
  return [];
};

//(async () => console.log(await GetConstantsById(118)))();
