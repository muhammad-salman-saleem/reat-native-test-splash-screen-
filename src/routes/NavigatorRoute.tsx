import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../components/Login';
import MainScreen from '../components/MainScreen';
import SplashScreen from '../components/SplashScreen';

const NavigatorRoute = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        options={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
        component={SplashScreen}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Main"
        options={{
          headerShown: false,
          animation: 'slide_from_right',
          
        }}
        component={MainScreen}
      />
    </Stack.Navigator>
  );
};

export default NavigatorRoute;
