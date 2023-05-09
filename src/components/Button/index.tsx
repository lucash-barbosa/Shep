import theme from '@app/global/styles/theme';
import React, { ReactElement } from 'react';
import { ActivityIndicator } from 'react-native';

import { StyledButton, StyledButtonText } from './styles';

type Props = {
  [key: string]: unknown;
  text: string;
  backgroundColor?: keyof typeof theme.colors;
  textColor?: keyof typeof theme.colors;
  isLoading?: boolean | null;
};

const Button = ({
  text = '',
  backgroundColor = 'darkGreen',
  textColor = 'white',
  isLoading = false,
  ...props
}: Props): ReactElement => {
  return (
    <>
      <StyledButton backgroundColor={backgroundColor} {...props}>
        {isLoading ? (
          <ActivityIndicator size={30} color={textColor} />
        ) : (
          text !== '' && (
            <StyledButtonText textColor={textColor}>{text}</StyledButtonText>
          )
        )}
      </StyledButton>
    </>
  );
};

export default Button;
