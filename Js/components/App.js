import { Expo, Constants, Location, Permissions } from 'expo';
import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, Image } from 'react-native';


import ModalExample from './modal';

export default class App extends Component{


    render(){
        return(
            <ModalExample {...this.props} />
        )
    }

}