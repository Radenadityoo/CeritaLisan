import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Beranda"
        component={HomeScreen}
        options={{ title: 'CeritaLisan', headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  );
}
