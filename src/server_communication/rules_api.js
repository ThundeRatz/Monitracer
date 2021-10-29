/**
 * @file rules_api.js
 *
 * @brief constants rules
 *
 * @author Lucas Guedes <lucas.guedes@thunderatz.org>
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 09/2021
 */

import {GetData} from './data_receiver.js';
import {endpoints} from './endpoints_config.js';

/**
 * @brief Get a list of rules from the server.
 *
 * @returns List of rules.
 */
export const GetRulesList = async () => {
  return await GetData(endpoints.RULES);
};

/**
 * @brief Get a specific rule by its ID.
 *
 * @returns rule.
 */
export const GetRuleById = async rule_id => {
  return await GetData(endpoints.RULES + '/' + rule_id);
};
