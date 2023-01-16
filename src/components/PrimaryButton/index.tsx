import React from 'react';
import {StyledPrimaryButton, StyledPrimaryButtonText} from './styles';

type Props = {
  onPress: () => void;
  text: string;
};

const PrimaryButton = ({text, onPress}: Props) => {
  return (
    <StyledPrimaryButton onPress={onPress}>
      <StyledPrimaryButtonText>{text}</StyledPrimaryButtonText>
    </StyledPrimaryButton>
  );
};

export default PrimaryButton;
