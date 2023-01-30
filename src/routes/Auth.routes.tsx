const Stack = createNativeStackNavigator();

import Main from '@app/screens/Main';
import Sign from '@app/screens/Sign';
import SplashScreen from '@app/screens/SplashScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sign"
        component={Sign}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Auth;
