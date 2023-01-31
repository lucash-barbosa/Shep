/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';

import { Error, StyledInput } from './styles';

type Props = {
  [key: string]: unknown;
  error?: string | undefined;
  touched?: any;
};

const Input = ({ error = '', touched, ...props }: Props) => {
  return (
    <View>
      <StyledInput
        {...props}
        placeholderTextColor="#cacaca"
        style={{
          fontFamily: 'Inter-Regular',
          color: '#000',
        }}
        secureTextEntry={false}
      />
      {error !== '' && touched && <Error>{error}</Error>}
    </View>
  );
};

export default Input;
