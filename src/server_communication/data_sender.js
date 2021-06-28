import React, { Component } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native'

export default class data_sender extends Component{

    async ComponentDidMount(props){
        try{
            await fetch(props.api,{
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Accept': '',
                    'Content-Type': ''
                },
                body: JSON.stringify({
                    data_test: 'neree'
                })
            });

        } catch(e){
            console.log(e)
        }
    };

    render() {
        return(
            <View></View>
        );
    }
}