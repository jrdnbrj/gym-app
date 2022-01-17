import React from 'react';

import { StyleSheet, View, Text } from 'react-native';


const Calendar = ({ navigation }) => {
    return <View style={styles.background}>
        <Text style={styles.text}>Calendar</Text>
    </View>
}

const styles = StyleSheet.create({
    background: {
        // backgroundColor: '#36FF94',
        // flex: 1
    },
    text: {
        fontSize: 20
    }
});

export default Calendar
