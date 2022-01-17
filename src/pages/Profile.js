import React from 'react'

import { StyleSheet, View, Text } from 'react-native'

import StepCounter from '../components/StepCounter'


const Profile = ({ navigation }) => {
    return <View style={styles.background}>
        <Text style={styles.text}>Contador de Pasos</Text>
        <StepCounter />
    </View>
}

const styles = StyleSheet.create({
    background: {
        // backgroundColor: '#36FF94',
        flex: 1
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 20,
    }
});

export default Profile
