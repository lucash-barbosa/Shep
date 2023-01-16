import styled from 'styled-components/native';

export const StyledPrimaryButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 0 15%;
  height: 45px;
  background-color: ${({theme}) => theme.colors.darkGreen};
  border-radius: 10px;
`;

export const StyledPrimaryButtonText = styled.Text`
  font-family: 'Inter-Bold';
  font-size: 14px;
  line-height: 17px;
  color: ${({theme}) => theme.colors.white};
`;
