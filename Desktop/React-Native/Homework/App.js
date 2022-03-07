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

const BoxesContainer = (variation = 'default') => (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.variation1}></View>
    <View style={styles.variation2}></View>
    <View style={styles.variation3}></View>
    <View style={styles.variation4}></View>
    <Text style={[styles.default, styles.boxTextStyle]}>
      Here we go, how it's going. There we go...
    </Text>
    <View style={styles.default}></View>
    <View style={styles.default}></View>
    <View style={styles.default}></View>
    <View style={styles.default}></View>
    <View style={styles.default}></View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  default: {
    backgroundColor: 'yellow',
    width: '80%',
    height: 50,
    marginVertical: 30,
    borderWidth: 3,
    borderColor: 'lightgreen',
    borderRadius: 0,
  },
  variation1: {
    backgroundColor: 'yellow',
    width: '80%',
    height: 50,
    marginVertical: 30,
    borderWidth: 3,
    borderColor: 'lightgreen',
    borderRadius: 1,
    borderStyle: 'solid',
  },
  variation2: {
    backgroundColor: 'yellow',
    width: '80%',
    height: 50,
    marginVertical: 30,
    borderWidth: 3,
    borderColor: 'lightgreen',
    borderRadius: 1,
    borderStyle: 'dashed',
  },
  variation3: {
    backgroundColor: 'yellow',
    width: '80%',
    height: 50,
    marginVertical: 30,
    borderWidth: 10,
    borderColor: 'red',
    borderRadius: 0,
  },
  variation4: {
    backgroundColor: 'yellow',
    width: '80%',
    height: 50,
    marginVertical: 30,
    borderWidth: 4,
    borderColor: 'turquoise',
    borderRadius: 1,
    borderStyle: 'dotted',
  },
  boxTextStyle: {
    flex: 1,
    fontSize: 17,
    paddingTop: 13,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
