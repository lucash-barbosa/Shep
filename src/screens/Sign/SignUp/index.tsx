import React from 'react';
import DefaultInput from '../../../components/DefaultInput';
import InputPassword from '../../../components/InputPassword';
import SquareCheckbox from '../../../components/SquareCheckbox';
import {
  Container,
  Wrapper,
  StyledSubtitle,
  StyledTitle,
  StyledLink,
} from './styles';

const SignUp = () => {
  return (
    <Container>
      <Wrapper>
        <StyledTitle>Sign Up</StyledTitle>
        <StyledSubtitle>Welcome! Already have a account?</StyledSubtitle>
        <StyledLink>Sign In</StyledLink>
      </Wrapper>
      <Wrapper>
        <DefaultInput placeholder="Username" />
        <DefaultInput placeholder="Email" />
        <InputPassword placeholder="Password" />
        <InputPassword placeholder="Confirm Password" />
      </Wrapper>
      <SquareCheckbox text="Remember Me" />
    </Container>
  );
};

export default SignUp;
