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
    return (
      <View>
      <Text>Daniel</Text>
      <Image source={require('./resources/img/Desert.jpg')} style={{width:width,height:width}} />
      
      </View>
    );
  }
}

