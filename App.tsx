import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { AuthContextProvider } from './src/context/AuthContext';
import theme from './src/global/styles/theme';
import Routes from './src/routes';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AuthContextProvider>
            <Routes />
          </AuthContextProvider>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
