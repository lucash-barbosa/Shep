import React from 'react';
import {StyledPrimaryButton, StyledPrimaryButtonText} from './styles';

type Props = {
  [key: string]: any;
  text: string;
};

const PrimaryButton = ({text, ...props}: Props) => {
  return (
    <StyledPrimaryButton {...props}>
      <StyledPrimaryButtonText>{text}</StyledPrimaryButtonText>
    </StyledPrimaryButton>
  );
};

export default PrimaryButton;
