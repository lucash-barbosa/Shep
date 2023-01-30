import React, {useState} from 'react';
import DefaultInput from '@app/components/Input';
import InputPassword from '@app/components/InputPassword';
import Button from '@app/components/Button';
import SquareCheckbox from '@app/components/SquareCheckbox';
import {
  Container,
  Wrapper,
  StyledSubtitle,
  StyledTitle,
  StyledLink,
} from './styles';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [usernameError, setUsernameError] = useState<string | undefined>(
    undefined,
  );
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [passwordError, setPasswordError] = useState<string | undefined>(
    undefined,
  );
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | undefined
  >(undefined);

  const usernameRegExp = /^.{1,10}$/;
  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{5,})/;

  const handleOnChange = () => {
    validateUsername();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
  };

  const validateUsername = () => {
    if (!usernameRegExp.test(username)) {
      setUsernameError('Username must contain a maximum of 10 characters');
    } else {
      setUsernameError(undefined);
    }
  };

  const validateEmail = () => {
    if (!emailRegExp.test(email)) {
      setEmailError('Email invalid');
    } else {
      setEmailError(undefined);
    }
  };

  const validatePassword = () => {
    if (!passwordRegExp.test(password)) {
      setPasswordError(
        'Password must have at least one symbol, one uppercase and lowercase letter, and at least 5 characteres',
      );
    } else {
      setPasswordError(undefined);
    }
  };

  const validateConfirmPassword = () => {
    if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords should be the same');
    } else {
      setConfirmPasswordError(undefined);
    }
  };

  return (
    <Container>
      <Wrapper>
        <StyledTitle>Sign Up</StyledTitle>
        <StyledSubtitle>Welcome! Already have a account?</StyledSubtitle>
        <StyledLink>Sign In</StyledLink>
      </Wrapper>
      <Wrapper>
        <DefaultInput
          onChangeText={setUsername}
          placeholder="Username"
          error={usernameError}
        />
        <DefaultInput
          onChangeText={setEmail}
          placeholder="Email"
          error={emailError}
        />
        <InputPassword
          onChangeText={setPassword}
          placeholder="Password"
          error={passwordError}
        />
        <InputPassword
          onChangeText={setConfirmPassword}
          placeholder="Confirm Password"
          error={confirmPasswordError}
        />
        <Button text="Sign Up" onPress={handleOnChange} />
      </Wrapper>
      <SquareCheckbox text="Remember Me" />
    </Container>
  );
};

export default SignUp;
