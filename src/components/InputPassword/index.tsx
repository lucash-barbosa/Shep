/* eslint-disable react-native/no-inline-styles */
import EyeClose from '@app/assets/icons/eye-close.svg';
import EyeOpen from '@app/assets/icons/eye-open.svg';
import React, { useState } from 'react';
import { View } from 'react-native';

import { Error, StyledButton, StyledInput } from './styles';

type Props = {
  [key: string]: unknown;
  error?: string | undefined;
  touched: any;
};

const InputPassword = ({ error = '', touched, ...props }: Props) => {
  const [hideText, setHideText] = useState(true);

  return (
    <View>
      <View>
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
      </View>
      {error !== '' && touched && <Error>{error}</Error>}
    </View>
  );
};

export default InputPassword;
