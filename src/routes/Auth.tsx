import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const AppNavigator = createNativeStackNavigator();

import SplashScreen from '../screens/SplashScreen';
import Main from '../screens/Main';

const Auth = () => {
  return (
    <NavigationContainer>
      <AppNavigator.Navigator>
        <AppNavigator.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <AppNavigator.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Auth;
