import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/global/styles/theme';
import {AuthContextProvider} from './src/context/AuthContext';

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
