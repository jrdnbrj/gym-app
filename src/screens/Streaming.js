import React from 'react'

import Streaming from '../pages/Streaming'

import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator()

const StreamingRoutes = tabProps => {
    return <Stack.Navigator initialRouteName="Streaming">
        <Stack.Screen name='Streaming' options={{ header: () => {} }}>
            {props => <Streaming {...props} {...tabProps} />}
        </Stack.Screen>
    </Stack.Navigator>
}

export default StreamingRoutes
