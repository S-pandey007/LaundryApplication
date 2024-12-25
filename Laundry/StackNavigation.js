import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'; // Missing import
import HomeScreen from './screens/HomeScreen';
import PickupScreen from './screens/PickupScreen';
import CartScreen from './screens/CartScreen'
const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Pickup" component={PickupScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Cart' component={CartScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
