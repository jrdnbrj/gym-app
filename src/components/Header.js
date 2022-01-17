import React from 'react'

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { getHeaderTitle } from '@react-navigation/elements';


const Header = ({ route, options, back, navigation }) => {
    const title = getHeaderTitle(options, route.name);

    return <View style={styles.background}>
        {back  ? 
            <TouchableOpacity onPress={navigation.goBack}>
                <Icon name='md-chevron-back' size={25} color='#0a2e63' />
            </TouchableOpacity> 
            : 
            <View style={{ marginHorizontal: 12 }}/> 
        }
        <Text style={styles.title}>{title}</Text>
        <Icon name="barbell" size={25} color='#0a2e63' />
    </View>
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#0D6EFD',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12
    },
    title: {
        color: '#0a2e63',
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: "center",
    }
})

export default Header
