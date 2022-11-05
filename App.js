import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from './src/screens/Product';
import HomeScreen from './src/screens/HomeScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
          <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
