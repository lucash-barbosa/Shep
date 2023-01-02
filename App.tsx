import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/global/styles/theme';
import Main from './src/screens/Main';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeAreaView>
          <View>
            <Main />
          </View>
        </SafeAreaView>
      </ThemeProvider>
    </>
  );
};

export default App;
