import React from 'react';
import DefaultInput from '@app/components/Input';
import InputPassword from '@app/components/InputPassword';
import SquareCheckbox from '@app/components/SquareCheckbox';
import {
  Container,
  Wrapper,
  StyledSubtitle,
  StyledTitle,
  StyledLink,
} from './styles';

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <StyledTitle>Sign Up</StyledTitle>
        <StyledSubtitle>Welcome! Already have a account?</StyledSubtitle>
        <StyledLink>Sign In</StyledLink>
      </Wrapper>
      <Wrapper>
        <DefaultInput placeholder="Email" />
        <InputPassword placeholder="Password" />
      </Wrapper>
      <SquareCheckbox text="Remember Me" />
    </Container>
  );
};

export default SignIn;
