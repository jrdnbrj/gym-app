/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'

import { SafeAreaView, StatusBar } from 'react-native'

// Apollo
import { ApolloProvider } from '@apollo/client'
import client from './src/adapters/apolloClient'

// Redux
import { Provider as ReduxProdiver } from 'react-redux'
import store from './src/adapters/reduxStore'

import Layout from './src/Layout'


const App = () => {
  return (
    <ApolloProvider client={client}>
      <ReduxProdiver store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barStyle={'light-content'} backgroundColor={'#0D6EFD'}/>
          <Layout />
        </SafeAreaView>
      </ReduxProdiver>
    </ApolloProvider>
  );
};

export default App
