/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'

import { SafeAreaView, StatusBar } from 'react-native'

import Layout from './src/Layout'


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#0D6EFD'}/>
      <Layout />
    </SafeAreaView>
  );
};

export default App
