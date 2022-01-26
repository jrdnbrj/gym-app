import React from 'react'

import Calendar from '../pages/Calendar'
import Header from '../components/Header'

import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator()

const CalendarRoutes = tabProps => {
    return <Stack.Navigator initialRouteName="Calendar">
        <Stack.Screen name='Calendar' options={{ title: "Calendario", header: props => <Header {...props} /> }}>
            {props => <Calendar {...props} {...tabProps} />}
        </Stack.Screen>
    </Stack.Navigator>
}

export default CalendarRoutes
