/**
 * @file constants_api.js
 *
 * @brief constants Get and Post funcions
 *
 * @author Lucas Guedes <lucas.guedes@thunderatz.org>
 *
 * @date 07/2021
 */


import { PostData } from './data_sender.js'
import { GetData } from './data_receiver.js'


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
 * @param lap_time time taken for a lap.
 */

const PostConstants = (name, kp, ki, kd, lap_time) => {
    //lap_time ainda não é guardado no servidor
    let data = {
        "name": name,
        "values":{
            "1":parseFloat(kp),
            "2":parseFloat(kd),
            "3":parseFloat(ki),
        },
    };
    PostData("constants", data);
}


/**
 * @brief Get a list of constants from server.
 *
 * @returns List of constants existing on server.
 */

const GetConstantsList = async () => {
    return await GetData("constants");
}

/**
 * @brief Get a specific set of constants.
 *
 * @returns Set of constants required, with their values, name and lap time.
 */

const GetConstants = async (constant_name) => {
    return await GetData("constants/" + constant_name);
}

export {PostConstants, GetConstants, GetConstantsList}
