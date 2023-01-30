import React from 'react';
import {StyledButton, StyledButtonText} from './styles';

type Props = {
  [key: string]: any;
  text: string;
  backgroundColor?: string;
  textColor?: string;
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
