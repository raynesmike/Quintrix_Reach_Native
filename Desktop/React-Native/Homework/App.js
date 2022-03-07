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
    <ViewBox variation='variation1' />
    <ViewBox variation='variation2' />
    <ViewBox variation='variation3' />
    <ViewBox variation='variation4' />
    <ViewBox variation='default'>
      Here we go, how it's going. There we go...
    </ViewBox>
    <ViewBox />
    <ViewBox />
    <ViewBox />
    <ViewBox />
  </ScrollView>
);

const ViewBox = ({ variation = 'default', children }) => {
  // if (variation === undefined) {
  //   variation = 'default';
  // }
  return (
    <View style={styles[variation]}>
      <Text style={styles.boxTextStyle}> {children} </Text>
    </View>
  );
};

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
    fontSize: 16,
    paddingTop: 13,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
