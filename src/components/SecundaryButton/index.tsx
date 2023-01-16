import React from 'react';
import {StyledSecundaryButton, StyledSecundaryButtonText} from './styles';

type Props = {
  onPress: () => void;
  text: string;
};

const SecundaryButton = ({text, onPress}: Props) => {
  return (
    <StyledSecundaryButton onPress={onPress}>
      <StyledSecundaryButtonText>{text}</StyledSecundaryButtonText>
    </StyledSecundaryButton>
  );
};

export default SecundaryButton;
