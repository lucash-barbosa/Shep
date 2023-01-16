/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyledInput} from './styles';

type Props = {
  placeholder?: string;
};

const DefaultInput = ({placeholder}: Props) => {
  return (
    <StyledInput
      placeholder={placeholder}
      placeholderTextColor="#cacaca"
      style={{
        fontFamily: 'Inter-Regular',
        color: '#000',
      }}
      secureTextEntry={false}
    />
  );
};

export default DefaultInput;
