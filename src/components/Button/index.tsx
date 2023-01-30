import { ButtonType, TextButtonType } from '@app/interfaces/ButtonType';
import React from 'react';

import { StyledButton, StyledButtonText } from './styles';

interface Props extends ButtonType, TextButtonType {
  [key: string]: unknown;
  text: string;
}

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
