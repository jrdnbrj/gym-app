import React from 'react'

import Profile from '../pages/Profile'
import Header from '../components/Header'

import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator()

const ProfileRoutes = tabProps => {
    return <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name='Profile' options={{ title: "Perfil", header: props => <Header {...props} /> }}>
            {props => <Profile {...props} {...tabProps} />}
        </Stack.Screen>
    </Stack.Navigator>
}

export default ProfileRoutes
