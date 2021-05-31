import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../pages/Main';
import City from '../pages/City';
import About from '../pages/About';
import { Text, StyleSheet } from 'react-native';
import AppStack from './appStack';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="UF" component={Main} options={{
                    tabBarLabel: ({focused}) => {
                        return (
                            <Text style={labelStyle(focused).labelText}>UF</Text>
                        )
                    }
                }}/>
                <Tab.Screen name="City" component={AppStack} options={{
                    tabBarLabel: ({focused}) => {
                        return (
                            <Text style={labelStyle(focused).labelText}>Cidades</Text>
                        )
                    }
                }}/>
                <Tab.Screen name="About" component={About} options={{
                     tabBarLabel: ({focused}) => {
                        return (
                            <Text style={labelStyle(focused).labelText}>Sobre</Text>
                        )
                    }
                }}/>
            </Tab.Navigator>

        </NavigationContainer>
    )
}

const labelStyle = (focused: boolean) => {
    return StyleSheet.create({
        labelText: {
            alignSelf: "center",
            color: (focused) ? '#E50191' : '#191055',
            fontSize: (focused) ? 24 :  16,
            paddingBottom: 10,
            paddingTop: 10, 
            fontFamily: (focused) ? 'Signika-Bold' : 'Signika-Regular'
        },
    });
}

export default BottomTabs;
