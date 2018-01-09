/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const width = Dimensions.get('screen').width;

export default class InstaluraMobile extends Component<{}> {
  render() {
    
        const fotos = [{id:1, usuario: 'daniel'},{id: 2, usuario:'alberto'},{id: 3, usuario:'vitor'}];
  

    return (

      <View style={{marginTop: 20}}>
        {fotos.map(foto => 
          <View key={foto.id}>
            <Text>{foto.usuario}</Text>
            <Image source={require('./resources/img/Desert.jpg')} style={{width:width,height:width}} />
          </View>
        )}
      </View>
    );
  }
}

