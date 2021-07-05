/**
 * @file data_receiver.js
 *
 * @brief data receiver function
 *
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 07/2021
 */

import React from 'react';

import {api,api_webhook} from './api_config'

export const sendHttpRequest = (method, url, data) =>{
    const promise = new Promise(( resolve, reject) =>{
        const xhr= new XMLHttpRequest();
        xhr.open(method, url);
        xhr.respondeType='json';
        if(data){
            xhr.setRequestHeader('Content-Type','application/json');
        }
        xhr.onload = () => {
            resolve(xhr.response);
        };
        xhr.onerror = () => {
            reject('Something went wrong!')
        }
        xhr.send(JSON.stringify(data));
    });
    return promise;
};

export const GetData = async (props) =>{
    var link = api_webhook + "/" + props.id;
    console.log(link);
    sendHttpRequest('GET',link)
    .then(responseData=>{
        var data = JSON.parse(responseData);
        console.log(data);
    });
};


