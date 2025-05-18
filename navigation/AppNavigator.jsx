import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import StoryDetailScreen from '../screens/StoryDetailScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import AboutScreen from '../screens/AboutScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Beranda" component={HomeScreen} />
      <Stack.Screen name="Detail Cerita" component={StoryDetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;
            if (route.name === 'Beranda') {
              iconName = 'home-outline';
            } else if (route.name === 'Jelajahi') {
              iconName = 'compass-outline';
            } else if (route.name === 'Tentang') {
              iconName = 'information-circle-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF5722',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Beranda"
          component={HomeStack}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Jelajahi" component={DiscoverScreen} />
        <Tab.Screen name="Tentang" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
