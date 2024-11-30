import React from 'react';

import LedScreen from '../screens/LedScreen';
import RegimeLed from '../screens/RegimeLed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RgbNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='LedScreen' screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="LedScreen" component={LedScreen} />
      <Stack.Screen name="RegimeLed" component={RegimeLed} />
    </Stack.Navigator>
  );
} 

export default RgbNavigation;