import React from 'react';
import {AppText} from '../../global/styles/fonts/AppText';
import {StyledTouchableOpacity} from './styles';

type Props = {
  onPress: () => void;
  text: string;
};

const PrimaryButton = ({text, onPress}: Props) => {
  return (
    <StyledTouchableOpacity onPress={onPress}>
      <AppText>{text}</AppText>
    </StyledTouchableOpacity>
  );
};

export default PrimaryButton;
