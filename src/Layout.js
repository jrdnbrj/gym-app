import React from 'react'
import { View } from 'react-native'

import { useSelector, useDispatch } from "react-redux";

import TabNavigator from './components/TabNavigator'
import LoginRoutes from './screens/Login'


const Layout = () => {

    const loggedIn = useSelector(state => state.auth.loggedIn)

    return <View style={{ flex: 1 }}>
        {loggedIn ? <TabNavigator /> : <LoginRoutes />}
    </View>
}

export default Layout
