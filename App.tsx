import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/global/styles/theme';
import Auth from './src/routes/Auth';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <ThemeProvider theme={theme}>
        <Auth />
      </ThemeProvider>
    </>
  );
};

export default App;
