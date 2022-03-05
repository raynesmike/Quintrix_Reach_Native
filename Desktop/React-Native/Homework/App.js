/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return <BoxesContainer />;
  }
}

const BoxesContainer = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={[styles.yellowRectangle, { borderStyle: 'solid' }]}></View>
    <View style={[styles.yellowRectangle, { borderStyle: 'dashed' }]}></View>
    <View
      style={[styles.yellowRectangle, { borderWidth: 7, borderColor: 'red' }]}
    ></View>
    <View
      style={[
        styles.yellowRectangle,
        { borderStyle: 'dotted', borderColor: 'turquoise' },
      ]}
    ></View>
    <View style={styles.yellowRectangle}>
      <Text style={styles.boxTextStyle}>
        Here we go, how it's going. There we go...
      </Text>
    </View>
    <View style={styles.yellowRectangle}></View>
    <View style={styles.yellowRectangle}></View>
    <View style={styles.yellowRectangle}></View>
    <View style={styles.yellowRectangle}></View>
    <View style={styles.yellowRectangle}></View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  yellowRectangle: {
    backgroundColor: 'yellow',
    width: '80%',
    height: 50,
    borderWidth: 3,
    borderColor: 'lightgreen',
    marginVertical: 30,
    borderRadius: 0.1,
  },
  boxTextStyle: {
    fontSize: 16,
    textAlign: 'center',
  },
});
