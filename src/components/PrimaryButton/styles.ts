import styled from 'styled-components/native';

export const StyledTouchableOpacity = styled.TouchableOpacity`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  height: 45px;
  background-color: ${({theme}) => theme.colors.darkGreen};
  border-radius: 10px;
`;

export const Styledtext = styled.Text`
  font-family: 'Inter-Bold';
  font-size: 14px;
  line-height: 17px;
  color: ${({theme}) => theme.colors.white};
`;
