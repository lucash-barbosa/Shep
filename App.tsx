import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/global/styles/theme';
import Main from './src/screens/Main';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <View>
          <Main />
        </View>
      </ThemeProvider>
    </>
  );
};

export default App;
