/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Error, StyledButton, StyledInput, Wrapper} from './styles';

import EyeOpen from '../../assets/icons/eye-open.svg';
import EyeClose from '../../assets/icons/eye-close.svg';

type Props = {
  [key: string]: any;
  error?: string | undefined;
};

const InputPassword = ({error, ...props}: Props) => {
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
