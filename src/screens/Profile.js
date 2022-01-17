import React from 'react'

import Profile from '../pages/Profile'
import Header from '../components/Header'

import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator()

const ProfileRoutes = () => {
    return <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen 
            name='Profile' component={Profile} 
            options={{ 
                title: 'Perfil', 
                header: props => <Header {...props} /> 
            }} 
        />
    </Stack.Navigator>
}

export default ProfileRoutes
