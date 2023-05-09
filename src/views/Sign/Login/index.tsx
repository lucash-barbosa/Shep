import rememberUserHandler from '@app/api/utils/rememberUserHandler';
import Button from '@app/components/Button';
import Input from '@app/components/Input';
import InputPassword from '@app/components/InputPassword';
import SquareCheckbox from '@app/components/SquareCheckbox';
import { LoginCredentialsProps } from '@app/global/types';
import { useAuthContext } from '@app/hooks/useAuthContext';
import useLogin from '@app/hooks/useLogin';
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

const Login = (): ReactElement => {
  const { login, isLoading, error: serverError } = useLogin();

  // remove
  const { user, dispatch } = useAuthContext();

  const handleSubmit = async (values: LoginCredentialsProps): Promise<void> => {
    if (values.email && values.password) {
      const email = values.email;
      const password = values.password;
      const rememberUser = values.rememberUser;

      const token = await login({ email, password });
      await rememberUserHandler(rememberUser, token);
    }
  };

  return (
    <Container>
      <Wrapper>
        <StyledTitle>Login</StyledTitle>
        <StyledSubtitle>Welcome! Do not have a account yet?</StyledSubtitle>
        <StyledLink>Sign Up</StyledLink>
      </Wrapper>

      <Button
        text={'test local storage'}
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

      <Button
        text={'test authContext'}
        onPress={() => {
          console.log(user);
        }}
        disabled={isLoading}
        isLo
        ading={isLoading}
      />
      <Button
        text={'test authContext logout'}
        onPress={() => {
          dispatch({ type: 'LOGOUT', payload: null });
        }}
        disabled={isLoading}
        isLoading={isLoading}
      />

      <Formik
        initialValues={{
          email: '',
          password: '',
          rememberUser: false,
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
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email?.toLowerCase()}
                touched={touched.email}
                error={errors.email}
              />
              <InputPassword
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                touched={touched.password}
                error={errors.password}
              />
            </WrapperInput>
            <WrapperAuth>
              {serverError && (
                <WrapperError>
                  <StyledError>{serverError.message}</StyledError>
                </WrapperError>
              )}
              <Button
                text="Login"
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

export default Login;
