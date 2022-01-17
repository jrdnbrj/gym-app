import React from 'react'
import { View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import IonIcon from 'react-native-vector-icons/Ionicons'

import Calendar from './screens/Calendar'
import Profile from './screens/Profile'
import Streaming from './screens/Streaming'


const Tab = createBottomTabNavigator()

const Layout = () => {
    return <View style={{ flex: 1 }}>
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Calendar"
                screenOptions={({ route }) => ({
                    tabBarIcon: () => {
                        let iconName

                        if(route.name === 'CalendarRoutes')
                            iconName = 'calendar'
                        else if(route.name === 'StreamingRoutes')
                            iconName = 'desktop-sharp'
                        else if(route.name === 'ProfileRoutes')
                            iconName = 'person-sharp'

                        return <IonIcon name={iconName} size={25} color="#0a2e63" />
                    },
                    "tabBarActiveBackgroundColor": "#0c62e4",
                    "tabBarInactiveBackgroundColor": "#0D6EFD",
                    "tabBarShowLabel": false,
                    "headerShown": false
                })}
            >
                <Tab.Screen name="CalendarRoutes" component={Calendar} />
                <Tab.Screen name="StreamingRoutes" component={Streaming} screenOptions={{ headerShown: false }} />
                <Tab.Screen name="ProfileRoutes" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    </View>
}

export default Layout
