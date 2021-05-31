import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import City from '../pages/City';
import District from '../pages/District';
const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="City" component={City} />
            <Screen name="District" component={District} />
        </Navigator>
    )
}

export default AppStack;
