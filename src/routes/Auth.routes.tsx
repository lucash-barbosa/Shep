import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import SplashScreen from '../screens/SplashScreen';
import Main from '../screens/Main';
import Sign from '../screens/Sign';

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sign"
        component={Sign}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Auth;
