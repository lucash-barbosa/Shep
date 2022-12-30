import styled from 'styled-components/native';

export const StyledTouchableOpacity = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 14px 0;
  gap: 10px;
  position: relative;
  height: 45px;
  background-color: ${({theme}) => theme.colors.darkGreen};
  border-radius: 10px;
`;

export const Styledtext = styled.Text`
  font-family: 'Inter-Bold';
  font-size: 14px;
  line-height: 17px;
  color: #fff;
`;
