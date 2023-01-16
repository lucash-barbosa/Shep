import styled from 'styled-components';

import {
  StyledPrimaryButton,
  StyledPrimaryButtonText,
} from '../PrimaryButton/styles';

export const StyledSecundaryButton = styled(StyledPrimaryButton)`
  background-color: ${({theme}) => theme.colors.white};
`;

export const StyledSecundaryButtonText = styled(StyledPrimaryButtonText)`
  color: ${({theme}) => theme.colors.darkGreen};
`;
