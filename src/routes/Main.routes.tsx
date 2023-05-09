import { MainStackParamList } from '@app/global/types';
import Home from '@app/views/Home';
import Main from '@app/views/Main';
import Sign from '@app/views/Sign';
import SplashScreen from '@app/views/SplashScreen';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator<MainStackParamList>();

const Auth = () => {
  const { Navigator, Screen } = Stack;

  return (
    <Navigator>
      <Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Screen name="Main" component={Main} options={{ headerShown: false }} />
      <Screen name="Sign" component={Sign} options={{ headerShown: false }} />
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Navigator>
  );
};

export default Auth;
