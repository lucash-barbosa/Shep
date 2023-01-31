import Button from '@app/components/Button';
import Input from '@app/components/Input';
import InputPassword from '@app/components/InputPassword';
import SquareCheckbox from '@app/components/SquareCheckbox';
import { AuthType } from '@app/interfaces/AuthType';
import { Formik } from 'formik';
import React from 'react';

import {
  Container,
  Wrapper,
  StyledSubtitle,
  StyledTitle,
  StyledLink,
  WrapperForm,
} from './styles';
import Validates from './Validates';

const SignUp = () => {
  return (
    <Container>
      <Wrapper>
        <StyledTitle>Sign Up</StyledTitle>
        <StyledSubtitle>Welcome! Already have a account?</StyledSubtitle>
        <StyledLink>Sign In</StyledLink>
      </Wrapper>

      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validate={(values) => {
          const errors: AuthType = {};

          Validates(values, errors);

          return errors;
        }}
        onSubmit={(values) => console.log(values)}
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
              value={values.email}
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
            <Button text="Sign Up" onPress={handleSubmit} />
          </WrapperForm>
        )}
      </Formik>
      <SquareCheckbox text="Remember Me" />
    </Container>
  );
};

export default SignUp;
