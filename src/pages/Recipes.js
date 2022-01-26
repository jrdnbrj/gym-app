import React from 'react';

import { StyleSheet, View, Text  } from 'react-native';
import { WebView } from 'react-native-webview'


const Training = ({ navigation }) => {
    return (
        <WebView source={{ uri: 'https://recetitasfit.com/recetas-fitness/' }} />
    )
}

const styles = StyleSheet.create({
    background: {
        // backgroundColor: '#36FF94',
        flex: 1
    },
    text: {
        fontSize: 20
    }
});

export default Training
