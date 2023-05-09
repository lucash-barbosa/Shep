import { AuthContextProvider } from '@app/providers/AuthContext';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/global/styles/theme';
import Routes from './src/routes';

import 'react-native-gesture-handler';

const queryClient = new QueryClient();

const App = () => {
  const navTheme = DefaultTheme;
  navTheme.colors.background = '#fbf9f9';
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <ThemeProvider theme={theme}>
        <NavigationContainer theme={navTheme}>
          <AuthContextProvider>
            <QueryClientProvider client={queryClient}>
              <Routes />
            </QueryClientProvider>
          </AuthContextProvider>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
