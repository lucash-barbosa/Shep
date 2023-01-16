/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';
import {StyledButton, StyledInput} from './styles';

import EyeOpen from '../../assets/icons/eye-open.svg';
import EyeClose from '../../assets/icons/eye-close.svg';

type Props = {
  placeholder?: string;
};

const InputPassword = ({placeholder}: Props) => {
  const [hideText, setHideText] = useState(false);

  return (
    <View>
      <StyledInput
        placeholder={placeholder}
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
  );
};

export default InputPassword;
