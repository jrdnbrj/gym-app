import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { useQuery } from "@apollo/client"

import helloWorld from '../graphql/query/helloWorld'


const Calendar = ({ navigation }) => {

    const { loading, error, data } = useQuery(helloWorld, {
        onError: (error) => {
            console.log(JSON.stringify(error))
        }
    })

    if (loading) console.log('Loading...')
    // if (error) console.log('Error:', error)

    if (data) console.log("Data:", data)

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
