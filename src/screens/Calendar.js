import React from 'react'

import Calendar from '../pages/Calendar'
import Header from '../components/Header'

import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator()

const CalendarRoutes = () => {
    return <Stack.Navigator initialRouteName="Calendar">
        <Stack.Screen 
            name='Calendar' component={Calendar} 
            options={{ 
                title: 'Calendario', 
                header: props => <Header {...props} /> 
            }} 
        />
    </Stack.Navigator>
}

export default CalendarRoutes
