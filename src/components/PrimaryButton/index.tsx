import React from 'react';
import {Styledtext, StyledTouchableOpacity} from './styles';

type Props = {
  onPress: () => void;
  text: string;
};

const PrimaryButton = ({text, onPress}: Props) => {
  return (
    <StyledTouchableOpacity onPress={onPress}>
      <Styledtext>{text}</Styledtext>
    </StyledTouchableOpacity>
  );
};

export default PrimaryButton;
