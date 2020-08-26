import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../src/pages/Main';
import CityBar from '../src/pages/CityBar';
import About from '../src/pages/About';
import { Text, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="UF" component={Main} options={{
                    tabBarLabel: () => {
                        return (
                            <Text style={styles.labelText}>UF</Text>
                        )
                    }
                
                }}/>
                <Tab.Screen name="City" component={CityBar} options={{
                    tabBarLabel: () => {
                        return (
                            <Text style={styles.labelText}>Cidades</Text>
                        )
                    }
                }} />
                <Tab.Screen name="Sobre" component={About} options={{
                     tabBarLabel: () => {
                        return (
                            <Text style={styles.labelText}>Sobre</Text>
                        )
                    }
                }}/>
            </Tab.Navigator>

        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    labelText: {
        alignSelf: "center",
        color: '#E50191',
        fontSize: 16,
        fontWeight: "bold",
        position: "absolute",

    },
  });

export default BottomTabs;
