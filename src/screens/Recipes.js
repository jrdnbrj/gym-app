import React from 'react'

import Recipes from '../pages/Recipes'

import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator()

const RecipesRoutes = () => {
    return <Stack.Navigator initialRouteName="Recipes">
        <Stack.Screen 
            name='Recipes' component={Recipes} 
            options={{ 
                title: 'Recetas', 
                header: props => {}
            }} 
        />
    </Stack.Navigator>
}

export default RecipesRoutes
