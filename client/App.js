import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from "./components/Main"
import Users from "./components/Users"
import Details from "./components/Details"

const Stack = createStackNavigator()

export default App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen 
                name="Main" 
                component={Main}
                options={{
                  headerShown: false
              }}/>
              <Stack.Screen 
                name="Users" 
                component={Users} 
                options={{
                    headerShown: false
              }}/>
              <Stack.Screen 
                name="Details" 
                component={Details} 
                options={{
                  headerStyle: {
                    backgroundColor: '#2d6a4f',
                  },
                  headerTintColor: '#d8f3dc'
              }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
