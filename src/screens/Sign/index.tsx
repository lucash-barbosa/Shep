import React from 'react';
import { StatusBar } from 'react-native';

import SignUp from './SignUp';
import { DivisorLine, StyledText, StyledWrapper } from './styles';

const Sign = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <StyledWrapper />
      <SignUp />
      <DivisorLine>
        <StyledText>OR</StyledText>
      </DivisorLine>
    </>
  );
};

export default Sign;
