import React from 'react'

import Streaming from '../pages/Streaming'

import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator()

const StreamingRoutes = () => {
    return <Stack.Navigator initialRouteName="Streaming">
        <Stack.Screen 
            name='Streaming' component={Streaming} 
            options={{ 
                title: 'Streaming', 
                header: props => {} 
            }} 
        />
    </Stack.Navigator>
}

export default StreamingRoutes
