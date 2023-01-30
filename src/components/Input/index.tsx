/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Error, StyledInput, Wrapper} from './styles';

type Props = {
  [key: string]: any;
  error?: string | undefined;
};

const DefaultInput = ({error, ...props}: Props) => {
  return (
    <Wrapper>
      <StyledInput
        {...props}
        placeholderTextColor="#cacaca"
        style={{
          fontFamily: 'Inter-Regular',
          color: '#000',
        }}
        secureTextEntry={false}
      />
      {error !== undefined && <Error>{error}</Error>}
    </Wrapper>
  );
};

export default DefaultInput;
