import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/global/styles/theme';
import Auth from './src/routes/Auth';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Auth />
      </ThemeProvider>
    </>
  );
};

export default App;

/*
<>
  <ThemeProvider theme={theme}>
    <SafeAreaView>
      <View>
        <Main />
      </View>
    </SafeAreaView>
  </ThemeProvider>
</>
*/
