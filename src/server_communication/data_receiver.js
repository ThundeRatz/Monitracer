import React from 'react';

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
