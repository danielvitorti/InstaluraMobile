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
  Dimensions,
  ScrollView,
  FlatList
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
    
       /* Este é o array ( json ) que vai conter as imagens para a lista. Isto , na verdade, vai vir do Json */
        const fotos = [{id:1, usuario: 'daniel'},{id: 2, usuario:'alberto'},{id: 3, usuario:'vitor'}];
  

        


    return (

      /*
      <ScrollView style={{marginTop: 20}}>
        {fotos.map(foto => 
          <View key={foto.id}>
            <Text>{foto.usuario}</Text>
            <Image source={require('./resources/img/Desert.jpg')} style={{width:width,height:width}} />
          </View>
        )}
      </ScrollView>
      */

      <FlatList style={styles.container}
      data={fotos}
      keyExtractor={item => item.id}
      renderItem={ ({item}) => 
        <View>
          <View style={styles.cabecalho}>
          <Image source={require('./resources/img/Desert.jpg')} style={styles.fotoDePerfil} />
          </View>
        
          <Text>{item.usuario}</Text>
          <Image source={require('./resources/img/Desert.jpg')} style={styles.foto} />
        </View>
      }
    />
    );
  }
}

const styles = StyleSheet.create({

    container:{

        marginTop: 20
    },

    cabecalho:
    {
      margin:10,flexDirection: 'row', alignItems: 'center'
    },

    fotoDePerfil:
    {
        marginRight:10,borderRadius: 20, width:40, height:40
    },
    foto:
    {
      width:width, height:width
    }

});