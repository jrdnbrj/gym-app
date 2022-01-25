import React from 'react'

import Training from '../pages/Training'

import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator()

const TrainingRoutes = () => {
    return <Stack.Navigator initialRouteName="Training">
        <Stack.Screen 
            name='Training' component={Training} 
            options={{ 
                title: 'Entrenamientos', 
                header: props => {} 
            }} 
        />
    </Stack.Navigator>
}

export default TrainingRoutes
