import React from 'react';
import { NavigationContainer, useFocusEffect, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
<NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeScreen">
          <Stack.Screen  name = "Search Screen" component={SearchScreen} options={{ headerShown: true }} />
          <Stack.Screen  name = "ResultsShowScreen" component={ResultsShowScreen} options={{ headerShown: true }} />
        </Stack.Navigator>
</NavigationContainer>
)};
