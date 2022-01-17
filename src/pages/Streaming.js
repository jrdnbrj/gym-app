import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

import JitsiMeet from '../components/JitsiMeet';

const Streaming = ({ navigation }) => {
    return <View style={styles.background}>
        <JitsiMeet navigation={navigation} />
    </View>
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

export default Streaming
