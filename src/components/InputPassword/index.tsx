/* eslint-disable react-native/no-inline-styles */
import EyeClose from '@app/assets/icons/eye-close.svg';
import EyeOpen from '@app/assets/icons/eye-open.svg';
import React, { useState } from 'react';

import { Error, StyledButton, StyledInput, Wrapper } from './styles';

type Props = {
  [key: string]: unknown;
  error?: string | undefined;
};

const InputPassword = ({ error, ...props }: Props) => {
  const [hideText, setHideText] = useState(false);

  return (
    <Wrapper>
      <StyledInput
        {...props}
        placeholderTextColor="#cacaca"
        style={{
          fontFamily: 'Inter-Regular',
          color: '#000',
        }}
        secureTextEntry={hideText}
      />
      <StyledButton onPress={() => setHideText(!hideText)}>
        {hideText ? (
          <EyeOpen fill={'#0DA54B'} />
        ) : (
          <EyeClose fill={'#0DA54B'} />
        )}
      </StyledButton>
      {error !== undefined && <Error>{error}</Error>}
    </Wrapper>
  );
};

export default InputPassword;
