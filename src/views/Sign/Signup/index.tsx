import rememberUserHandler from '@app/api/utils/rememberUserHandler';
import Button from '@app/components/Button';
import Input from '@app/components/Input';
import InputPassword from '@app/components/InputPassword';
import SquareCheckbox from '@app/components/SquareCheckbox';
import { SignupCredentialsProps } from '@app/global/types';
import useSignup from '@app/hooks/useSignup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import React, { ReactElement } from 'react';

import {
  Container,
  Wrapper,
  StyledSubtitle,
  StyledTitle,
  StyledLink,
  WrapperForm,
  StyledError,
  WrapperError,
  WrapperInput,
  WrapperAuth,
} from './styles';
import Validates from './Validates';

const SignUp = (): ReactElement => {
  const { signup, isLoading, error: serverError } = useSignup();

  const handleSubmit = async (
    values: SignupCredentialsProps
  ): Promise<void> => {
    if (values.email && values.password) {
      const username = values.username;
      const email = values.email;
      const password = values.password;
      const rememberUser = values.rememberUser;

      const token = await signup({ username, email, password });
      await rememberUserHandler(rememberUser, token);
    }
  };

  return (
    <Container>
      <Wrapper>
        <StyledTitle>Sign Up</StyledTitle>
        <StyledSubtitle>Welcome! Already have a account?</StyledSubtitle>
        <StyledLink>Login</StyledLink>
      </Wrapper>

      <Button
        text={'test'}
        onPress={() => {
          AsyncStorage.getItem('@username').then((res) =>
            console.log('username', res)
          );
          AsyncStorage.getItem('@token').then((res) =>
            console.log('token', res)
          );
        }}
        disabled={isLoading}
        isLoading={isLoading}
      />

      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          rememberUser: false,
        }}
        validate={(values) => {
          const errors: any = {};

          Validates(values, errors);

          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <WrapperForm>
            <WrapperInput>
              <Input
                placeholder="Username"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                error={errors.username}
                touched={touched.username}
              />
              <Input
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email.toLowerCase()}
                error={errors.email}
                touched={touched.email}
              />
              <InputPassword
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                error={errors.password}
                touched={touched.password}
              />
              <InputPassword
                placeholder="Confirm Password"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                error={errors.confirmPassword}
                touched={touched.confirmPassword}
              />
            </WrapperInput>
            <WrapperAuth>
              {serverError && (
                <WrapperError>
                  <StyledError>{serverError.message}</StyledError>
                </WrapperError>
              )}
              <Button
                text="Sign Up"
                onPress={handleSubmit}
                disabled={isLoading}
                isLoading={isLoading}
              />
              <SquareCheckbox
                text="Remember Me"
                onPress={() => (values.rememberUser = !values.rememberUser)}
              />
            </WrapperAuth>
          </WrapperForm>
        )}
      </Formik>
    </Container>
  );
};

export default SignUp;
