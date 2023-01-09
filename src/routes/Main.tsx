import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens//Main';

const AppNavigator = createNativeStackNavigator();

function App() {
  return (
    <AppNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Splash">
      <AppNavigator.Screen name="Splash" component={SplashScreen} />
      <AppNavigator.Screen name="Home" component={HomeScreen} />
    </AppNavigator.Navigator>
  );
}

export default App;
