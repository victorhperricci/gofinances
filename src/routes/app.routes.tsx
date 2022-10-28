import React from 'react'
import { Platform } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components'

import { Dashboard } from '../screens/Dashboard'
import { Register } from '../screens/Register'

const { Navigator, Screen } = createBottomTabNavigator()

export const AppRoutes = () => {
    const theme = useTheme()

    return (
        <Navigator 
            initialRouteName='Listagem' 
            screenOptions={{ 
                headerShown: false,
                tabBarActiveTintColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    height: 88
                }

            }} 
        >
            <Screen 
                name="Listagem"  
                component={Dashboard}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="format-list-bulleted"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

            <Screen 
                name="Cadastrar" 
                component={Register}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="attach-money"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

            <Screen 
                name="Resumo"
                component={Register}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="pie-chart"
                            size={size}
                            color={color}
                        />
                    ))
                }}

            />
        </Navigator>
    )
    
}  