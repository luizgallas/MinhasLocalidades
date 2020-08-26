import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../src/pages/Main';
import Search from '../src/pages/Search';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="HomePage" component={Main} options={{
                    tabBarIcon: () => {
                        return (
                            <Icon name='home' size={20} color={'#8257e5'} />
                        )
                    }
                }}/>
                <Tab.Screen name="SearchPage" component={Search} options={{
                    tabBarIcon: () => {
                        return (
                            <Icon name='search' size={20} color={'#8257e5'} />
                        )
                    }
                }} />
                <Tab.Screen name="ETC" component={Main} options={{
                    tabBarIcon: () => {
                        return (
                            <Icon name='warning' size={20} color={'#8257e5'} />
                        )
                    }
                }}/>
            </Tab.Navigator>

        </NavigationContainer>
    )
}

export default BottomTabs;