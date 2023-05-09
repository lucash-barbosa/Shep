import { MainStackScreenProp } from '@app/global/types';
import React from 'react';
import { StatusBar } from 'react-native';

import Login from './Login';
import SignUp from './Signup';
import { DivisorLine, StyledText, StyledWrapper } from './styles';

const Sign = ({ route }: MainStackScreenProp) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <StyledWrapper />

      {route.params.login ? <Login /> : <SignUp />}

      <DivisorLine>
        <StyledText>OR</StyledText>
      </DivisorLine>
    </>
  );
};

export default Sign;
