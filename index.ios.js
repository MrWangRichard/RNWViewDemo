/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class WViewDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{flex:1,backgroundColor:"blue"}}>1</Text>
        <Text style={{flex:2,backgroundColor:"red"}}>2</Text>
        <Text style={{flex:1,backgroundColor:"yellow"}}>3</Text>
        <Text style={{flex:1,backgroundColor:"green"}}>4</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  base:{
    position:'absolute',
    width:100,
    height:100,
    backgroundColor:'green'
  },
  smallView1:{
    left:20,
    top:20
  }
});

AppRegistry.registerComponent('WViewDemo', () => WViewDemo);
