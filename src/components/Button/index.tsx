import theme from '@app/global/styles/theme';
import React from 'react';

import { StyledButton, StyledButtonText } from './styles';

type Props = {
  [key: string]: unknown;
  text: string;
  backgroundColor?: keyof typeof theme.colors;
  textColor?: keyof typeof theme.colors;
};

const Button = ({
  text,
  backgroundColor = 'darkGreen',
  textColor = 'white',
  ...props
}: Props) => {
  return (
    <StyledButton backgroundColor={backgroundColor} {...props}>
      <StyledButtonText textColor={textColor}>{text}</StyledButtonText>
    </StyledButton>
  );
};

export default Button;
