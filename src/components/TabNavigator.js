import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import IonIcon from 'react-native-vector-icons/Ionicons'

import Calendar from '../screens/Calendar'
import Training from '../screens/Training'
import Recipes from '../screens/Recipes'
import Streaming from '../screens/Streaming'
import Profile from '../screens/Profile'


const Tab = createBottomTabNavigator()

const TabNavigator = () => {

    const screenOptions = ({ route }) => ({
        tabBarIcon: () => {
            let iconName

            if(route.name === 'CalendarRoutes')
                iconName = 'calendar'
            else if(route.name === 'StreamingRoutes')
                iconName = 'desktop-sharp'
            else if(route.name === 'ProfileRoutes')
                iconName = 'person-sharp'
            else if(route.name === 'TrainingRoutes')
                iconName = 'md-baseball'
            else if(route.name === 'RecipesRoutes')
                iconName = 'md-nutrition'

            return <IonIcon name={iconName} size={25} color="#0a2e63" />
        },
        "tabBarActiveBackgroundColor": "#0c62e4",
        "tabBarInactiveBackgroundColor": "#0D6EFD",
        "tabBarShowLabel": false,
        "headerShown": false
    })

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="CalendarRoutes" screenOptions={screenOptions}>
                <Tab.Screen name="CalendarRoutes" component={Calendar} />
                <Tab.Screen name="TrainingRoutes" component={Training} />
                <Tab.Screen name="RecipesRoutes" component={Recipes} />
                <Tab.Screen name="StreamingRoutes" component={Streaming} />
                <Tab.Screen name="ProfileRoutes" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator
