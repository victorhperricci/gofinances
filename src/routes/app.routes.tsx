import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Dashboard } from '../screens/Dashboard'
import { Register } from '../screens/Register'

const { Navigator, Screen } = createBottomTabNavigator()

export const AppRoutes = () => {
    return (
        <NavigationContainer>
            <Navigator >
                <Screen name="Listagem" component={Dashboard} />
                <Screen name="Cadastrar" component={Register} />
                <Screen name="Resumo" component={Register} />
            </Navigator>
        </NavigationContainer>
    )
}