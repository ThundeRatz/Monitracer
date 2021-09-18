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

/*****************************************
 * Public Functions
 *****************************************/

/**
 * @brief Send constants to server.
 *
 * @param name Brief description of the set of constants.
 * @param kp kp from PID
 * @param ki ki from PID
 * @param kd kd from PID
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
  await PostData('constants', data);
};

/**
 * @brief Get a list of constants from server.
 *
 * @returns List of constants existing on server.
 */
export const GetConstantsList = async () => {
  return await GetData('constants');
};

/**
 * @brief Get a specific set of constants.
 *
 * @param constant_name Name of the set of constants
 *
 * @returns Constants values.
 */
export const GetConstantsByName = async constant_name => {
  return await GetData('constants/' + constant_name);
};

/**
 * @brief Get the ID of a set of constants based on the name.
 *
 * @param constant_name Name of the set of constants
 *
 * @returns Constants ID.
 */
export const GetConstantsId = async constant_name => {
  let constant_list = await GetConstantsList();
  for (var i in constant_list) {
    if (constant_list[i]['name'] == constant_name) {
      return constant_list[i]['id'];
    }
  }
  console.log('Id não encontrado - GetConstantsId\n');
  return undefined;
};

/**
 * @brief Get the constant name by the constant id.
 *
 * @param constant_id id of the constant group.
 */
export const GetConstantsById = async constant_id => {
  let constant_list = await GetConstantsList();
  for (var i in constant_list) {
    if (constant_list[i]['id'] == constant_id) {
      return await GetConstantsByName(constant_list[i]['name']);
    }
  }
  return undefined;
};
