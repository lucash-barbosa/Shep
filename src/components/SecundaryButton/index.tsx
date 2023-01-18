import React from 'react';
import {StyledSecundaryButton, StyledSecundaryButtonText} from './styles';

type Props = {
  [key: string]: any;
  text: string;
};

const SecundaryButton = ({text, ...props}: Props) => {
  return (
    <StyledSecundaryButton {...props}>
      <StyledSecundaryButtonText>{text}</StyledSecundaryButtonText>
    </StyledSecundaryButton>
  );
};

export default SecundaryButton;
